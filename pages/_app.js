import { ChakraProvider } from '@chakra-ui/react'
import '../styles/Calendar.css'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider >
            <Component {...pageProps} /> 
    </ChakraProvider>
  )
  
  
}

export default MyApp

