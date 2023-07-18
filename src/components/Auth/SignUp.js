import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext/authContext';
import "../../styles.css"

const SignUp = () => {

    const [user, setUser] = useState({ username: "", email: "", password: "", password2: "" })
    const { username, email, password, password2 } = user
    const [loading, setLoading] = useState(false)
    const { registerUser } = useAuth()
    const navigate = useNavigate()


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()
        if (password !== password2) {
            console.log("passwords do not match")
        }
        else {
            registerUser({ username, email, password })
            setLoading(false)
            navigate('/login')
        }
    }

    return (
        <div className="login-container">
            <h1>SIGNUP</h1>
            {loading && <span className="loader"></span>}
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" value={username}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={password}
                    onChange={handleChange}
                />

                <label>Confirm Password</label>
                <input type="password" name="password2" placeholder="Confirm Password" value={password2}
                    onChange={handleChange}
                />

                <button type="submit" value="Submit">Submit</button>
            </form>

            <p>Already have an account ? <Link to="/login" className="lnk" >LOGIN</Link></p>
        </div>
    )
}

export default SignUp
