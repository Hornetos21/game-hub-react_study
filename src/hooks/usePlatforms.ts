// import useData from './useData'
import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import { Platform } from '../types'
import APIClient from '../services/api-client'

const apiPlatforms = new APIClient<Platform>('/platforms/lists/parents')
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null })
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiPlatforms.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  })

export default usePlatforms
