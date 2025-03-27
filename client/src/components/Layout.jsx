import React from 'react'
import { Outlet } from 'react-router'
import Topbar from './Topbar'

const Layout = () => {
  return (
    <div
    className='app
    h-screen
    w-screen
    flex-col
    flex
    items-center
    justify-center
    light'
    >
        <Topbar />
        <Outlet />    
    </div>
  )
}

export default Layout