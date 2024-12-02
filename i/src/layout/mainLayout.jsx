import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
function MainLayout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </>
    )
}

export default MainLayout