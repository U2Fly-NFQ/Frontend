import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: '',
  data: [],
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
        state.data = action.payload.data
      })
  },
})

export default airportSlice

export const fetchAirports = createAsyncThunk(
  'ariport/fetchAirports',
  async () => {
    // const res = await airport.getList()
    const res = await axios.get(
      `https://62c45182abea8c085a729073.mockapi.io/aiports`
    )
    return res.data
  }
)
