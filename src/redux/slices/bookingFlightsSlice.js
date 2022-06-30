import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import flightAPI from '../../api/Flight'
import discountInfo from '../../api/Discount'
const initialState = {
  loadding: false,
  userInformation: {},
  data: {
    flightFrom: {},
    flightTo: {},
    flightRules: [],
    price: 30.5,
  },
  discountInfo: 0,
}
export const getDataFlights = createAsyncThunk(
  'flight/getDataFlights',
  async (idFlight) => {
    const respone = await flightAPI.get(idFlight)
    return respone.data
  }
)

export const getDiscountCheck = createAsyncThunk(
  'discount/getDiscountCheck',
  async (idFlight) => {
    const respone = await discountInfo.getDiscountById(idFlight.idDiscount)
    return respone.data
  }
)
const bookingFlightsSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addDataIntoBookingFlight: (state, action) => {
      let { apartment, city, country, emailAddress } = action.payload
      state.userInformation = action.payload
    },
  },
  extraReducers: {
    [getDiscountCheck.pending]: (state, action) => {},
    [getDiscountCheck.rejected]: (state, action) => {},
    [getDiscountCheck.fulfilled]: (state, action) => {
      const { status, data } = action.payload
      if (status) {
        state.discountInfo = data.percent
      }
    },
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
