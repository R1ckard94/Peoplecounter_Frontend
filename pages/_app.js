import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/Calendar.css'


const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
})


function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
            <Component {...pageProps} /> 
    </ChakraProvider>
  )
  
  
}

export default MyApp

