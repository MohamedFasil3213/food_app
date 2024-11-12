// userDetailsReducer.js

// Define initial state
const initialState = {
    isAuth: false,
    place: '',
    pincode: '',
    address: '',
    name: ''
  };
  
  // Import action types
  import { SET_AUTH, SET_USER_DETAILS, SET_PLACE, SET_PINCODE, SET_ADDRESS } from './Actions';
  
  // Reducer function
  const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTH:
        return {
          ...state,
          isAuth: action.payload
        };
      case SET_USER_DETAILS:
        const { place, pincode, address, name } = action.payload;
        return {
          ...state,
          place,
          pincode,
          address,
          name
        };
      case SET_PLACE:
        return {
          ...state,
          place: action.payload
        };
      case SET_PINCODE:
        return {
          ...state,
          pincode: action.payload
        };
        case SET_ADDRESS:
        return {
          ...state,
          address: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userDetailsReducer;
  