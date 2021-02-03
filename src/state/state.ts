import { configureStore } from '@reduxjs/toolkit'

import { discoverReducer, visibleContentReducer } from './features';


const store = configureStore({
  reducer: {
    discover: discoverReducer,
    visibleContent: visibleContentReducer
  }
})

export default store
