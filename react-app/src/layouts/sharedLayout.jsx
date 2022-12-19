import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import ResponsiveAppBar from '../components/NavBar/NavBar'
const SharedLayout = () => {
  return (
   <>
   
   <NavBar/>
    <Outlet/>
    </>
  )
}

export default SharedLayout