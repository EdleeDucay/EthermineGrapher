import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import HashrateChart from '../components/HashrateChart.js';
import {getDashboard} from '../utils/EthermineApi.js'

export default function Dashboard(props) {
  const {address} = useParams();
  const [error, setError] = useState('')
  const [dashboard, setDashboard] = useState(null)
  const { state } = useLocation();
  

  return (
    <>

    {state.currentStatistics.activeWorkers}
    <Container>
    <HashrateChart statistics={state.statistics}/>

    </Container>
    </>
  );
}
