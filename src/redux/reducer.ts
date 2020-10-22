import { combineReducers } from 'redux';

import { reducer as configReducer } from './config';
import { reducer as disocverReducer } from './discover';

export default combineReducers({
  config: configReducer,
  discover: disocverReducer,
});
