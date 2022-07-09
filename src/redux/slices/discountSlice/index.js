import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import discountApi from '../../../api/Discount'

const initialState = {
  data: [],
  status: 'idle',
}

const discountSlice = createSlice({
  name: 'discountSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscounts.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(fetchDiscounts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchDiscounts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(createDiscount.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(createDiscount.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(createDiscount.fulfilled, (state) => {
        state.status = 'succeeded'
      })
      .addCase(deleteDiscount.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(deleteDiscount.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(deleteDiscount.fulfilled, (state) => {
        state.status = 'succeeded'
      })
  },
})

export const fetchDiscounts = createAsyncThunk(
  'discounts/fetchDiscounts',
  async () => {
    const response = await discountApi.getDiscounts()
    return response.data.data
  }
)

export const deleteDiscount = createAsyncThunk(
  'discounts/deleteDiscount',
  async (idDiscount, thunkAPI) => {
    const response = await discountApi.deleteDiscount(idDiscount)
    thunkAPI.dispatch(fetchDiscounts())
    return response.data.data
  }
)

export const createDiscount = createAsyncThunk(
  'discounts/createDiscount',
  async (discountData, thunkAPI) => {
    const response = await discountApi.createDiscount(discountData)
    thunkAPI.dispatch(fetchDiscounts())
    return response.data.data
  }
)

export default discountSlice
