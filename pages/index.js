import Image from 'next/image'
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'




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
            <Button size='lg' color='blueviolet'>History</Button>
        </VStack>
        <Flex alignSelf='center' w='200vh' maxW='200vh' display='flex' direction='column' gap={100} minH='70vh' justifyContent='center' alignItems='center'>

          <Box p={10} maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' borderColor='blue.600'>
            <Heading color='blueviolet' textAlign='center'>14</Heading>
            <Text color='whiteAlpha.700' textAlign='center'>Current amount in office</Text>
          </Box>
          <Box p={10} maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' borderColor='blue.600'>
            <Heading color='blueviolet' textAlign='center'>24</Heading>
            <Text color='whiteAlpha.700' textAlign='center'>Highest amount for the day</Text>
          </Box>
        </Flex>

        
      </Flex>
      <VStack w='calc(100% - 4%)' height='2.5rem' borderTop='1px solid white' position='absolute' bottom='0'/>
    </Container>
  )
}
