import React from 'react'
import { useData } from '../context/product-context'
import '../styles/style.css'
import CartCard from '../components/Cart/CartCard';
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router';

const emptyStyle = {
    textAlign: "center",
    fontSize: "5rem",
}

const Cart = () => {

    const { state } = useData()
    const navigate = useNavigate()

    async function handleToken(token, addresses) {
        // const response = await axios.post(
        //     "https://ry7v05l6on.sse.codesandbox.io/checkout",
        //     { token, product }
        // );
        // const { status } = response.data;
        // console.log("Response:", response.data);
        // if (status === "success") {
        //     toast("Success! Check email for details", { type: "success" });
        // } else {
        //     toast("Something went wrong", { type: "error" });
        // }
        navigate("/")
        console.log(token, addresses)

    }


    const getBill = () => {
        const val = state.cartlist.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
        return val
    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            {
                state.cartlist.length > 0 &&
                <fieldset style={{ textAlign: 'center' }}>
                    <h3>Total Amount : {getBill()}</h3>
                </fieldset>
            }
            <div className="checkout">
                <StripeCheckout
                    stripeKey="pk_test_51JNybtSD4ohoI2LiLFQFtLKlXeI0IwsKHKVJNExmOsEYBagx1HyU35BtO7lqsms7W7196PBqO2W2z0vgjCRK7qtz00nuJfW8xC"
                    token={handleToken}
                    amount={getBill() * 100}
                    shippingAddress
                />
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                {
                    state.cartlist.length === 0 ? <div style={emptyStyle}>Cart is Empty</div> :
                        state.cartlist.map((item) => (
                            <CartCard details={item} key={item._id} />
                        ))
                }
            </div>
        </>
    )
}


export default Cart;