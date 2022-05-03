import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement, BarController } from 'chart.js';
import '../styles/Calendar.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Filler,
  Legend,
  Title,
  Tooltip
);

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
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

