import React from 'react'
import { Outlet } from 'react-router-dom'

const DashbordLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DashbordLayout