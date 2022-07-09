import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { bookingRating, cancelBooking, getList } from '../../api/Ticket'

export const initialState = {
  status: '',
  data: [],
  history: [],
  cancel: '',
  rating: '',
}

const ticketSlice = createSlice({
  name: 'ticketSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload.data
        state.cancel = ''
      })
      // fetch history booking
      .addCase(fetchHistoryBooking.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchHistoryBooking.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchHistoryBooking.fulfilled, (state, action) => {
        state.status = 'idle'
        state.history = action.payload.data
      })
      // fetch cancel booking
      .addCase(fetchCancelBooking.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCancelBooking.rejected, (state) => {
        state.status = 'error'
        state.cancel = 'failed'
      })
      .addCase(fetchCancelBooking.fulfilled, (state, action) => {
        state.status = 'idle'
        state.cancel = 'success'
      })
      // fetch history booking
      .addCase(fetchRatingBooking.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRatingBooking.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchRatingBooking.fulfilled, (state, action) => {
        state.status = 'idle'
        state.rating = action.payload.status
      })
  },
})

export default ticketSlice

export const fetchTickets = createAsyncThunk(
  'ticket/fetchTickets',
  async (urlParams) => {
    let response = await getList(urlParams)
    return response.data
  }
)
export const fetchHistoryBooking = createAsyncThunk(
  'ticket/fetchHistoryBooking',
  async (urlParams) => {
    let response = await getList(urlParams)
    return response.data
  }
)
export const fetchCancelBooking = createAsyncThunk(
  'ticket/fetchCancelBooking',
  async (data) => {
    let response = await cancelBooking(data)
    return response.data
  }
)
export const fetchRatingBooking = createAsyncThunk(
  'ticket/fetchRatingBooking',
  async (data) => {
    let response = await bookingRating(data)
    return response.data
  }
)
