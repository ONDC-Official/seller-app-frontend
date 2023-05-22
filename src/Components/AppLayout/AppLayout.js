import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Navbar from '../Shared/Navbar'
import Sidebar from '../Shared/Sidebar'
import { getValueFromCookie } from '../../utils/cookies'
import SessionExpired from '../SessionExpired/SessionExpired'

const AppLayout = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isSessionExpired, setIsSessionExpired] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const token = getValueFromCookie('token')
            if (!token) setIsSessionExpired(true)
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Box>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <main style={{ height: '100%' }}>
                {props.children}
            </main>
            {isSessionExpired && <SessionExpired />}
        </Box>
    )
}

export default AppLayout
