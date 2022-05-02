import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import Calendar from 'react-calendar/dist/umd/Calendar'
import Link from 'next/link'




function History(){
  const [date, setDate] = useState(new Date())
  const [text, setText] = useState("")
  const [elementPreview, setElementPreview] = useState(null);

  const Fetch = () => {
    let dateText = date.toDateString()
    setText(dateText)
  }
  useEffect(() => {
    if(text !== ""){
      const textFunc = (
        <p>{text} :: Här ligger cool text</p> //här lägger vi fetchen till api som kommer displaya cool data
      )
      setElementPreview(textFunc)
    }
  },[text])

  return (
    <body>

        <Link href='/'>
            <Button size='lg' color='blueviolet' m='4% 0% 0% 1.5%' boxShadow='0 5px 12px rgba(0, 0, 0, 0.2)'>Startsida</Button>
        </Link>
        <Container minH='100%' minW='100vh' marginTop='-2%' >
          <Heading textAlign='center' color='blueviolet' fontSize='8vh' fontWeight='600' marginTop='-10%'>Historik</Heading>
          <Calendar onChange={setDate} value={date} selectRange={false}/>
          {date.length > 0 ? (
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
          
        </Container>
        <Container>
          <Button onClick={Fetch} size='lg' color='blueviolet' bg='blackAlpha.600' boxShadow='0 5px 12px rgba(0, 0, 0, 0.2)'>Hämta data för vald dag</Button>
          {elementPreview}
        </Container>

    </body>
  )
}

export default History