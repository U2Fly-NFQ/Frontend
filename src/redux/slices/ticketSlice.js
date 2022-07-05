import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getList } from '../../api/Ticket'

const initialState = {
  status: '',
  data: [],
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
