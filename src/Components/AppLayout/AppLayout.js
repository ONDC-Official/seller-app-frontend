import React, { useState } from 'react'
import { Box } from '@mui/material'
import Navbar from '../Shared/Navbar'
import Sidebar from '../Shared/Sidebar'

const AppLayout = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <Box>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <main style={{ height: '100vh' }}>
                {props.children}
            </main>
        </Box>
    )
}

export default AppLayout
