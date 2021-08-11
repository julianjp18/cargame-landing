import { REQUEST_CHANGES, REQUEST_CHANGES_SUCCESS, VERIFY_INFORMATION, VERIFY_INFORMATION_SUCCESS, VIEW_DRIVER_PROFILE, VIEW_DRIVER_PROFILE_SUCCESS } from '../constants';
import notify from '../../../helpers/notify';
import { openNotification } from '../../../helpers/extras';
import { put } from '@redux-saga/core/effects';
import { firestoreDB } from '../../../../components/utils/firebase';

const viewDriverNotifier = (formValues) =>
  notify({
    type: VIEW_DRIVER_PROFILE,
    formValues,
  });

function* viewDriverAction({ formValues }) {
    yield put({ type: VIEW_DRIVER_PROFILE_SUCCESS, payload: { ...formValues }, });
}

const verifyInformationNotifier = (formValues) =>
  notify({
    type: VERIFY_INFORMATION,
    formValues,
  });

function* verifyInformationAction({ formValues }) {
  
  yield firestoreDB.collection('Drivers').doc(formValues).update({
    isVerified: true
  })
  .then(() => {
    openNotification('success', '¡Usuario verificado exitosamente!', '');
  })
  .catch((error) => {
    openNotification('warning', '¡UPS! Ocurrió un error, inténtalo nuevamente.', '');
    console.error("Error updating document: ", error);
  });

  yield put({ type: VERIFY_INFORMATION_SUCCESS, payload: {} });
}

const requestChangesNotifier = (formValues) =>
  notify({
    type: REQUEST_CHANGES,
    formValues,
  });

function* requestChangesAction({ formValues }) {
  const { comments, id, documents } = formValues;
  yield firestoreDB.collection('VehiclesList').doc(id).update({
    comments,
    documentsForChange: documents,
    isVerified: false,
  })
  .then(() => {
    openNotification('success', '¡Se envío la solicitud correctamente!', '');
  })
  .catch((error) => {
    openNotification('warning', '¡UPS! Ocurrió un error, inténtalo nuevamente.', '');
    console.error("Error updating document: ", error);
  });

  yield put({ type: REQUEST_CHANGES_SUCCESS, payload: { }, });
}

export {
  verifyInformationAction,
  verifyInformationNotifier,
  viewDriverAction,
  viewDriverNotifier,
  requestChangesAction,
  requestChangesNotifier,
};
