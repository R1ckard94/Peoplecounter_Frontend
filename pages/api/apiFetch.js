import { Container } from '@chakra-ui/layout'
import { useState, useEffect } from 'react';


const ApiFetch = (props) => {
    const [ gotIt, setGotIt ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                
                setGotIt(data)
                setIsLoading(false)
            })
    }, [])
    if(isLoading){
        return <p>Loading...</p>
    }
    if(!gotIt){
        return <p>No info to show</p>
    }
    return (
    <Container>
            <ul>
                {gotIt.map( tasks =>
                    {if (tasks.id == props.id) {
                        return(
                        <li key={tasks.id}>
                            Id = {props.id}: <br/>
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