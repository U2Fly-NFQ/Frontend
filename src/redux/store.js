import { configureStore } from '@reduxjs/toolkit'
import bookingFlightsSlice from './slices/bookingFlightsSlice'

import flightSlice from './slices/flightSlice'
import airportSlice from './slices/airportSlice'
import bookingSuccessFlightsSlice from './slices/bookingSuccessSlice'
import ticketSlice from './slices/ticketSlice'

const store = configureStore({
  reducer: {
    bookingFlight: bookingFlightsSlice.reducer,
    flights: flightSlice.reducer,
    airports: airportSlice.reducer,
    bookingSuccess: bookingSuccessFlightsSlice.reducer,
    tickets: ticketSlice.reducer,
  },
})

export default store
