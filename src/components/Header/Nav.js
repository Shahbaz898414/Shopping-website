import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext/authContext'
import { useData } from '../../context/product-context'

import './navbar.css'


const Nav = () => {

    const { state, dispatch } = useData()
    const { isAuth, user, logout } = useAuth()
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch({ type: "CLEAR_USER" })
        console.log("logout")
        logout()
    }


    return (
        <div className="navbar">
            <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <span style={{ fontFamily: "Cursive", fontWeight: "bolder", fontSize: "3rem" }}>DUKAAN</span>
            </div>
            <nav className="nav">
                <ul id={menu ? "hidden" : ""}>
                    <Link to="/" className="lnk" ><li>Home</li></Link>
                    <Link to="/cart" className="lnk" >
                        <li>Cart{isAuth && <sup>{state.cartlist.length === 0 ? null : state.cartlist.length}</sup>}</li>
                    </Link>
                    <Link to="/wishlist" className="lnk" >
                        <li>Wishlist{isAuth && <sup>{state.wishlist.length === 0 ? null : state.wishlist.length}</sup>}</li>
                    </Link>
                    {!isAuth
                        ?
                        <Link to="/login" className="lnk" >
                            <li style={{ border: "1px solid black", padding: "0.5rem" }}>LOGIN / SIGNUP</li>
                        </Link>
                        : <>
                            <div className="dropdown">
                                <button className="dropbtn">{user && <span>{user.username.toUpperCase()}</span>}</button>
                                <div className="dropdown-content">
                                    <button onClick={handleLogout}>LOGOUT</button>
                                </div>
                            </div>
                        </>
                    }

                </ul>
            </nav>

            <span className="material-icons menu" onClick={() => setMenu(!menu)}>menu</span>

        </div>
    )
}

export default Nav;
