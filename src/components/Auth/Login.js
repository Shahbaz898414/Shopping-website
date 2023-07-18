import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext/authContext';
import "./login.css"

const Login = () => {
    const [user, setUser] = useState({ email: "tom@gmail.com", password: "123456" })
    const { email, password } = user
    const { isAuth, loginUser, getUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            getUser()
            navigate("/")
            console.log(user)
        }
    }, [isAuth, getUser, navigate, user])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        loginUser({ email, password })
    }
    return (
        <div className="login-container">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />

                <button type="submit" value="Submit">Submit</button>
            </form>
            <p>Create a new account. <Link to="/register" className="lnk" >SIGNUP</Link></p>
        </div>
    )
}

export default Login
