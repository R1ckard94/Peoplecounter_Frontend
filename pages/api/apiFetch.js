import { Container, Heading } from '@chakra-ui/layout'
import useSwr from 'swr'


//fetch variable that fetches the data and converts to json, reqestOptions to change between GET, POST, DELETE, PUT
const fetcher = (...args) => fetch(...args, {mode: 'cors', headers:{'Access-Control-Allow-Origin':'*'}}).then((res) => res.json())



const ApiFetch = (props) => {
    //swr-function that provides us with a quick variant to the useEffect version and fetches the api once 
    /*
    Safari:
    The easiest and most reliable way to CORS in Safari is to disable CORS in the develop menu.
    Enable the develop menu by going to Preferences > Advanced.
    Then select “Disable Cross-Origin Restrictions” from the develop menu.
    Once you’re done developing, restart Safari and it will go back to normal.
    */
    var current = new Date();
    var date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    if(date.length == 9){
        date = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`
    }
    if(date.length == 8){
        date = `${current.getFullYear()}-0${current.getMonth()+1}-0${current.getDate()}`
    }
    const { data, error } = useSwr( 
        'https://peoplecounterapi.azurewebsites.net/api/counted/' + date + '/peoplecount',   
        fetcher, 
        { //fetches api every 30seconds
            refreshInterval: 30000 
        })
  
    if (error) return <div>Failed to load from api</div>
    if (!data) return <div>Loading...</div>
    return (
    <Container>
        {props.id == "current" && <a>{data.current}</a>}         
        {props.id == "max" && <a>{data.maxAmount}</a>}         
    </Container>
  )
}

export default ApiFetch