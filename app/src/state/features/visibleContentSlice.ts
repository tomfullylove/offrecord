import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  content: {
    id: '',
    title: '',
    intro: '',
    content: {},
    date: '',
    type: '',
  },
  loading: false
}

const visibleContentSlice = createSlice({
  name: 'visibleContent',
  initialState: initialState,
  reducers: {
    updateVisibleContent(state, action) {
      state.content = action.payload
    }
  }
})

export const { updateVisibleContent } = visibleContentSlice.actions

export default visibleContentSlice.reducer
