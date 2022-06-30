import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import airport from '../../api/Airport'

const initialState = {
  data: [],
  status: '',
}

const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirports.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAirports.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchAirports.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
  },
})

export default airportSlice

export const fetchAirports = createAsyncThunk(
  'ariport/fetchAirports',
  async () => {
    const res = await airport.getList()
    return res.data
  }
)
