import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setTokenApi } from '../../api/config'
import { loginApi } from '../../api/User'

const getStorageUser = () => {
  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  return user
}

const setStorageUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const user = getStorageUser() || {}

const initialState = user

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user')
      state = {}
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle'

        const loginUser = {
          ...action.payload,
          roles: Object.keys(action.payload.roles),
        }
        state = loginUser

        setStorageUser(loginUser)
        setTokenApi(loginUser.token)
      })
  },
})

export const login = createAsyncThunk('auth/login', async (data) => {
  const res = await loginApi(data)
  return res.data
})

export default authSlice
