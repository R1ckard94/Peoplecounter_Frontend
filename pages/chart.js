import { Bar } from 'react-chartjs-2';
import useSwr from 'swr'

const fetcher = (...args) => fetch(...args, {mode: 'cors', headers:{'Access-Control-Allow-Origin':'*'}}).then((res) => res.json())

function Charts (props) {

    
    const { data, error } = useSwr(
        'https://peoplecounterapi.azurewebsites.net/api/counted/' + props.date + '/details',   
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
            },
            scales: {
              y: {
                suggestedMax: 10
              }
            }
            
        }}
    />
    )

 
            
            



     
}
export default Charts