import { Container, Grid, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HashrateChart from '../components/HashrateChart.js';
import MinerStatCard from '../components/MinerStatCard.js';
import {getCurrentStats} from '../utils/EthermineApi.js'

export default function Dashboard(props) {
  const {address} = useParams();
  const [error, setError] = useState('')
  const [currentStats, setCurrentStats] = useState(null)
  const { state } = useLocation();
  const [loading, setLoading] = useState(true)

  const fetchCurrentStats = async ()  => {
    const response = await getCurrentStats(address)
    setCurrentStats(response.data)
  }

  useEffect(() => {
    fetchCurrentStats()
    setLoading(false)
  }, [loading])

  return (
    <>
    {console.log(currentStats)}

    <Container sx={{paddingBottom: 3}}>
    {currentStats &&

    <Grid container spacing={2} pt={3} pb={3}>

      <Grid item xs={12} sm={12} md={12}>
        <Button href={`https://etherchain.org/account/${address}`} target='_blank' color={'secondary'} sx={{textDecoration: 'none'}}>
          <Typography variant='h4'>
            {address}
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <MinerStatCard statName={'Active Workers'} statValue={currentStats.activeWorkers}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MinerStatCard statName={'Unpaid Balance'} statValue={(currentStats.unpaid * Math.pow(10,-18)).toFixed(5) + ' ETH'}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MinerStatCard statName={'Estimated Daily Earnings'} statValue={(currentStats.coinsPerMin * 1440).toFixed(5) + ' ETH'}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <MinerStatCard statName={'Current Hashrate'} statValue={(currentStats.currentHashrate * Math.pow(10,-6)).toFixed(2) + ' MH/s'}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MinerStatCard statName={'Average Hashrate'} statValue={(currentStats.averageHashrate * Math.pow(10,-6)).toFixed(2) + ' MH/s'}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MinerStatCard statName={'Reported Hashrate'} statValue={(currentStats.reportedHashrate * Math.pow(10,-6)).toFixed(2) + ' MH/s'}/>
      </Grid>

    </Grid>

    }

    <HashrateChart statistics={state.statistics}/>
    </Container>
    
    </>
  );
}
