import moment from 'moment';
import axios from 'axios';
import { firebaseAuth, firestoreDB } from '../../../../components/utils/firebase';
import { SIGN_UP } from '../constants';
import notify from '../../../helpers/notify';
import { openNotification } from '../../../helpers/extras';

import { saveDataToStorage } from '../../../helpers/localStorage';

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

  axios.get("http://ip-api.com/json").then(response => {
    let data = response.data || {};
    ipAddressInfo = {
      ip: data.query || "",
      country: data.country || "",
      loading: false,
    };
  }).catch((err) => {
  });

  yield firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const resData = response.user;

      resData.getIdToken().then((idToken) => {
        saveDataToStorage(idToken, resData.uid, moment().format(), email, name);
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
          strikes: 0,
          address: '',
          city,
          drivenLicense: '',
          email,
          expireLicense: '',
          expiresPropertyCard: '',
          propertyCard: '',
          created_at: moment().format(),
          ipAdress: ipAddressInfo ? ipAddressInfo.ip : 'N/A',
          country: ipAddressInfo ? ipAddressInfo.country : 'N/A',
          termsAndConditions: true,
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
}

export { signUpAction, signUpNotifier };
