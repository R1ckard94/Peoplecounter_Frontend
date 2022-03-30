import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import Timer from './api/hello.js'
import Link from 'next/link'
import ApiFetch from './api/apiFetch'



export default function Home() {
  return (
    <Container maxW='auto' minH='100vh' p='2%'>
      <header>
          <title>People Counter</title>
      </header>
      <Flex h='10vh' > 
        <VStack w='full' h='full' p={10} spacing={10} alignItems='center' >
            <Heading color='blueviolet' fontSize='8vh' fontWeight='600' m='-3%'>People Counter på Atea</Heading>
        </VStack>
      </Flex>

      <Flex paddingBottom='2.5rem'>
        <VStack w='100px' marginTop='5%'>
          <Link href='/history'>
            <Button size='lg' color='blueviolet'>Historik</Button>
          </Link>
        </VStack>
        <Flex alignSelf='center' w='200vh' maxW='200vh' display='flex' direction='column' gap={100} minH='70vh' justifyContent='center' alignItems='center'>

          <Box p={10} maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' borderColor='blue.600'>
            <Heading color='blueviolet' textAlign='center'><Timer/></Heading>
            <Text color='whiteAlpha.700' textAlign='center'>Antal människor på kontoret</Text>
          </Box>
          <Box p={10} maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' borderColor='blue.600'>
            <Heading color='blueviolet' textAlign='center'>24</Heading>
            <Text color='whiteAlpha.700' textAlign='center'>Högsta antal på kontoret samtidigt</Text>
          </Box>
        </Flex>
        <div>
        <h1>Id = 5</h1>
        <ApiFetch id={5}/>
        <br></br>
        <h1>Id = 10</h1>
        <ApiFetch id={10}/>
        </div>
      </Flex>
      <VStack w='calc(100% - 4%)' height='2.5rem' borderTop='1px solid white' position='absolute' bottom='0'/>
    </Container>
  )
}
