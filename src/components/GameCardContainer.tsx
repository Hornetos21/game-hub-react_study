import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={15}
      overflow={'hidden'}
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      {children}
    </Box>
  )
}

export default GameCardContainer
