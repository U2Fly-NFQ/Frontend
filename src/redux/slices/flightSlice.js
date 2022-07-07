import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api'

export const initialState = {
  status: '',
  oneway: {
    flight: [],
    pagination: {},
  },
  roundtrip: {
    flight: [],
    pagination: {},
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
        state.status = ''
        state.oneway = action.payload.oneway
        state.roundtrip = action.payload.roundtrip
      })
  },
})

export default flightSlice

export const fetchFlights = createAsyncThunk(
  'flight/fetchFlights',
  async (urlParams) => {
    // let rs = await flight.getList(urlParams)
    let mockRs = await axiosInstance.get(
      'https://62c45182abea8c085a729073.mockapi.io/flights'
    )
    return mockRs.data.data
  }
)
