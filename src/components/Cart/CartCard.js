import React from 'react'
import '../../styles/style.css'
import { useNavigate } from "react-router-dom";
import CartCardAction from './CartCardAction'
import CartCardInfo from './CartCardInfo'


const CartCard = ({ details }) => {

    const { _id, name, price, } = details
    console.log(_id)

    const navigate = useNavigate()

    return (
        <div className="column">

            <CartCardInfo details={details} onClick={() => navigate(`/product/${_id}`)} />

            <div className="product-details">
                <span onClick={() => navigate(`/product/${_id}`)}>
                    <h4> {name} </h4>
                    <div className="product-price">${price}</div>
                </span>
                <CartCardAction details={details} />
            </div>
        </div>
    )
}

export default CartCard
