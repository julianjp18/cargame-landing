import { UPLOAD_DRIVER_DOCS } from '../constants';
import notify from '../../../helpers/notify';
import { firebaseAuth, firestoreDB } from '../../../../components/utils/firebase';
import { saveDataToStorage } from '../../../helpers/localStorage';
import { openNotification } from '../../../helpers/extras';
import { put } from '@redux-saga/core/effects';

const uploadDriverDocsNotifier = (formValues) =>
  notify({
    type: UPLOAD_DRIVER_DOCS,
    formValues,
  });

function* uploadDriverDocsAction({ formValues }) {
  const { username, password } = formValues;
  const responseLogIn = [];

  yield firebaseAuth
    .signInWithEmailAndPassword(username, password)
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
              const { name } = doc.data();

              resData.getIdToken().then((idToken) => {
                const expirationDate = new Date(new Date().getTime() + parseInt(resData.createdAt) * 1000);
                saveDataToStorage(
                  idToken,
                  resData.uid,
                  expirationDate,
                  username,
                  name,
                  'admin',
                );

                responseLogIn.push({
                  ...doc.data(),
                  token: idToken,
                  role: 'admin',
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

  /*
  if (responseLogIn.length > 0) {
    yield put({ type: LOG_IN_SUCCESS, payload: { ...responseLogIn[0] }, });
  } else {
    yield put({ type: LOG_IN_FAILURE, payload: {}, });
  }
*/
}

export { uploadDriverDocsAction, uploadDriverDocsNotifier };
