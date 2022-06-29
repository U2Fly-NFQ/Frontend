import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import searchSlice from './slices/searchSlice'
import flightSlice from './slices/flightSlice'

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    search: searchSlice.reducer,
    flights: flightSlice.reducer,
  },
})

export default store
