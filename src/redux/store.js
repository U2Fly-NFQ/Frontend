import { configureStore } from '@reduxjs/toolkit'

import loginSlice from './slices/loginSlice'
import flightSlice from './slices/flightSlice'
import airportSlice from './slices/airportSlice'

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    flights: flightSlice.reducer,
    airports: airportSlice.reducer,
  },
})

export default store
