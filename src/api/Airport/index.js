import axios from '..'

const getList = () => axios.get(`/airports`)

const airportApi = {
  getList,
}

export default airportApi
