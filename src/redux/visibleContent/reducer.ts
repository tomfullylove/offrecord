import {UPDATE_CONTENT, VisibleContentActionTypes} from './types';

const initialState = {}

function visibleContent(state = initialState, action: VisibleContentActionTypes) {
  switch (action.type) {
    case UPDATE_CONTENT:
      return {
        ...action.content,
      };
    default:
      return state;
  }
}

export default visibleContent;
