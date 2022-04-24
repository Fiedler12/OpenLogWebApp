import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import  database  from 'firebase/database'

export const Layout = () => {
  const [userId, setUserId] = useState(0)
  return (
      <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    </>
  )
}
