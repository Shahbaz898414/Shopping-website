//import axios from 'axios'
import React from 'react'
import { useData } from '../context/product-context'
import '../styles/style.css'
import WishListCard from '../components/WishList/WishListCard'


const emptyStyle = {
    textAlign: "center",
    fontSize: "5rem",
}

const Wishlist = () => {

    const { state } = useData()

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Wishlist</h1>
            <div className="row">
                {
                    state.wishlist.length === 0 ? <div style={emptyStyle}>Wishlist is Empty</div> :
                        state.wishlist.map((item) => (
                            <WishListCard details={item} key={item._id} />
                        ))
                }

            </div>
        </>
    )
}


export default Wishlist