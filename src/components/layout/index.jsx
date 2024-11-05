import React from 'react'
import Navbar from '../navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-h-[calc(100vh-65px)] overflow-y-auto scrollbar'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout