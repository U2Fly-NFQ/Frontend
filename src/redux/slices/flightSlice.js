import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import flight from '../../api/Flight'

const initialState = {
  status: '',
  data: {
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
        state.data = action.payload.data
      })
  },
})

export default flightSlice

export const { setLoading, changeCurrentPage } = flightSlice.actions

export const fetchFlights = createAsyncThunk(
  'flight/fetchFlights',
  async (urlParams) => {
    const res = await flight.getList(urlParams)
    return res.data
  }
)
