// actions.js
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../Utils/constants";
import * as types from "./Constants";

const base_url = BASE_URL + "auth/";

const apiClient = axios.create({
  baseURL: base_url,
  withCredentials: true,
});

export const setOtpSend = (data) => ({
  type: types.SET_OTP_SEND,
  payload: data,
});

const fetchDataRequest = () => ({ type: types.FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: data,
});
const fetchDataFailure = (error) => ({
  type: types.FETCH_DATA_FAILURE,
  payload: error,
});

export const requestOtp = (userData, is) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await apiClient.post(`${base_url}request-otp`, {
        userData,
        is,
      });
      const data = response.data;

      if (data.success) {
        dispatch({
          type: types.OTP_SUCCESS,
          payload: data.success,
        });
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

      dispatch(setOtpSend(data.success));
    } catch (error) {
      console.error("Error in RegisterUser:", error);
      if (error.response) {
        dispatch({
          type: types.OTP_FAILURE,
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      } else {
        dispatch({
          type: types.OTP_FAILURE,
          payload: error.response.data.message,
        });
        toast.error("Something went wrong");
      }
      dispatch(setOtpSend(false));
    }
  };
};

export const registerUser = (userData, otp) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await apiClient.post(`${base_url}register`, {
        userData,
        otp,
      });
      console.log(response);
      if (response.data.success) {
        dispatch(fetchDataSuccess(response.data.success));
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setRegisterData(response.data));
        toast.success(response.data.msg.message);
      } else {
        toast.error(response.data.msg.message);
      }
    } catch (error) {
      console.error("Error in RegisterUser:", error);
      if (error.response) {
        dispatch(fetchDataFailure(error.response.data.msg.message));
        toast.error(error.response.data.msg.message);
      } else {
        dispatch(fetchDataFailure(error.message));
        toast.error("Something went wrong");
      }
    }
  };
};

export const loginUser = (userData, otp) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await apiClient.post(`${base_url}login`, {
        userData,
        otp,
      });
      const data = response.data;
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(fetchDataSuccess(data.success));
        toast.success(data.msg.message);
      } else {
        toast.error(data.msg.message);
      }
    } catch (error) {
      console.error("Error in Login user:", error);
      if (error.response) {
        dispatch(fetchDataFailure(error.response.data.msg.message));
        toast.error(error.response.data.msg.message);
      } else {
        dispatch(fetchDataFailure(error.message));
        toast.error("Something went wrong");
      }
    }
  };
};


export const loadUser = () => async (dispatch) => {
  try {
      dispatch({ type: types.LOAD_REQUEST });

      const user = JSON.parse(localStorage.getItem('user')); // Get the token
      const token = user.token
      const config = {
          headers: {
              Authorization: `${token}`,
          },
      };
      const { data } = await axios.get(`${base_url}me`, config);

      dispatch({
          type: types.LOAD_SUCCESS,
          payload: data.user,
      });

  } catch (error) {
      dispatch({
          type: types.LOAD_FAILURE,
          payload: error.response.data.message,
      });
  }
};


export const logoutUser = () => async (dispatch) => {
  try {
      await apiClient.get(`${base_url}logout`);
      localStorage.removeItem('authToken'); // Clear token from local storage
      dispatch({ type: types.LOGOUT_USER_SUCCESS });
  } catch (error) {
      dispatch({
          type: types.LOGOUT_USER_FAIL,
          payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
      });
  }
};


export const setRegisterData = (data) => ({
  type: types.SET_REGISTERATION_DATA,
  payload: data,
});
