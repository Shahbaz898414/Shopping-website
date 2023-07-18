import React from 'react'
import { useNavigate } from "react-router-dom";
import { useData } from '../../context/product-context'


const WishListCardInfo = ({ details }) => {

    const { _id, name, image, inStock, fastDelivery } = details
    const { dispatch } = useData()
    const navigate = useNavigate()

    const selectProduct = (id) => {
        if (id) {
            dispatch({ type: "SELECT_PRODUCT", payload: details })
            navigate(`/product/${id}`)
        } else {
            navigate(`title`)
        }
    }

    return (
        <>
            <div className="product-tumb" onClick={() => selectProduct(_id)}>
                <img src={image} alt={name} />
            </div>

            <div className="badge"
                style={inStock ? { backgroundColor: "#3a87ad" } : { backgroundColor: "#b94a48" }}>
                {inStock ? <span> In Stock </span> : <span> Out of Stock </span>}
            </div>
            <br />
            <div className="badge" style={fastDelivery ? { backgroundColor: "#468847", top: "40px" } : { backgroundColor: "#b94a48", top: "40px" }}>
                {fastDelivery ?
                    <span> Fast Delivery </span>
                    :
                    <span> 3 days minimum </span>
                }
            </div>
        </>
    )
}

export default WishListCardInfo
