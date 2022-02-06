import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
import {getDashboard} from '../../utils/EthermineApi.js'

export default function HomeLayout() {
    const [searchInput, setSearchInput] = useState('') 
    const [error, setError] = useState('')

    const fetchDashboard = async () => {
      const dash = await getDashboard(searchInput)
      if (dash.status == 'ERROR') {
        setError(dash.error)
        return
      } 
  
      console.log(dash)
    }
  
    useEffect(() => {
      setError('')
      if (searchInput) {
        fetchDashboard()
      }
      
    }, [searchInput]);

    return (
        <>
            <Navbar setSearchInput={setSearchInput}/>
            <Outlet/>
        </>
    )
}