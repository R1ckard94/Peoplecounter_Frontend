import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch, ReactDOM } from 'react-router-dom'



function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
            <Component {...pageProps} /> 
    </ChakraProvider>
  )
  
  
}

export default MyApp

