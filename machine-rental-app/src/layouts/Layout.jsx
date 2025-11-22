import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'

const NavbarLayout = () => {
    const location = useLocation()

    return (
        <>
            <NavBar />
            <main key={location.pathname} className="flex-1">
                {/* animate-page-fade defined in index.css */}
                <div className="animate-page-fade">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default NavbarLayout
