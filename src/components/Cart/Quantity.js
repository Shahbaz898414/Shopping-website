import React from 'react'

const Quantity = ({ details }) => {

    const { quantity } = details

    return (
        <span style={{ fontSize: "2rem", marginLeft: "20px", marginRight: "20px" }}>
            {quantity}
        </span>
    )
}

export default Quantity
