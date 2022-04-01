import { Container, Heading } from '@chakra-ui/layout'
import { useState, useEffect } from 'react'
import useSwr from 'swr'

//fetch variable that fetches the data and converts to json
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ApiFetch = (props) => {
    //swr-function that provides us with a quick variant to the useEffect version and fetches the api once 
    /*
    Safari:
    The easiest and most reliable way to CORS in Safari is to disable CORS in the develop menu.
    Enable the develop menu by going to Preferences > Advanced.
    Then select “Disable Cross-Origin Restrictions” from the develop menu.
    Once you’re done developing, restart Safari and it will go back to normal.
    */

    const { data, error } = useSwr( 
        'https://localhost:5001/api/1.0/Count', 
        fetcher, 
        { //fetches api every 30seconds
            refreshInterval: 30000 
        })
  
    if (error) return <div>Failed to load from api</div>
    if (!data || data.map == null) return <div>Loading...</div>
    return (
    <Container>
            
                {data.map(FormData =>
                    {if (FormData.id == props.id)
                        return(
                            <a>{FormData.current}</a>
                        
                        )
                    }
                    
                )}
            
    </Container>
  )
}

export default ApiFetch

/**
 * <li id={FormData.id}>                            
                            Title: {FormData.id} - <p>{FormData.date}, <br/> curr: {FormData.current}, <br/> Max: {FormData.maxAmount}, <br/> )</p>
                        </li>
 * const { data, error } = useSwr( 
                                'https://localhost:5001/api/1.0/Count', 
                                fetcher, 
                                { //fetches api every 30seconds
                                    refreshInterval: 30000 
                                })

    //error handling when api is down or the connection is broken
    if (error) return <div>Failed to load from api</div>
    if (!data || data.map == null) return <div>Loading...</div>
 */