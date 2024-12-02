import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <NavLink to={"/"} >   Home    </NavLink>
            <NavLink to={"addpage"}>AddPage</NavLink>
            <NavLink to={"basket"}>Basket</NavLink>
            <NavLink to={"wishlist"}>Wish List</NavLink>
        </div>
    )
}

export default Navbar