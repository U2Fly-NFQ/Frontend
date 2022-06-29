import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

import flight from '../../api/Flight'

const initialState = {
  status: '',
  data: [],
  pagination: {
    current: 1,
    pageSize: 6,
    total: null,
  },
}

const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.status = action.payload
    },
    changeCurrentPage: (state, action) => {
      state.pagination.current = action.payload
    },
  },
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
        state.data = action.payload
        state.pagination.total = action.payload.length
      })
      // fetch
      .addCase(getFlight.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getFlight.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(getFlight.fulfilled, (state, action) => {
        state.status = 'idle'
        state.selected = action.payload
      })
      // create
      .addCase(createFlight.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createFlight.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(createFlight.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data.push(action.payload)
      })
      // update
      .addCase(updateFLight.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateFLight.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(updateFLight.fulfilled, (state, action) => {
        state.status = 'idle'
        let index = _.findIndex(state.data, (o) => o.id === action.payload.id)
        state.data[index] = action.payload
      })
      // delete
      .addCase(deleteFlight.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteFlight.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(deleteFlight.fulfilled, (state, action) => {
        state.status = 'idle'
        let index = _.findIndex(state.data, (o) => o.id === action.payload.id)
        state.data.splice(index, 1)
      })
  },
})

export default flightSlice

export const { setLoading, changeCurrentPage } = flightSlice.actions

export const fetchFlights = createAsyncThunk(
  'flight/fetchFlights',
  async () => {
    const res = await flight.getList()
    return res.data
  }
)

export const getFlight = createAsyncThunk('flight/getFlight', async (id) => {
  const res = await flight.get(id)
  return res.data
})

export const createFlight = createAsyncThunk(
  'flight/createFlight',
  async (bikeData) => {
    const res = await flight.create(bikeData)
    return res.data
  }
)

export const updateFLight = createAsyncThunk(
  'flight/updateFLight',
  async ({ id, data }) => {
    const res = await flight.update(id, data)
    return res.data
  }
)

export const deleteFlight = createAsyncThunk(
  'flight/deleteFlight',
  async (id) => {
    const res = await flight.destroy(id)
    return res.data
  }
)
