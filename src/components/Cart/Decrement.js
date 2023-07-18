import React from 'react'
import { useData } from '../../context/product-context'

const Decrement = ({ details }) => {

    const { _id, name, image, fastDelivery, productName, quantity } = details

    const { dispatch } = useData()


    return (
        <span
            className="material-icons"
            onClick={() => dispatch({ type: "DECREMENT", payload: { _id, name, image, fastDelivery, productName, quantity } })}>
            remove
        </span>
    )
}

export default Decrement
