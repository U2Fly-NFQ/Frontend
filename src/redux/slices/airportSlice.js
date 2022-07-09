import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import airportApi from '../../api/Airport'

export const initialState = {
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
  'airport/fetchAirports',
  async () => {
    const res = await airportApi.getList()
    return res.data
  }
)
