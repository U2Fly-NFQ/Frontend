import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { flight } from '../../api'

const initialState = {
  status: '',
  data: [],
}

const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.status = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch all
      .addCase(fetchFlights.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFlights.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
        // state.pagination.total = action.payload.length
      })
  },
})

export default flightSlice

export const fetchFlights = createAsyncThunk(
  'checkout/fetchCheckouts',
  async () => {
    const res = await flight.getList()
    return res.data
  }
)
