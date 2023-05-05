import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Heading, Spinner } from '@chakra-ui/react'
import ExtendableText from '../components/ExtendableText'

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error || !game) throw error

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExtendableText>{game.description_raw}</ExtendableText>
    </>
  )
}

export default GameDetailPage
