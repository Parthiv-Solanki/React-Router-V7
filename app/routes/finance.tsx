import React from 'react'
import { Outlet } from 'react-router'

const Finance = () => {
    return (
        <div>
            Finance Route
            <Outlet />
        </div>
    )
}

export default Finance