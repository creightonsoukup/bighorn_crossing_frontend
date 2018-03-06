import { combineReducers } from 'redux';

import signupReducer from './signupReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducers({
  signup: signupReducer,
  contactBroker: contactReducer
});

export default rootReducer;
