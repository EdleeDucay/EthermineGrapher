import {Navigate, useRoutes} from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Payouts from './pages/Payouts'
import NotFound from './pages/Page404'
import HomeLayout from './layouts/home'

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <HomeLayout/>,
            children: [
                { element: <Navigate to="/home" replace/> },
                { path: 'home', element: <Home/>},
                { path: 'dashboard', element: <Dashboard/> },
                { path: 'payouts', element: <Payouts/> },
                { path: '/', element: <Navigate to ='/home'/> },
                { path: '*', element: <Navigate to="/404"/> }
            ]
        },
        { path: '404', element: <NotFound/> },
        { path: '*', element: <Navigate to="/404" replace/> }
    ])
}