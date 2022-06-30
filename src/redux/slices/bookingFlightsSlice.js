import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import flightAPI from '../../api/Flight'
const initialState = {
  loadding: false,
  userInformation: {},
  data: {
    flightFrom: {},
    flightTo: {},
    flightRules: [],
    price: 30.5,
  },
}
export const getDataFlights = createAsyncThunk(async (idFlight) => {
  const respone = await flightAPI.get(idFlight)
  return respone.data
})

const bookingFlightsSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addDataIntoBookingFlight: (state, action) => {
      let { apartment, city, country, emailAddress } = action.payload
      state.userInformation = action.payload
      // apartment: undefined
      // city: undefined
      // country: undefined
      // emailAddress: undefined
      // firstName: 'asdasd'
      // lastName: 'asdasd'
      // number: '01293123'
      // passport: 'asdasd'
      // state: undefined
      // streetAddress: 'asdasd'
      // visa: 'asdasd'
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getDataFlights.pedding, (state) => {
    //   state.loadding = true
    // })
    // builder.addCase(getDataFlights.rejected, (state) => {
    //   state.loadding = true
    // })
    // builder.addCase(getDataFlights.fullfilled, (state, action) => {
    //   state.loadding = false
    //   console.log(action.payload)
    // })
  },
})
export const { addDataIntoBookingFlight } = bookingFlightsSlice.actions
export default bookingFlightsSlice
