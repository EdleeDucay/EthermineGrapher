import React, {useState, useEffect} from 'react';
import ethGif from '../assets/ethereum.gif'
import { Container, Typography, Box, Grid, Link } from '@mui/material';
import PoolStatCard from '../components/PoolStatCard';
import {getPoolStats} from '../utils/EthermineApi'

export default function Home() {
  const [introData, setIntroData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchPoolStats = async () => {
    setLoading(true)
    const response = await getPoolStats();
    setIntroData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPoolStats()
    
  }, []);
  

  return (
    <>

      
      {console.log(introData)}
      
      {introData &&
      <Grid container spacing={2} pt={3} alignItems="center" justifyContent="center">
        <Grid alignItems="center" justifyContent="center" sx={{mt: 4, display: 'flex'}} item md={12}>
        <Typography variant='h4' >Welcome to Ethermine Grapher</Typography>
            <img src={ethGif} style={{maxWidth: 100, marginTop: -15, marginLeft: -25}} alt='N/A'/>
        </Grid>
        <Grid alignItems="center" justifyContent="center" sx={{display: 'flex'}} item md={12}>
          <Typography variant='h6'>
            <Link sx={{textDecoration: 'none', cursor: 'pointer', ":hover": {color: 'secondary.dark'}}} color={'secondary'} href="https://ethermine.org/start" target="_blank">
              Click here to start mining.
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <PoolStatCard statName={'Hashrate'} statValue={(introData.poolStats.hashRate / Math.pow(10, 12)).toFixed(2) + ' TH/s'}/>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <PoolStatCard statName={'Active Miners'} statValue={introData.poolStats.miners}/>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <PoolStatCard statName={'Workers'} statValue={introData.poolStats.workers}/>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <PoolStatCard statName={'Blocks/Hour'} statValue={introData.poolStats.blocksPerHour}/>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <PoolStatCard statName={'Price'} statValue={introData.price.usd.toFixed(2) + ' USD'}/>
        </Grid>
      
      </Grid>
      }

  {/* </Container> */}
  </>

  )
}
