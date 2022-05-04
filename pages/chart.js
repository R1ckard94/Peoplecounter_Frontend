import { Bar } from 'react-chartjs-2';
import useSwr from 'swr'

const fetcher = (...args) => fetch(...args, {mode: 'cors', headers:{'Access-Control-Allow-Origin':'*'}}).then((res) => res.json())

function Charts (props) {
    var current = new Date()
    current = props.date //ger error vid build återkom, kanske skicka färdig string ifrån history.js
    var dateString = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`
    if(dateString.length == 9)
        dateString = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`
    if(dateString.length == 8)
        dateString = `${current.getFullYear()}-0${current.getMonth()+1}-0${current.getDate()}`
    const { data, error } = useSwr(
        'https://peoplecounterapi.azurewebsites.net/api/counted/' + dateString + '/details',   
        fetcher
    )
    
    if (error) return <div>Failed to load from api</div>
    if (!data) return <div>Loading...</div>
    if (data.arr === null || data.arr === undefined) return <div>No data for this day</div> 
    if(data) {
        const state = {
            labels: ['6:00', '7:00', '8:00',
                     '9:00', '10:00', '11:00',
                     '12:00', '13:00', '14:00',
                     '15:00', '16:00', '17:00',
                     '18:00', '19:00', '20:00'],
            datasets: [
              {
                label: 'People in office',
                backgroundColor: 'rgba(138,43,226,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: data.arr,
                barThickness: 15
              }
            ]
        }      
    } 
    return (
    <Bar
        data={state}
        options={{
            title:{
              display:true,
              text:'People Per Hour',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
        }}
    />
    )

 
            
            



     
}
export default Charts