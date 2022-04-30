import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import Link from 'next/link'

function History(){
  return (
    <Container>
        <Heading>
            Under development...
        </Heading>
        <br/>
        <Link href='/'>
            <Button>Back to main</Button>
        </Link>
        

    </Container>
  )
}

export default History