import {
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_FAILURE,
} from '../../sagas/auth/constants';

export const INITIAL_STATE = {
  token: null,
  auth: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
    case LOG_IN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case VERIFY_TOKEN_SUCCESS:
      return { ...state, ...{ ...payload } };
    case LOG_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case LOG_OUT_SUCCESS:
    case VERIFY_TOKEN_FAILURE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
