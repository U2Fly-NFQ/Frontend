import axios from 'axios'

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_API
axios.defaults.baseURL = 'http://3.0.57.246/api'

export { default as flight } from './Flight'
