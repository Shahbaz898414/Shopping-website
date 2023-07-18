import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext/authContext';
import { useData } from '../../context/product-context';


const AddToCart = ({ details }) => {

    const { addToCartAndDb } = useData()
    const { isAuth } = useAuth()
    const navigate = useNavigate()

    const clickHandler = () => {
        if (!isAuth) {
            navigate("/login")
        }

        details.quantity = 1

        addToCartAndDb(details)
    }

    return (
        <span className="button-link"
            onClick={clickHandler}>
            Add To Cart
        </span>
    )
}

export default AddToCart
