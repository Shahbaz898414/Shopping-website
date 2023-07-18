import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Cart from "./pages/Cart";
import NavBar from "./components/Header/NavBar";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist"
import axios from 'axios'
import "./styles.css";
import { useData } from "./context/product-context";
import { PrivateRoute } from "./components/PrivateRoute";
import setToken from "./utils/setToken"
import { useAuth } from "./context/authContext/authContext";

if (localStorage.token) {
  setToken(localStorage.token)
}


export default function App() {

  const { state, dispatch } = useData()
  const { isAuth, getUser } = useAuth()

  useEffect(() => {
    if (isAuth) {
      (async () => {
        try {
          const response = await axios.get("http://localhost:4000/cart/")
          dispatch({ type: "SET_CART", payload: { cartlist: response.data[0].cartlist } })
        } catch (error) {
          console.log("error", error)
        }
      })()
    }
  }, [dispatch, getUser, isAuth])

  useEffect(() => {
    if (isAuth) {
      (async () => {
        try {
          const response = await axios.get("http://localhost:4000/wishlist/")
          console.log(response.data[0].wishlist)
          dispatch({ type: "SET_WISHLIST", payload: { wishlist: response.data[0].wishlist } })
        } catch (error) {
          console.log("error", error)
        }
      })()
    }
  }, [dispatch, getUser, isAuth])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/products/")
        dispatch({ type: "SET_PRODUCTS", payload: response.data.productData })
      } catch (error) {
        console.log("error", error)
      }
    })()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    // eslint-disable-next-line 
    getUser()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <PrivateRoute path="/cart" element={<Cart cartlist={state.cartlist} />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
