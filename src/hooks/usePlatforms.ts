import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import { Platform } from '../types'
import APIClient from '../services/api-client'
import ms from 'ms'

const apiPlatforms = new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiPlatforms.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  })
export default usePlatforms
