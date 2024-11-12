import { combineReducers } from 'redux';
import auth from './Authentication/Reducer'; // Adjust the path as necessary
import userDetails from './User/Reducer'
// Combine all reducers here
const rootReducer = combineReducers({
    auth,
    user:userDetails
    // Add other reducers here
    // anotherReducer: anotherReducer
});

export default rootReducer;
