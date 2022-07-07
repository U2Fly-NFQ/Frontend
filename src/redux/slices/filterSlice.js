import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AirlineApi from '../../api/Airline'

export const initialState = {
  status: '',
  airlines: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilter.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllFilter.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchAllFilter.fulfilled, (state, { payload }) => {
        state.status = 'idle'
        state.airlines = payload.airlines
      })
  },
})

export default filterSlice

export const fetchAllFilter = createAsyncThunk(
  'filter/fetchAllFilter',
  async () => {
    const airlines = await AirlineApi.getList()
    return {
      airlines: airlines.data.data,
    }
  }
)
