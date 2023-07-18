import '../../styles/card.css'
import '../../styles/style.css'
import React from 'react'
import { useNavigate } from "react-router-dom";
import WishListCardAction from './WishListCardAction';
import WishListCardInfo from './WishListCardInfo';



const WishListCard = ({ details }) => {

    const { _id, name, price } = details

    const navigate = useNavigate()

    return (

        <div className="column">

            <WishListCardInfo details={details} onClick={() => navigate(`/product/${_id}`)} />

            <div className="product-details">
                <span onClick={() => navigate(`/product/${_id}`)}>
                    <h4> {name} </h4>
                    <div className="product-price">${price}</div>
                </span>
                <WishListCardAction details={details} />
            </div>
        </div>
    )
}


export default WishListCard;