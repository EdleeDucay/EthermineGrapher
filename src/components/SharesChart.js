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
        title: {
          display: true,
          text: 'Shares'
        }
      }
  },
  };
  
export default function SharesChart(props) {
    const [labels, setLabels] = React.useState([])
    const [currentSharesData, setCurrentSharesData] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    const setDataSets = () => {
        setCurrentSharesData(
            {
                labels,
                datasets: [
                  {
                    label: 'Valid Shares',
                    data: labels.map((label, index) => {
                      return props.statistics[index].validShares 
                    }),
                    borderColor: 'rgb(84, 217, 72)',
                    backgroundColor: 'rgba(36, 186, 22, 0.5)',
                  },
                  {
                    label: 'Stale Shares',
                    data: labels.map((label, index) => {
                      return props.statistics[index].staleShares 
                    }),
                    borderColor: 'rgb(204, 75, 75)',
                    backgroundColor: 'rgba(219, 50, 50, 0.5)',
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
            Shares
          </Typography>
          {!loading && <Line options={options} data={currentSharesData} />}
        </Card>
        </>

    )
}
