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
            },
            ticks: {
                precision: 6
            }
        }
    },
  };

export default function RoundsChart({rounds}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const setX = () => {
        const data = rounds.map((round, index) => {
            if (index != rounds.length-1) {
                return `${round.block}-${rounds[index+1].block}`
            } 
        })

        return data.reverse()
    }

    const setY = () => {
        const data = rounds.map((round, index) => {
            return (round.amount * Math.pow(10, -18))
        })

        return data.reverse()
    }

    const setDataSets = () => {
        const xData = setX()
        const yData = setY()
        console.log(yData)
        setData({
            labels: xData,
            datasets: [{
              label: 'Payout',
              data: yData,
              backgroundColor: [
                '#c99d66'
              ],
              borderColor: [
                '#c99d66'
              ],
            }]
        })
    }

    useEffect(() => {
        setDataSets() 
        setLoading(false)
    }, [loading])
    

    return (
        <>
        <Card sx={{p: 2, boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`, borderRadius: 2, }}>
            <Typography variant='h5' textAlign={'center'}>
                Income during the last 1000 rounds
            </Typography>
            {!loading && <Bar options={options} data={data}/>}
            </Card>
        </>
    )
}
