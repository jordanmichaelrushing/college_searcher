import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import collegeReducer from './college/reducers/college';

const rootReducer = combineReducers({
  form: formReducer,
  college: collegeReducer
});

export default rootReducer;