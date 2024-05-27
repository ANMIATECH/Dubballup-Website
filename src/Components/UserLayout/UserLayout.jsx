import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function UserLayout() {
  return (
    <div>
        <Navbar/>
        
        <Outlet/>
    </div>
  )
}
