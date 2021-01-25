import { UPDATE_CONTENT, VisibleContentActionTypes } from './types';

export function updateVisibleContent(content: any): VisibleContentActionTypes {
  return {
    type: UPDATE_CONTENT,
    content,
  };
}

export type VisbileContentActions =
  | ReturnType<typeof updateVisibleContent>
