import { combineReducers } from 'redux';
import pins from './Pins';
import settings from './Settings';

export default combineReducers({
  pins,
  settings
});
