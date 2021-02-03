import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  content: {},
  loading: true,
  error: null
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState: initialState,
  reducers: {
    getDiscoverContentStart(state) {
      state.error = null
      state.loading = true
    },
    getDiscoverContentSuccess(state, action) {
      const { content } = action.payload
      state.content = content
      state.loading = false
    },
    getDiscoverContentFailure(state, action) {
      const { error } = action.payload
      state.error = error
      state.loading = false
    }
  }
})

export const {
  getDiscoverContentStart,
  getDiscoverContentFailure,
  getDiscoverContentSuccess
} = discoverSlice.actions

export const getDiscoveryContent = () => async dispatch => {
  const user_id = '123';
  const url = `http://localhost:3000/dev/content/discovery/${user_id}`;

  dispatch(getDiscoverContentStart());
  fetch(url, {method: 'GET'}).then(response => response.json())
  .then(data => {
    dispatch(getDiscoverContentSuccess({content: data.content}));
  })
  .catch((error) => {
    dispatch(getDiscoverContentFailure(error));
  });
}

export default discoverSlice.reducer
