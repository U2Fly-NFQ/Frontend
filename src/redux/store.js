import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import searchSlice from './slices/searchSlice'

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    search: searchSlice.reducer,
  },
})

export default store
