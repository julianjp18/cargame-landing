import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS } from '../constants';
import notify from '../../../helpers/notify';
import { firebaseAuth, firestoreDB } from '../../../../components/utils/firebase';
import { saveDataToStorage } from '../../../helpers/localStorage';
import { openNotification } from '../../../helpers/extras';
import { put } from '@redux-saga/core/effects';

const forgotPasswordNotifier = (formValues) =>
  notify({
    type: FORGOT_PASSWORD,
    formValues,
  });

function* forgotPasswordAction() {
  yield put({ type: FORGOT_PASSWORD_SUCCESS, payload: {}, });
}

export { forgotPasswordAction, forgotPasswordNotifier };
