import '../../styles/card.css'
import '../../styles/style.css'
import React from 'react'
import ProductCardAction from './ProductCardAction'
import { useNavigate } from "react-router-dom";
import ProductCardInfo from './ProductCardInfo';


const ProductCardDetails = ({ details }) => {

    const { _id, name, price } = details

    const navigate = useNavigate()

    return (
        <div className="column">
            <ProductCardInfo details={details} onClick={() => navigate(`/product/${_id}`)} />

            <div className="product-details">
                <span onClick={() => navigate(`/product/${_id}`)}>
                    <h4> {name} </h4>
                    <div className="product-price">${price}</div>
                </span>
                <ProductCardAction details={details} />
            </div>


        </div >
    )
}

export default ProductCardDetails
