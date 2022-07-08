import axios from '..'

const getList = () => axios.get(`/airlines`)

const AirlineApi = {
  getList,
}

export default AirlineApi
