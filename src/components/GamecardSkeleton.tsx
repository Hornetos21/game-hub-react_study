import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer'

const GamecardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GamecardSkeleton
