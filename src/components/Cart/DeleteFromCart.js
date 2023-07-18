import React from 'react'
import { useData } from '../../context/product-context'

const DeleteFromCart = ({ details }) => {

    const { _id } = details

    const { deleteFromCart } = useData()

    return (
        <span
            className="material-icons"
            onClick={() => deleteFromCart(_id)}>
            remove_shopping_cart
        </span>
    )
}

export default DeleteFromCart
