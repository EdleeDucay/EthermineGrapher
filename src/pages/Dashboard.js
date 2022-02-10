import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {getDashboard} from '../utils/EthermineApi.js'

export default function Dashboard(props) {
  const {address} = useParams();
  const [error, setError] = useState('')
  const [dashboard, setDashboard] = useState(null)
  const { state } = useLocation();
  
  console.log(state)

  return (
    <>
    {JSON.stringify(state)}

    </>
  );
}
