import { Container } from '@chakra-ui/layout'
import useSwr from 'swr'

//fetch variable that fetches the data and converts to json
const fetcher = (url) => fetch(url).then((res) => res.json())

const ApiFetch = (props) => {
    //swr-function that provides us with a quick variant to the useEffect version and fetches the api once 
    const { data, error } = useSwr( 
                                'https://localhost:5001/api/1.0/weatherforecast', 
                                fetcher, 
                                { //fetches api every 20seconds
                                    refreshInterval: 20000 
                                })

    //error handling when api is down or the connection is broken
    if (error) return <div>Failed to load from api</div>
    if (!data || data.map == null) return <div>Loading...</div>
    return (
    <Container>
            <ul>
                {data.map(FormData =>
                    {
                        return(
                        <li >                            
                            Title: {FormData.date} - <p>{FormData.date}, <br/> temp: {FormData.temperatureC}, <br/> sum: {FormData.summary}, <br/> )</p>
                        </li>
                        )
                    }
                    
                )}
            </ul>
    </Container>
  )
}

export default ApiFetch