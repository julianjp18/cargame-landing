import moment from 'moment';
import axios from 'axios';
import { firebaseAuth, firestoreDB } from '../../../../components/utils/firebase';
import { SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../constants';
import notify from '../../../helpers/notify';
import { openNotification } from '../../../helpers/extras';

import { saveDataToStorage } from '../../../helpers/localStorage';
import { put } from '@redux-saga/core/effects';

const signUpNotifier = (formValues) =>
  notify({
    type: SIGN_UP,
    formValues,
  });

function* signUpAction({ formValues }) {
  let ipAddressInfo = {};
  const {
    name,
    phone,
    identification,
    referidNumber,
    email,
    password,
    city,
  } = formValues;
  const responseLogIn = [];
  /*
  axios.get("http://ip-api.com/json").then(response => {
    let data = response.data || {};
    ipAddressInfo = {
      ip: data.query || "",
      country: data.country || "",
      loading: false,
    };
  }).catch((err) => {
    console.log(err);
  });
  */

  yield firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const resData = response.user;

      resData.getIdToken().then((idToken) => {
        saveDataToStorage(idToken, resData.uid, moment().format(), email, name, 'driver');
      });

      firestoreDB
        .collection('Drivers')
        .doc(resData.uid)
        .set({
          name,
          numberId: identification,
          phone,
          referidNumber: referidNumber ? referidNumber : 'N/A',
          profilePicture: null,
          isActive: true,
          isVerified: false,
          isInfoCompleted: false,
          strikes: 0,
          address: '',
          city,
          email,
          created_at: moment().format(),
          //ipAddress: ipAddressInfo ? ipAddressInfo.ip : 'N/A',
          //country: ipAddressInfo ? ipAddressInfo.country : 'N/A',
          termsAndConditions: true,
        });

      responseLogIn.push({
        name,
        phone,
        identification,
        referidNumber,
        email,
        password,
        city,
        isVerified: false,
        isActive: true,
        isInfoCompleted: false,
        role: 'driver',
        id: resData.uid,
      });

      openNotification('success', '¡Que bien!', 'Te has registrado exitosamente');
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        errorMessage = 'El correo electrónico se encuentra en uso. Intentalo nuevamente.'
      } else if (errorCode === 'OPERATION_NOT_ALLOWED') {
        errorMessage = 'Usuario y/o contraseña incorrecta. Intentelo nuevamente.'
      } else if (errorCode === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
        errorMessage = 'Se ha decidido bloquear la actividad de este dispositivo. Intenta más tarde.';
      }

      openNotification('warning', '¡UPS!', errorMessage);
    });

  if (responseLogIn.length > 0) {
    yield put({ type: SIGN_UP_SUCCESS, payload: { ...responseLogIn[0] }, });
  } else {
    yield put({ type: SIGN_UP_FAILURE, payload: {}, });
  }
}

export { signUpAction, signUpNotifier };
