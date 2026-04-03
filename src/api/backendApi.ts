import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL ?? '/api'

export const backendApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
