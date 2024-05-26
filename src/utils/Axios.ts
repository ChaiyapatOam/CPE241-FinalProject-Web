import axios from 'axios'

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:8080',
  // withCredentials: true,
})
