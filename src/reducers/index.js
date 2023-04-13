import { combineReducers } from 'redux';

// ==-- IMPORT SLICE--==
import loginSlice from '../slice/login';
import utilitiesSlice from '../slice/utilities';
import authSlice from '../slice/auth';

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  utilitiesReducer: utilitiesSlice,
  authReducer: authSlice,
});

export default rootReducer;