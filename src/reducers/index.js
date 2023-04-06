import { combineReducers } from 'redux';
import loginSlice from './login';

// ==-- IMPORT REDUCERS--==
// import loginReducer from './login';
import utilitiesReducer from './utilities';

const rootReducer = combineReducers({
  // login: loginReducer,
  login: loginSlice.reducer,
  utilities: utilitiesReducer,
});

export default rootReducer;