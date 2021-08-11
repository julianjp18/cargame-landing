import { RESTORE_PASSWORD, RESTORE_PASSWORD_SUCCESS } from '../constants';
import notify from '../../../helpers/notify';
import { firebaseAuth, firestoreDB } from '../../../../components/utils/firebase';
import { saveDataToStorage } from '../../../helpers/localStorage';
import { openNotification } from '../../../helpers/extras';
import { put } from '@redux-saga/core/effects';

const restorePasswordNotifier = (formValues) =>
  notify({
    type: RESTORE_PASSWORD,
    formValues,
  });

function* restorePasswordAction() {
  yield put({ type: RESTORE_PASSWORD_SUCCESS, payload: {}, });
}

export { restorePasswordAction, restorePasswordNotifier };
