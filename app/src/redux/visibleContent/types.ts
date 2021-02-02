export type ConfigState = Readonly<{
  test: string;
}>;

export const UPDATE_CONTENT = 'UPDATE_CONTENT'

interface updateVisibleContent {
  type: typeof UPDATE_CONTENT,
  content: any,
}

export type VisibleContentActionTypes = updateVisibleContent;
