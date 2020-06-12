import axios from 'axios'

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const request = axios.create({
  baseURL: IS_DEVELOPMENT ? '/api' : 'http://118.178.184.69:4396/api',
  timeout: 0,
  // withCredentials: true,
  responseType: 'json'
})

request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(result => {
  const { data } = result

  return data
}, error => {
  return Promise.reject(error)
})

export default request
