import {
  LOG_IN_SUCCESS,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_FAILURE,
} from '../../sagas/auth/constants';

export const INITIAL_STATE = {
  token: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case LOG_IN_SUCCESS:
      return { ...state, ...payload };
    case VERIFY_TOKEN_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case VERIFY_TOKEN_FAILURE:
      return { ...INITIAL_STATE, verified: true };
    default:
      return state;
  }
};
