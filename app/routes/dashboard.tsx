import React from 'react'
import { Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div>
        Dashboard Route
        <Outlet />
    </div>
  )
}

export default Dashboard;