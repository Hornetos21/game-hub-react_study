import axios, { CanceledError } from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}

const API_KEY: string = import.meta.env.VITE_API_KEY
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY,
  },
})

export { CanceledError }
