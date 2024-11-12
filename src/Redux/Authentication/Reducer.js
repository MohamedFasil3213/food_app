// reducer.js
import * as types from './Constants'

const initialState = {
  isAuth: false,
  loading: false,
  otpSend: false,
  error: "",
  registerationData: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_REQUEST:
    case types.LOAD_REQUEST:
      return {
        ...state,
        isAuth: false,
        loading: true,
        error: "",
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        isAuth: true,
        loading: false,
        otpSend: action.payload,
        error: "",
      };
    case types.LOAD_SUCCESS:
      return {
        isAuth: true,
        loading: false,
        userInfo: action.payload,
        error: "",
      }
    case types.OTP_SUCCESS:
      return {
        ...state,
        otpSend: action.payload,
        loading: false,
      };
    case types.OTP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.FETCH_DATA_FAILURE:
    case types.LOAD_FAILURE:
    case types.LOGOUT_USER_FAIL:
      return {
        isAuth: false,
        loading: false,
        error: action.payload,
      };
    case types.SET_OTP_SEND:
      return {
        ...state,
        otpSend: action.payload,
      };
      case types.LOGOUT_USER_SUCCESS:
        return {
            loading: false,
            userInfo: null,
            isAuth: false,
            error: null,
        };
    case types.SET_REGISTERATION_DATA:
      return {
        ...state,
        registerationData: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
