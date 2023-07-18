import React from 'react'
import { useData } from '../../context/product-context';

const DeleteFromWishlist = ({ details }) => {

    const { _id } = details
    const { deleteFromWishlist } = useData()

    return (
        <span
            className="material-icons"
            onClick={() => deleteFromWishlist(_id)}>
            favorite
        </span>
    )
}

export default DeleteFromWishlist
