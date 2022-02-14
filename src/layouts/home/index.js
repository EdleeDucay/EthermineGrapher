import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import {getDashboard} from '../../utils/EthermineApi.js'
import HomeTabs from "./HomeTabs";

export default function HomeLayout() {
    const [searchInput, setSearchInput] = useState('') 
    const [error, setError] = useState('')
    const [dashboard, setDashboard] = useState(null)
    const navigate = useNavigate()

    // Grabs the data from the api and loads the child component 'dashboard'
    const fetchDashboard = async () => {
      const dash = await getDashboard(searchInput)
      if (dash.status == 'ERROR') {
        setError(dash.error)
        navigate(`/dashboard/${searchInput}`, {state: dash.error})
        return
      } 

      setDashboard(dash.data)
      navigate(`/dashboard/${searchInput}`, {state: dash.data})

    }
    
    useEffect(() => {
      setError('')
      if (searchInput) fetchDashboard()
      
      
    }, [searchInput]);

    return (
        <>
            <Navbar setSearchInput={setSearchInput}/>
            <Outlet/>
        </>
    )
}