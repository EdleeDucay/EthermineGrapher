import React, {useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    animation: {
        duration: 150
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hashrate',
      },
    },
    scales: {
        xAxes: [{
            type: 'time',
            ticks: {
                autoSkip: true,
                maxTicksLimit: 20,
            }
        }]
    },
  };
  
//   const xAxes = [{
//       type: 'time',
//       ticks: {
//           autoSkip: true,
//           maxTicksLimit: 20
//       }
//   }]

//  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'shit', 'shit'] ;

 
  
export default function HashrateChart(props) {
    const [labels, setLabels] = React.useState([])
    const [currentHashrateData, setCurrentHashrateData] = React.useState({})
    const [loading, setLoading] = React.useState(true)


    console.log('labels', labels)
    console.log(props.statistics)
    const setDataSets = () => {
        setCurrentHashrateData(
            {
                labels,
                datasets: [
                  {
                    label: 'Current Hashrate',
                    data: labels.map((label, index) => props.statistics[index].currentHashrate),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                //   {
                //     label: 'Dataset 2',
                //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                //     borderColor: 'rgb(53, 162, 235)',
                //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
                //   },
                ],
              }
        )
    }

    const setTimeLabels = () => {
        const times = props.statistics.map((stat) => {
            const dateObject = new Date(stat.time*1000) 
            return dateObject.toLocaleString() 
        })
        setLabels(times)
        
    }

    useEffect(() => {
        setTimeLabels()
        setDataSets()
        setLoading(false)
    }, [setTimeLabels, setDataSets])

    return (
        <>
        {!loading && <Line options={options} data={currentHashrateData} />}
        </>

    )
}
