import { combineReducers } from 'redux';

import alertStates from './alertReducer';
import blogStates from './blogReducer';

export default combineReducers({
  alertStates,
  blogStates,
});
