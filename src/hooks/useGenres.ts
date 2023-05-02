import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import apiClient, { FetchResponse } from '../services/api-client'
import { Genre } from '../types'

// const useGenres = () => useData<Genre>('/genres')
// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  })

export default useGenres
