import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import { useState } from 'react';
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/layout'
import Calendar from 'react-calendar/dist/umd/Calendar'
import Link from 'next/link'

function History(){
  const [date, setDate] = useState(new Date());
  return (
    <Container>
        <Heading>
            Under development...
        </Heading>
        <Link href='/'>
            <Button>Back to main</Button>
        </Link>
        <Container>
          <Calendar onChange={setDate} value={date} selectRange={true}/>
          {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}


        </Container>
        
        

    </Container>
  )
}

export default History