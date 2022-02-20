import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {Card, Typography} from '@mui/material'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const labels = ['j','a','s','o','n','d','r'];

const data = {
    labels: labels,
    datasets: [{
      label: 'Payout',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        '#c99d66'
      ],
      borderColor: [
        '#c99d66'
      ],
    }]
  };

  const options = {
    responsive: true,
    animation: {
        duration: 2000
    },
    scales: {
        x: {
          title: {
            display: true,
            text: 'Block #'
          }
        },
        y: {
            title: {
              display: true,
              text: 'ETH'
            }
        }
    },
  };

export default function RoundsChart({rounds}) {
    const [loading, setLoading] = useState(true)
    const [blockLabels, setBlockLabels] = useState()
    const [amounts, setAmounts] = useState()

    const setX = () => {

    }

    const setY = () => {

    }

    useEffect(() => {
        setX()
        setY()
        setLoading(false)
    }, [loading])
    

    return (
        <>
        {console.log(rounds)}

        <Card sx={{p: 2, boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`, borderRadius: 2, }}>
            <Typography variant='h5' textAlign={'center'}>
                Income during the last 1000 rounds
            </Typography>
            {!loading && <Bar options={options} data={data}/>}
            </Card>
        </>
    )
}
