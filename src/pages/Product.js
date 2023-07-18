import React from 'react'
import { useData } from '../context/product-context'
import ProductList from '../components/Product/ProductList';


const Product = () => {

    const { productList, sortType, ShowAllProduct, ShowFastDelivery, dispatch } =
        useData()




    const getSortedData = (productData, sortType) => {

        if (sortType && sortType === "PRICE_HIGH_TO_LOW") {
            return productData.sort((a, b) => b.price - a.price)
        }
        if (sortType && sortType === "PRICE_LOW_TO_HIGH") {
            return productData.sort((a, b) => a.price - b.price)
        }
        return productData;
    };

    const getFilteredData = (productData, { ShowAllProduct, ShowFastDelivery }) => {

        return productData
            .filter(({ inStock }) => ShowAllProduct ? true : inStock)
            .filter(({ fastDelivery }) => ShowFastDelivery ? fastDelivery : true)
    }


    const sortedData = getSortedData(productList, sortType);
    const filteredData = getFilteredData(sortedData, { ShowAllProduct, ShowFastDelivery })

    return (
        <>
            <div className="App" style={{ display: "flex", textAlign: "center", flexDirection: "row", justifyContent: "space-around" }}>
                <div>
                    <fieldset style={{ padding: "10px" }}>
                        <legend>Sort By</legend>
                        <label style={{ padding: "5px" }}>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() => dispatch(
                                    { type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                                }
                            />
                            Price - High to Low
                        </label>
                        <label style={{ padding: "5px" }}>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() => dispatch(
                                    { type: "SORT", payload: "PRICE_LOW_TO_HIGH" })}
                            />
                            Price - Low to High
                        </label>
                    </fieldset>
                </div>
                <div>
                    <fieldset style={{ padding: "10px" }}>
                        <legend>Filter By</legend>
                        <label style={{ padding: "5px" }}>
                            <input
                                type="checkbox"
                                checked={ShowAllProduct}
                                onChange={() => dispatch(
                                    { type: "ITEM_IN_STOCK" })}
                            />
                            Out of Stock
                        </label>
                        <label style={{ padding: "5px" }}>
                            <input
                                type="checkbox"
                                checked={ShowFastDelivery}
                                onChange={() => dispatch(
                                    { type: "FAST_DELIVERY" })}
                            />
                            Fast Delivery
                        </label>
                    </fieldset>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <span className="button-link" onClick={() => dispatch({ type: "RESET" })}>Reset</span>
            </div>
            <ProductList productList={filteredData} />
        </>
    )
}

export default Product
