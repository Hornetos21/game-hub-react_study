import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const API_KEY: string = import.meta.env.VITE_API_KEY

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY,
  },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }
  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
  get = (id: number | string, str: string = '') =>
    axiosInstance.get<T>(`${this.endpoint}/${id}${str}`).then((res) => res.data)
}

export default APIClient
