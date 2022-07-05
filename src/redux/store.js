import { configureStore } from '@reduxjs/toolkit'
import bookingFlightsSlice from './slices/bookingFlightsSlice'

import flightSlice from './slices/flightSlice'
import filterSlice from './slices/filterSlice'
import airportSlice from './slices/airportSlice'
import bookingSuccessFlightsSlice from './slices/bookingSuccessSlice'

const store = configureStore({
  reducer: {
    bookingFlight: bookingFlightsSlice.reducer,
    flights: flightSlice.reducer,
    airports: airportSlice.reducer,
    bookingSuccess: bookingSuccessFlightsSlice.reducer,
    filter: filterSlice.reducer,
  },
})

export default store
