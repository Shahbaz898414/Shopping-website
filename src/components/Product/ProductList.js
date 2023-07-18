import React from 'react'
import '../../styles/card.css'
import ProductCard from './ProductCard';


const ProductList = ({ productList }) => {


    return (
        <div className="product-container">
            <div className="row">
                {productList.map(
                    (item) => (
                        <ProductCard details={item} key={item._id} />
                    )
                )}
            </div>
        </div>
    )
}

export default ProductList;
