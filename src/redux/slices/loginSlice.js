import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from '../../api/Auth'
import { setLocalToken } from '../../api'

const initialState = {
  status: '',
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
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

        // Storage local storage
        const { id, username, roles, token } = action.payload
        const loginUser = {
          id,
          username,
          roles: Object.keys(roles),
        }
        localStorage.setItem('user', JSON.stringify(loginUser))
        localStorage.setItem('token', token)

        // Update axios token config
        setLocalToken(token)
      })
  },
})

export const { logout } = authSlice.actions

export const login = createAsyncThunk('auth/login', async (data) => {
  const res = await loginApi(data)
  return res.data
})

export default authSlice
