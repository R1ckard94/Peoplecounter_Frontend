import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'
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
      <Link href='/history' >
        <Button marginTop='-20' size='lg' color='blueviolet' boxShadow='0 5px 12px rgba(0, 0, 0, 0.2)'>Historik</Button>
      </Link>

      <Flex paddingBottom='2.5rem'>
        <Flex w='200vh' maxW='200vh' display='flex' direction='column' gap={100} minH='70vh' marginTop='20' alignItems='center'>

          <Box p={10} maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' borderColor='blue.600' boxShadow='0 12px 20px rgba(0, 0, 0, 0.2)'>
            <Heading color='blueviolet' textAlign='center'><ApiFetch id={"current"}/></Heading>
            <Text fontWeight='bold' textAlign='center'>Antal människor på kontoret</Text>
          </Box>
          <Box p={10} maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' borderColor='blue.600' boxShadow='0 12px 20px rgba(0, 0, 0, 0.2)'>
            <Heading color='blueviolet' textAlign='center'><ApiFetch id={"max"}/></Heading>
            <Text fontWeight='bold' textAlign='center'>Inpasseringar</Text>
          </Box>
        </Flex>
      </Flex>
      <VStack w='calc(100% - 4%)' height='2.5rem' borderTop='1px solid white' position='absolute' bottom='0'/>
    </Container>
  )
}

// 