import { Container } from '@chakra-ui/layout'
import useSwr from 'swr'

//fetch variable that fetches the data and converts to json
const fetcher = (url) => fetch(url).then((res) => res.json())

const ApiFetch = (props) => {
    //swr-function that provides us with a quick variant to the useEffect version and fetches the api once 
    const { data, error } = useSwr( 
                                'https://jsonplaceholder.typicode.com/todos/', 
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
                {data.map(tasks =>
                    {if (tasks.id == props.id) {
                        return(
                        <li key={tasks.id}>                            
                            Title: {tasks.title} - <span>( {tasks.completed ? 'Completed' : 'Not Completed'} )</span>
                        </li>
                        )
                    }}
                    
                )}
            </ul>
    </Container>
  )
}

export default ApiFetch