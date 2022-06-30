import { configureStore } from '@reduxjs/toolkit'
import bookingFlightsSlice from './slices/bookingFlightsSlice'

import loginSlice from './slices/loginSlice'

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    bookingFlight: bookingFlightsSlice.reducer,
  },
})

export default store
