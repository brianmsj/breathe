import { combineReducers } from 'redux';
import ScenesReducer from './reducer_scenes';

const rootReducer = combineReducers({
  scenes: ScenesReducer
});

export default rootReducer;