import { Button, ButtonGroup, Box, background } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import Calendar from 'react-calendar/dist/umd/Calendar'
import Link from 'next/link'
import Charts from './chart';




function History(){
  const [date, setDate] = useState(new Date())
  const [text, setText] = useState("")
  const [niceDateText, setNiceDateText] = useState("")
  const [elementPreview, setElementPreview] = useState(null);

  const Fetch = () => {
    let dateTextNice = date.toDateString()
    let dateString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    if(dateString.length == 9)
        dateString = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
    if(dateString.length == 8)
        dateString = `${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}`
    setText(dateString)
    setNiceDateText(dateTextNice)
  }
  useEffect(() => {
    if(text !== ""){
      const textFunc = (
        <Container paddingBottom='5%'>
          <Text fontWeight='bold'>{niceDateText}</Text> 
          <Charts date={text}/>
        </Container>
      )
      setElementPreview(textFunc)
    }
  },[text])

  return (
    <Container maxW='auto' minH='100vh' p='2%'>

        <Link href='/'>
            <Button size='lg' color='blueviolet' m='4% 0% 0% 1.5%' boxShadow='0 5px 12px rgba(0, 0, 0, 0.2)'>Startsida</Button>
        </Link>
        <Container minH='100%' minW='100vh' marginTop='-2%' textAlign='center'>
          <Heading textAlign='center' color='blueviolet' fontSize='8vh' fontWeight='600' marginTop='-10%'>Historik</Heading>
          <Calendar onChange={setDate} value={date} selectRange={false}/>
          <Button 
            m='3%'
            onClick={Fetch} 
            size='lg'  
            color='whiteAlpha.900' 
            bg='purple.800' 
            boxShadow='0 5px 12px rgba(0, 0, 0, 0.2)' 
            sx={{  '&:hover': {backgroundColor: 'blackAlpha.500'} }}>
              Hämta data för vald dag
          </Button>
          {elementPreview}
          
        </Container>
        <VStack w='calc(100% - 4%)' height='2.5rem' borderTop='1px solid black' position='absolute' bottom='0'/>

    </Container>
  )
}

export default History

//text för att hämta ut range mellan två datum 
/**
 * {date.length > 0 ? (
        <p >
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold' >Selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
 */