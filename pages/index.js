import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Flex, VStack, Heading } from '@chakra-ui/layout'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'




export default function Home() {
  return (
    <Container maxW='contaner.xl' p='5'>
      <header>
          <title>People Counter</title>
      </header>
      <Flex h='10vh' > 
      <VStack w='full' h='full' p={10} spacing={10} alignItems='center' >
          <Heading color='blueviolet' 
            fontSize='8vh' 
            fontWeight='600' 
            m='-3%'
            >People Counter på Atea
          </Heading>
      </VStack>
      </Flex>

      <Flex>
        <VStack w='100px' marginTop='5%'>
            <Button size='lg' color='blueviolet'>History</Button>
        </VStack>
        <Flex alignSelf='center' w='200vh' maxW='200vh' display='flex'  className={styles.main}>

          <Box className={styles.card}>

          </Box>
          <Box className={styles.card}>

          </Box>
        </Flex>

        
      </Flex>
      <footer className={styles.footer}>
          <a>

          </a>
        </footer>
    </Container>
  )
}
