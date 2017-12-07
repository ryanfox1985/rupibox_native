import { combineReducers } from 'redux';
import pins from './Pins';
import settings from './Settings';
import logs from './Logs';

export default combineReducers({
  pins,
  settings,
  logs
});
