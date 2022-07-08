import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import flightAPI from '../../api/Flight'
import discountInfo from '../../api/Discount'
import moment from 'moment'

export const initialState = {
  loadding: false,
  userInformation: {},
  dataFlight: {},
  discountInfo: {
    percent: 0,
  },
  dataRoundTripFlight: {},
  currentMethods: 0,
  priceAfterDiscount: 0,
}

export const getDataFlights = createAsyncThunk(
  'bookingFlight/getDataFlights',
  async (idFlight) => {
    const response = await flightAPI.get(idFlight)
    return response.data
  }
)

export const getDiscountCheck = createAsyncThunk(
  'flight/getDiscountCheck',
  async (idFlight) => {
    const response = await discountInfo.getDiscountById(idFlight.idDiscount)
    return response.data
  }
)
export const getUserDataInBooking = createAsyncThunk(
  'flight/getUserData',
  async (idUser) => {
    const response = await flightAPI.getUserData(idUser)
    return response.data
  }
)

export const createBookingFlight = createAsyncThunk(
  'flight/createBooking',
  async (params) => {
    const response = await flightAPI.createATicket(params)
    return response.data
  }
)

export const getRoundTripBookingFlightAsync = createAsyncThunk(
  'flight/RoundTripBooking',
  async (idFlight, thunkAPI) => {
    const response = await flightAPI.get(idFlight)
    return response.data
  }
)
const bookingFlightsSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addDataIntoBookingFlight: (state, action) => {
      let { apartment, city, country, emailAddress } = action.payload
      state.userInformation = {
        ...state.userInformation,
        ...action.payload,
        dateOfBirth: moment(action.payload.dateTimePicker).format('DD.MM.YYYY'),
      }
    },
    changeCurrentMethod: (state, action) => {
      let value = action.payload
      state.currentMethods = value
    },
  },
  extraReducers: {
    [createBookingFlight.pending]: (state, action) => {
      state.loadding = false
    },
    [createBookingFlight.rejected]: (state, action) => {
      state.loadding = false
    },
    [createBookingFlight.fulfilled]: (state, action) => {
      const { status, data } = action.payload
      state.loadding = false
      if (status === 'success') {
        window.location.replace(data.checkoutURL)
      }
    },
    [getUserDataInBooking.pending]: (state, action) => {
      state.loadding = false
    },
    [getUserDataInBooking.rejected]: (state, action) => {
      state.loadding = false
    },
    [getUserDataInBooking.fulfilled]: (state, action) => {
      state.loadding = false
      let { data } = action.payload
      // console.log(data)
      state.userInformation = data
    },
    [getDiscountCheck.pending]: (state, action) => {
      state.loadding = false
    },
    [getDiscountCheck.rejected]: (state, action) => {
      state.loadding = false
      state.discountInfo.percent = 0
    },
    [getDiscountCheck.fulfilled]: (state, action) => {
      const { status, data } = action.payload
      if (status === 'success') {
        state.discountInfo = data
        let getSeat = current(state.dataFlight).seat
        let getRoundTripSeat = current(state.dataRoundTripFlight).seat

        if (!getRoundTripSeat) {
          state.priceAfterDiscount =
            getSeat.price - getSeat.price * data.percent
        } else {
          state.priceAfterDiscount =
            getSeat.price +
            getRoundTripSeat.price -
            getSeat.price * data.percent -
            getRoundTripSeat.price * data.percent
        }
      }
    },
    [getDataFlights.pending]: (state) => {
      state.loadding = true
    },
    [getDataFlights.rejected]: (state) => {
      state.loadding = false
    },
    [getDataFlights.fulfilled]: (state, action) => {
      state.loadding = false
      const { status, data } = action.payload
      let allSeatNameAvailable = data.seat.map((item) => item.name)
      let dataSeatChoose = JSON.parse(localStorage.getItem('flight'))
      if (status === 'success') {
        let tempResult = {
          ...data,
          seat: data.seat[
            allSeatNameAvailable.indexOf(dataSeatChoose.seatType) < 0
              ? 0
              : allSeatNameAvailable.indexOf(dataSeatChoose.seatType)
          ],
        }
        tempResult.seat.price =
          tempResult.seat.price * dataSeatChoose.seatAvailable
        state.dataFlight = tempResult
      }
    },
    [getRoundTripBookingFlightAsync.pending]: (state, action) => {
      state.loadding = false
    },
    [getRoundTripBookingFlightAsync.rejected]: (state, action) => {
      state.loadding = false
    },
    [getRoundTripBookingFlightAsync.fulfilled]: (state, action) => {
      state.loadding = false
      const { status, data } = action.payload
      let allSeatNameAvailable = data.seat.map((item) => item.name)
      let dataSeatChoose = JSON.parse(localStorage.getItem('flight'))
      if (status === 'success') {
        let tempResult = {
          ...data,
          seat: data.seat[
            allSeatNameAvailable.indexOf(dataSeatChoose.seatType) < 0
              ? 0
              : allSeatNameAvailable.indexOf(dataSeatChoose.seatType)
          ],
        }
        tempResult.seat.price =
          tempResult.seat.price * dataSeatChoose.seatAvailable
        state.dataRoundTripFlight = tempResult

        // state.addDataIntoBookingFlight.seat.price =
        //   current(state.addDataIntoBookingFlight).seat.price *
        //   dataSeatChoose.seatAvailable
      }
    },
  },
})
export const { addDataIntoBookingFlight, changeCurrentMethod } =
  bookingFlightsSlice.actions
export default bookingFlightsSlice
