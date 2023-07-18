import React from 'react'
import { useData } from '../../context/product-context'
import '../../styles/style.css'
import AddToWishlist from '../WishList/AddToWishlist'
import DeleteFromCart from './DeleteFromCart'
import Increment from './Increment'
import Decrement from './Decrement'
import Quantity from './Quantity'



const CartCardAction = ({ details }) => {

    const { _id } = details

    const { state } = useData()

    const presentInCart = () => {
        return state.wishlist.find((item) => item._id === _id)
    }

    return (
        <>

            <div className="product-links-cart">
                <div>
                    {
                        presentInCart() ?
                            ""
                            :
                            <AddToWishlist details={details} />
                    }
                    <DeleteFromCart details={details} />
                </div>
                <div className="cart-quantity">
                    {
                        details.quantity === 1 ? "" : <Decrement details={details} />
                    }
                    <Quantity details={details} />
                    <Increment details={details} />
                </div>
            </div >
        </>
    )
}

export default CartCardAction
