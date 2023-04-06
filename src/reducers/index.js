import { combineReducers } from 'redux';

// ==-- IMPORT SLICE--==
import loginSlice from '../slice/login';
import utilitiesSlice from '../slice/utilities';

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  utilitiesReducer: utilitiesSlice,
});

export default rootReducer;