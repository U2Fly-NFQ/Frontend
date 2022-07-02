import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_API
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const setTokenApi = (token) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
}
