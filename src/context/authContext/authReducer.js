

const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                error: null
            }

        case "SUCCESS_LOGIN":
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isAuth: true,
                error: null,
                user: state.user
            }
        case "FAIL_SIGNUP":
        case "FAIL_LOGIN":
        case "LOGOUT":
            localStorage?.removeItem("token")
            return {
                ...state,
                user: null,
                isAuth: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default authReducer