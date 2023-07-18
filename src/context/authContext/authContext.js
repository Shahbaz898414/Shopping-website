import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import authReducer from "./authReducer"
import setToken from "../../utils/setToken"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const initialState = {
    user: null,
    isAuth: null,
    error: null,
}

export const AuthProvier = ({ children }) => {

    const [state, authDispatch] = useReducer(authReducer, initialState)


    const getUser = async () => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        try {
            const res = await axios.get(`http://localhost:4000/login/`)
            authDispatch({
                type: "SET_USER",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const registerUser = async (userInfo) => {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post(`http://localhost:4000/signup/`, userInfo, config)
        } catch (error) {
            authDispatch({ type: "FAILED_SIGNUP", payload: error.response.data })
        }
    }

    const loginUser = async (userInfo) => {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post(`http://localhost:4000/login/`, userInfo, config)
            console.log(response.data)
            authDispatch({ type: "SUCCESS_LOGIN", payload: response.data })
        } catch (error) {
            authDispatch({ type: "FAILED_LOGIN", payload: error.response.data })
        }
    }

    const logout = () => {
        authDispatch({ type: "LOGOUT" })
    }

    return <AuthContext.Provider value={{
        user: state.user,
        isAuth: state.isAuth,
        error: state.error,
        getUser: getUser,
        registerUser,
        loginUser,
        logout,
        authDispatch
    }}>
        {children}
    </AuthContext.Provider>
}

