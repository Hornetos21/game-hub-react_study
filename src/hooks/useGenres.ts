import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import { Genre } from '../types'
import APIClient from '../services/api-client'

const apiGenres = new APIClient<Genre>('/genres')

// const useGenres = () => useData<Genre>('/genres')
// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiGenres.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  })

export default useGenres
