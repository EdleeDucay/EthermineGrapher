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
  import {Card, Typography} from '@mui/material'

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
        duration: 2000
    },
    hover: {
        animationDuration: 0
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
        y: {
          ticks: {
            callback: function(value, index, ticks) {
              return value + ' MH/s'
            }
          }
        }
    },
  };
  
export default function HashrateChart(props) {
    const [labels, setLabels] = React.useState([])
    const [currentHashrateData, setCurrentHashrateData] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    const setDataSets = () => {
        setCurrentHashrateData(
            {
                labels,
                datasets: [
                  {
                    label: 'Current Hashrate',
                    data: labels.map((label, index) => {
                      return props.statistics[index].currentHashrate * Math.pow(10,-6)
                    }),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                  {
                    label: 'Reported Hashrate',
                    data: labels.map((label, index) => {
                     return props.statistics[index].reportedHashrate * Math.pow(10,-6)
                    }),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
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
    }, [loading])


    return (
        <>
        <Card sx={{p: 2, boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`, borderRadius: 2, }}>
          <Typography variant='h5' textAlign={'center'}>
            Hashrate
          </Typography>
          {!loading && <Line options={options} data={currentHashrateData} />}
        </Card>
        </>

    )
}
