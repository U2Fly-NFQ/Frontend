import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getList } from '../../api/Ticket'
import {
  getList as getHistory,
  getAllTicket as getAllTickets,
} from '../../api/Ticket/historyBooking'

const initialState = {
  status: '',
  data: [],
  history: [],
  getAllTicket: [],
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
        state.data = action.payload
        // state.data = action.payload.data
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
        state.history = action.payload
      })
      .addCase(getAllTicketHistory.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllTicketHistory.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(getAllTicketHistory.fulfilled, (state, action) => {
        state.status = 'idle'
        state.getAllTicket = [...action.payload]
      })
  },
})

export default ticketSlice

export const fetchTickets = createAsyncThunk(
  'flight/fetchTickets',
  async (urlParams) => {
    let response = await getList(urlParams)
    return response.data
  }
)

export const fetchHistoryBooking = createAsyncThunk(
  'flight/fetchHistoryBooking',
  async (urlParams) => {
    let response = await getHistory(urlParams)
    return response.data
  }
)

export const getAllTicketHistory = createAsyncThunk(
  'tickets/getAllTicketHistory',
  async (urlParams) => {
    let response = await getAllTickets(urlParams)
    return response.data
  }
)
