import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import flight from '../../api/Flight'

const initialState = {
  status: '',
  data: {
    flight: [],
    pagination: {},
  },
  search: {
    existingRoundTrip: false,
  },
}

const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchFlights.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFlights.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data.flight = action.payload?.data?.flight || []
        state.data.pagination = action.payload?.data?.pagination || {}
      })
      .addCase(checkExistingRoundTrip.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(checkExistingRoundTrip.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(checkExistingRoundTrip.fulfilled, (state, action) => {
        state.status = 'idle'
        state.existingRoundTrip = action.payload
      })
  },
})

export default flightSlice

export const { setLoading, changeCurrentPage } = flightSlice.actions

export const checkExistingRoundTrip = createAsyncThunk(
  'flight/checkExistingRoundTrip',
  async (urlParams) => {
    const { departure, arrival, startTime, seatType, roundTime } = urlParams

    const oneWays = await flight.getList({
      departure,
      arrival,
      startTime,
      seatType,
    })

    const roundWays = await flight.getList({
      departure: arrival,
      arrival: departure,
      startTime: roundTime,
      seatType,
    })

    if (oneWays.data?.data?.length && roundWays.data?.data?.length) return true
    return false
  }
)

export const fetchFlights = createAsyncThunk(
  'flight/fetchFlights',
  async (urlParams) => {
    const res = await flight.getList(urlParams)
    return res.data
  }
)
