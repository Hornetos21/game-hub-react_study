import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import ms from 'ms'
import { Genre } from '../types'
import APIClient from '../services/api-client'

const apiGenres = new APIClient<Genre>('/genres')

// const useGenres = () => useData<Genre>('/genres')
// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiGenres.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  })

export default useGenres
