import { combineReducers } from 'redux';

// ==-- IMPORT REDUCERS--==
import loginReducer from './login';
import utilitiesReducer from './utilities';

const rootReducer = combineReducers({
  login: loginReducer,
  utilities: utilitiesReducer,
});

export default rootReducer;