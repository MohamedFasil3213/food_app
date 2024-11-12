// userActions.js

// Action types
export const SET_AUTH = 'SET_AUTH';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_PLACE = 'SET_PLACE';
export const SET_PINCODE = 'SET_PINCODE';
export const SET_ADDRESS="SET_ADDRESS";

// Action creators
export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  payload: isAuth
});

export const setUserDetails = ({ place, pincode, address, name }) => ({
  type: SET_USER_DETAILS,
  payload: { place, pincode, address, name }
});

export const setPlace = (place) => ({
  type: SET_PLACE,
  payload: place
});

export const setPincode = (pincode) => ({
  type: SET_PINCODE,
  payload: pincode
});
export const setAdress = (address) => ({
    type: SET_ADDRESS,
    payload: address
  });
