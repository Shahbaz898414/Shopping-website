import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext/authContext";



export function PrivateRoute({ path, ...props }) {
    const { isAuth } = useAuth()

    return isAuth ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate state={{ from: path }} replace to="/login" />
    );
}
