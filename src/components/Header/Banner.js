import React from 'react'
import banner from "../../media/banner.jpg"
import './navbar.css'

const Banner = () => {
    return (
        <div className="row">
            <div className="col-2">
                <h1>Dukaan |<span style={{ fontSize: "4rem", fontFamily: "cursive" }}> A place for all electronic items</span></h1>
            </div>
            <div className="col-2">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Banner
