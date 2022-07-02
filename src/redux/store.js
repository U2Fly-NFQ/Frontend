import { configureStore } from '@reduxjs/toolkit'
import bookingFlightsSlice from './slices/bookingFlightsSlice'

// import loginSlice from './slices/loginSlice'
import flightSlice from './slices/flightSlice'
import airportSlice from './slices/airportSlice'

const store = configureStore({
  reducer: {
    // login: loginSlice.reducer,
    bookingFlight: bookingFlightsSlice.reducer,
    flights: flightSlice.reducer,
    airports: airportSlice.reducer,
  },
})

export default store
