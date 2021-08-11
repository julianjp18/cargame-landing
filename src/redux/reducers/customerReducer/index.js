import {
  REQUEST_CHANGES_FAILURE,
  REQUEST_CHANGES_SUCCESS,
  VERIFY_INFORMATION_FAILURE,
  VERIFY_INFORMATION_SUCCESS,
  VIEW_DRIVER_PROFILE_FAILURE,
  VIEW_DRIVER_PROFILE_SUCCESS,
} from "../../sagas/customer/constants";

export const INITIAL_STATE = {
  driverProfile: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case VIEW_DRIVER_PROFILE_SUCCESS:
      return {
        ...state,
        driverProfile: {
          ...payload,
        },
      };
    case VERIFY_INFORMATION_SUCCESS:
    case REQUEST_CHANGES_SUCCESS:
      return {
        ...state,
      };
    case VIEW_DRIVER_PROFILE_FAILURE:
      return { ...INITIAL_STATE };
    case REQUEST_CHANGES_FAILURE:
    case VERIFY_INFORMATION_FAILURE:
    default:
      return state;
  }
};
