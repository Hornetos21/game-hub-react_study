import { Game, GameQuery } from '../types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { FetchResponse } from '../services/api-client'
import APIClient from '../services/api-client'

const apiGames = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiGames.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
  })

export default useGames
