import axios from "axios"
import { createContext, useContext, useReducer } from "react"


const ProductContext = createContext()

export const useData = () => {
    return useContext(ProductContext)
}

const cartlist = []
const wishlist = []
const productList = []
const bill = 0
const productDetail = null

export const ProductProvider = ({ children }) => {

    const [state, dispatch] =
        useReducer(reducer,
            {
                sortType: null,
                ShowAllProduct: false,
                ShowFastDelivery: false,
                cartlist,
                wishlist,
                productList,
                bill,
                productDetail
            }
        )


    const addToCartAndDb = async (details) => {

        const { _id, name, price, image, brand, material, inStock, fastDelivery, ratings, color } = details
        try {
            const { status } = await axios.post(`http://localhost:4000/cart/`, {
                cartItems: {
                    _id: _id,
                    name: name,
                    price: price,
                    image: image,
                    brand: brand,
                    material: material,
                    inStock: inStock,
                    fastDelivery: fastDelivery,
                    ratings: ratings,
                    color: color,
                }
            })

            if (status === 201) {
                dispatch({ type: "ADD_TO_CART", payload: { item: details } })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addToWishlistAndDb = async (details) => {
        const { _id, name, price, image, brand, material, inStock, fastDelivery, ratings, color } = details

        try {
            const { status } = await axios.post(`http://localhost:4000/wishlist/`, {
                wishlistItems: {
                    _id: _id,
                    name: name,
                    price: price,
                    image: image,
                    brand: brand,
                    material: material,
                    inStock: inStock,
                    fastDelivery: fastDelivery,
                    ratings: ratings,
                    color: color,
                }
            })
            if (status === 201) {
                dispatch({ type: "ADD_TO_WISHLIST", payload: { item: details } })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFromCart = async (id) => {
        console.log(id)
        try {
            const { status } = await axios.delete(`http://localhost:4000/cart/${id}`)
            if (status === 200) {
                dispatch({ type: "DELETE_ITEM_FROM_CART", payload: id })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFromWishlist = async (id) => {
        try {
            const { status } = await axios.delete(`http://localhost:4000/wishlist/${id}`)
            if (status === 200) {
                dispatch({ type: "DELETE_ITEM_FROM_WISHLIST", payload: id })
            }
        } catch (error) {
            console.log(error)
        }
    }



    return <ProductContext.Provider value=
        {{
            productList: state.productList,
            wishlist: state.wishlist,
            sortType: state.sortType,
            ShowAllProduct: state.ShowAllProduct,
            ShowFastDelivery: state.ShowFastDelivery,
            state,
            bill: state.bill,
            productDetail: state.productDetail,
            addToCartAndDb,
            addToWishlistAndDb,
            deleteFromCart,
            deleteFromWishlist,
            dispatch
        }}>
        {children}
    </ProductContext.Provider>
}

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                productList: action.payload
            }

        case "SET_CART":
            return {
                ...state,
                cartlist: action.payload.cartlist
            }

        case "SET_WISHLIST":
            return {
                ...state,
                wishlist: action.payload.wishlist
            }

        case "SELECT_PRODUCT":
            return {
                ...state,
                productDetail: action.payload
            }

        case "ITEM_IN_STOCK":
            return state = {
                ...state,
                ShowAllProduct: !state.ShowAllProduct
            }

        case "FAST_DELIVERY":
            return {
                ...state,
                ShowFastDelivery: !state.ShowFastDelivery
            }

        case "SORT":
            return {
                ...state,
                sortType: action.payload
            };

        case "ADD_TO_CART":
            console.log(action.payload)
            const found = state.cartlist.find((item) => item._id === action.payload._id)
            if (!found) {
                return {
                    ...state,
                    cartlist: state.cartlist.concat(action.payload.item),
                }
            }
            return state

        case "INCREMENT":
            return {
                ...state,
                cartlist: state.cartlist.map((item) => item._id === action.payload._id ?
                    { ...item, quantity: action.payload.quantity + 1 } : item)
            }

        case "DECREMENT":
            return {
                ...state,
                cartlist: state.cartlist.map((item) => item._id === action.payload._id ?
                    { ...item, quantity: action.payload.quantity - 1 } : item)
            }

        case "DELETE_ITEM_FROM_CART":
            console.log(state.cartlist)
            console.log(action.payload)
            return {
                ...state,
                cartlist: state.cartlist.filter((item) => item._id !== action.payload)
            }

        case "DELETE_ITEM_FROM_WISHLIST":

            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item._id !== action.payload)
            }

        case "ADD_TO_WISHLIST":
            const present = state.wishlist.find((item) => item._id === action.payload._id)
            if (!present) {
                return {
                    ...state,
                    wishlist: state.wishlist.concat(action.payload.item)
                }
            }
            return state

        case "CLEAR_USER":
            return {
                ...state,
                cartlist: [],
                wishlist: []
            }

        case "RESET":
            return {
                ...state,
                sortType: null, ShowAllProduct: false, ShowFastDelivery: false
            }


        default:
            return state;
    }
};



