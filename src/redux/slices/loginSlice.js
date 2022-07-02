import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setTokenApi } from '../../api'
import { loginApi } from '../../api/Auth'

const getStorageUser = () => {
  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  return user
}

const setStorageUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const user = getStorageUser() || {}
// Set token
if (user.token) {
  setTokenApi(user.token)
  console.log(user.token)
}

const initialState = {
  status: '',
  user: {
    id: '',
    username: '',
    token: '',
    roles: [],
    ...user,
  },
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user')
      state.status = ''
      state.user = {
        id: '',
        username: '',
        token: '',
        roles: [],
      }
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
        const loginUser = {
          ...action.payload,
          roles: Object.keys(action.payload.roles),
        }
        state.status = 'idle'
        state.user = loginUser
        setStorageUser(loginUser)
        setTokenApi(loginUser.token)
      })
  },
})

export const { logout } = authSlice.actions

export const login = createAsyncThunk('auth/login', async (data) => {
  const res = await loginApi(data)
  return res.data
})

export default authSlice
