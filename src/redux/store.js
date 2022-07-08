import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bookingFlightsSlice from './slices/bookingFlightsSlice'

import flightSlice from './slices/flightSlice'
import filterSlice from './slices/filterSlice'
import airportSlice from './slices/airportSlice'
import bookingSuccessFlightsSlice from './slices/bookingSuccessSlice'
import ticketSlice from './slices/ticketSlice'
import discountSlice from './slices/discountSlice'

const rootReducer = combineReducers({
  bookingFlight: bookingFlightsSlice.reducer,
  flights: flightSlice.reducer,
  airports: airportSlice.reducer,
  bookingSuccess: bookingSuccessFlightsSlice.reducer,
  tickets: ticketSlice.reducer,
  filter: filterSlice.reducer,
  discounts: discountSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
