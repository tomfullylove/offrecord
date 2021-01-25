import { combineReducers } from 'redux';

import { reducer as configReducer } from './config';
import { reducer as disocverReducer } from './discover';
import { reducer as visibleContentReducer } from './visibleContent';

export default combineReducers({
  config: configReducer,
  discover: disocverReducer,
  visibleContent: visibleContentReducer,
});
