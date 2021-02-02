import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  title: '',
  intro: '',
  content: {},
  date: '',
  type: '',
}

const visibleContentSlice = createSlice({
  name: 'visibleContent',
  initialState: initialState,
  reducers: {
    updateVisibleContent(state, action) {
      const { id, title, intro, content, date, type } = action.payload
      state.id = id
      state.title = title
      state.intro = intro
      state.content = content
      state.date = date
      state.type = type
    }
  }
})

export const { updateVisibleContent } = visibleContentSlice.actions

export default visibleContentSlice.reducer
