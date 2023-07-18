import React from 'react'
import { useData } from '../../context/product-context'

const Increment = ({ details }) => {

    const { _id, name, image, fastDelivery, productName, quantity }
        = details

    const { dispatch } = useData()

    return (
        <span
            className="material-icons"
            onClick={() => dispatch({ type: "INCREMENT", payload: { _id, name, image, fastDelivery, productName, quantity } })}>
            add
        </span>
    )
}

export default Increment
