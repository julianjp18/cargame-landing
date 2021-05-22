import { LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_OUT, LOG_OUT_SUCCESS } from '../constants';
import notify from '../../../helpers/notify';
import { firebaseAuth, firestoreDB } from '../../../../components/utils/firebase';
import { saveDataToStorage } from '../../../helpers/localStorage';
import { openNotification } from '../../../helpers/extras';
import { put } from '@redux-saga/core/effects';

const logInNotifier = (formValues) =>
  notify({
    type: LOG_IN,
    formValues,
  });

function* logInAction({ formValues }) {
  const { username, password } = formValues;
  const responseLogIn = [];

  yield firebaseAuth
    .signInWithEmailAndPassword(username.replace(' ', ''), password)
    .then(async (response) => {
      const resData = response.user;
      let isDriver = false;

      await firestoreDB
        .collection('Drivers')
        .doc(resData.uid)
        .get().then((doc) => {

          if (doc.data()) {
            const { name, isVerified } = doc.data();

            resData.getIdToken().then((idToken) => {
              const expirationDate = new Date(new Date().getTime() + parseInt(resData.createdAt) * 1000);
              saveDataToStorage(
                idToken,
                resData.uid,
                expirationDate,
                username,
                name,
                'driver',
                isVerified,
              );

              responseLogIn.push({
                ...doc.data(),
                token: idToken,
                role: 'driver',
              });
            });

            openNotification('success', '¡Bienvenido!', '');
            isDriver = true;
          } else {
            isDriver = false;
          }
        });

      if (!isDriver) {
        await firestoreDB
          .collection('Admin')
          .doc(resData.uid)
          .get().then((doc) => {

            if (doc.data()) {
              const { name, role } = doc.data();

              resData.getIdToken().then((idToken) => {
                const expirationDate = new Date(new Date().getTime() + parseInt(resData.createdAt) * 1000);
                saveDataToStorage(
                  idToken,
                  resData.uid,
                  expirationDate,
                  username,
                  name,
                  role,
                );

                responseLogIn.push({
                  ...doc.data(),
                  token: idToken,
                  role,
                });
              });

              openNotification('success', '¡Bienvenido!', '');
            } else {
              openNotification('warning', '¡Usuario y/o contraseña incorrectos!', '');
            }
          });
      }
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorMessage === 'EMAIL_NOT_FOUND' || errorCode === 'EMAIL_NOT_FOUND') {
        errorMessage = 'Usuario y/o contraseña incorrecta. Intentelo nuevamente.'
      } else if (errorCode === 'auth/user-not-found' || errorCode === 'INVALID_PASSWORD') {
        errorMessage = 'Usuario y/o contraseña incorrecta. Intentelo nuevamente.'
      }

      openNotification('warning', '¡UPS!', errorMessage);
    });

  if (responseLogIn.length > 0) {
    yield put({ type: LOG_IN_SUCCESS, payload: { ...responseLogIn[0] }, });
  } else {
    yield put({ type: LOG_IN_FAILURE, payload: {}, });
  }
}

const logOutNotifier = (formValues) =>
  notify({
    type: LOG_OUT,
    formValues,
  });

function* logOutAction() {
  yield put({ type: LOG_OUT_SUCCESS, payload: {}, });
}

export { logInAction, logInNotifier, logOutNotifier, logOutAction };
