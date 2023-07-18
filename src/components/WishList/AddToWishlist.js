import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext/authContext';
import { useData } from '../../context/product-context';


const AddToWishlist = ({ details }) => {

    const { addToWishlistAndDb } = useData()
    const { isAuth } = useAuth()
    const navigate = useNavigate()

    const clickHandler = () => {
        if (!isAuth) {
            navigate("/login")
        }
        addToWishlistAndDb(details)
    }

    return (
        <span
            className="material-icons"
            onClick={clickHandler} >
            favorite_border
        </span>
    )
}

export default AddToWishlist
