import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import flightAPI from '../../api/Flight'
import discountInfo from '../../api/Discount'
const initialState = {
  loadding: false,
  userInformation: {},
  dataFlight: {},
  discountInfo: {
    percent: 0,
  },
}
export const getDataFlights = createAsyncThunk(
  'flight/getDataFlights',
  async (idFlight) => {
    const respone = await flightAPI.get(1)
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
      state.userInformation = {
        ...action.payload,
        dateOfBirth: action.payload.dateTimePicker,
      }
    },
  },
  extraReducers: {
    [getDiscountCheck.pending]: (state, action) => {
      state.loadding = true
    },
    [getDiscountCheck.rejected]: (state, action) => {
      state.loadding = false
      state.discountInfo.percent = 0
    },
    [getDiscountCheck.fulfilled]: (state, action) => {
      const { status, data } = action.payload
      if (status === 'success') {
        console.log(data)
        state.discountInfo = data
      }
    },
    [getDataFlights.pending]: (state) => {
      state.loadding = true
    },
    [getDataFlights.rejected]: (state) => {
      state.loadding = true
    },
    [getDataFlights.fulfilled]: (state, action) => {
      state.loadding = false
      const { status, data } = action.payload
      if (status === 'success') {
        state.dataFlight = { ...data, seat: data.seat[0] }
      }
    },
  },
})
export const { addDataIntoBookingFlight } = bookingFlightsSlice.actions
export default bookingFlightsSlice
