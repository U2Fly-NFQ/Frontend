import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from '../../api/Auth/login'
import { getLsObj, setLs } from '../../utils/localStorage'
import axiosInstance from '../../api'

const tokenStorage = localStorage.getItem('token')

export const initialState = {
  token: tokenStorage,
  user: getLsObj('user'),
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = ''
      state.user = {}
      axiosInstance.setToken(null)
      setLs('token', '')
      setLs('user', {})
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token } = payload
        state.status = 'idle'
        state.token = token
        state.user = user
        axiosInstance.setToken(token)
        setLs('token', token)
        setLs('user', user)
      })
  },
})

export default authSlice

export const { logout } = authSlice.actions

export const login = createAsyncThunk('authSlice/login', async (data) => {
  const res = await loginApi(data)
  return res.data
})
