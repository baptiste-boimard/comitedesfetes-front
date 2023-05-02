import { combineReducers } from 'redux';

// ==-- IMPORT SLICE--==
import loginSlice from '../slice/login';
import utilitiesSlice from '../slice/utilities';
import authSlice from '../slice/auth';
import adminSlice from '../slice/admin';
import tinymceSlice from '../slice/tinymce';
import articleFormSlice from '../slice/articleForm';

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  utilitiesReducer: utilitiesSlice,
  authReducer: authSlice,
  adminReducer: adminSlice,
  tinymceReducer: tinymceSlice,
  articleFormReducer: articleFormSlice,
});

export default rootReducer;