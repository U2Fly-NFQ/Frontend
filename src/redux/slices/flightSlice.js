import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import flight from '../../api/Flight'

const initialState = {
  status: '',
  onetrip: {
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
        state.status = 'idle'
        state.onetrip = action.payload.onetrip
        state.roundtrip = action.payload.roundtrip
      })
  },
})

export default flightSlice

export const fetchFlights = createAsyncThunk(
  'flight/fetchFlights',
  async (urlParams) => {
    let rs = await flight.getList(urlParams)
    let mockRs = await axios.get(
      'https://62c45182abea8c085a729073.mockapi.io/flights'
    )
    return mockRs.data.data
  }
)
