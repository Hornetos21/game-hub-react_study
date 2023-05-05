import useTrailers from '../hooks/useTrailers'

// import { Spinner } from '@chakra-ui/react'

interface Props {
  gameId: number
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId)
  const trailer = data?.results[0]
  // if (isLoading) return <Spinner />
  if (isLoading || !trailer) return null

  if (error) throw error

  return (
    <video src={trailer.data[480]} poster={trailer.preview} controls></video>
  )
}

export default GameTrailer
