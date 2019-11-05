import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/59f08692310000b4130e9f71',
})

export default async function getInitialData() {
  const response = await api.get('/')
  return response.data
}
