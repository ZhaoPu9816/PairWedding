import axios from 'axios'

export function axiosRequest (config) {
  const allAxios = axios.create({
    baseURL: 'http://192.168.97.236:3000',
    timeout: 5000
  })
  return allAxios(config)
}
