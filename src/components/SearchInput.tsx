import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
  const refInput = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (refInput.current) onSearch(refInput.current.value)

        e.currentTarget.reset()
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refInput}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
