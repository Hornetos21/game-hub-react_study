import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'

import getCroppedImageURL from '../services/image-url'

import { Game } from '../types'
import { Link } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={`/games/${game.slug}`}>
        <Image src={getCroppedImageURL(game.background_image)} />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}

export default GameCard
