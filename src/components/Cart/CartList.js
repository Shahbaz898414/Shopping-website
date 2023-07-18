import React from 'react';
// import Card from '../Card';
import '../../styles/card.css';
import { useData } from '../../context/product-context';
import CartCard from './CartCard';


const CartList = () => {

    const { cartList } = useData()


    return (
        <div className="product-container">
            <div className="row">
                {cartList.map(
                    (item) => (
                        <CartCard details={item} key={item._id} />
                    )
                )}
            </div>
        </div>
    )
}

export default CartList
