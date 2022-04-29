import { Container, Heading } from '@chakra-ui/layout'
import { useState, useEffect } from 'react'
import useSwr from 'swr'

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        "Id": 1, //does work to remove this however keeps pushing everytime it gets refreshed
        "Date":"130 mars 2022",
        "CurrAmount": 20,
        "MaxAmount": 30 })
};
//fetch variable that fetches the data and converts to json, reqestOptions to change between GET, POST, DELETE, PUT
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
        'https://peoplecounterapi.azurewebsites.net/api/counted/' + currdate,   
        fetcher, 
        { //fetches api every 30seconds
            refreshInterval: 30000 
        })
  
    if (error) return <div>Failed to load from api</div>
    if (!data || data.map == null) return <div>Loading...</div>
    return (
    <Container>
            
                {data.map(FormData => //ändra så att det visas antal för dagen +1 -1 utan att det blir -1
                    {if (FormData.date_and_time == props.date)
                        return(
                            <a>{FormData.currAmount}</a>
                        
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