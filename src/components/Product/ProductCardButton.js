import React from 'react'
import useProduct from '../hooks/useProduct';
// import AddToCart from '../Cart/AddToCart';
// import OutOfStock from '../OutOfStock';
import { Link } from 'react-router-dom'
import { useData } from '../../context/product-context';

const ProductCardButton = ({ details }) => {

    const { _id, inStock } = details
    const { addToCart } = useProduct()
    const { state, presentInCart } = useData()
    // console.log("product", _id)


    const a = presentInCart()
    console.log(a)

    return (
        <>

            <button className="button-link"
                onClick={() => addToCart(_id)}>{!presentInCart(_id) ? "Add To Cart" : "go to"}
            </button>
            {/* {
                presentInCart() ?
                    <Link to="/cart" className="button-link">
                        Go To Cart
                    </Link>
                    :
                    <span className="button-link"
                        onClick={() => addToCart(_id)}>
                        Add To Cart
                    </span>
            } */}

            {/* <button>{!presentInCart() ? " hello" : "lllllll"}</button> */}

        </>
    )
}

export default ProductCardButton
