import React from 'react';
import { Bar } from 'react-chartjs-2';


function dataFetchFromAPI(date) {
    var dataFromAPI = [3,4,6,1,7,8,1,1]


    return dataFromAPI
}


function Charts (props) {
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
            data: dataFetchFromAPI(props.date),
            barThickness: 15
          }
        ]
      }
    return (
      <div>
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
      </div>
    ) 
}
export default Charts