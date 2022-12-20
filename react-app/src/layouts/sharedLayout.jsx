import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import ResponsiveAppBar from '../components/NavBar/NavBar'
const SharedLayout = () => {

  return (
    <>
      
        <NavBar />
        <Outlet />
        <Footer/>
    </>
  )
}

export default SharedLayout