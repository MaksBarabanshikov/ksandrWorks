import { useLocation, Navigate } from "react-router-dom"
import {useSelector} from "react-redux";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useSelector(state => state.facebook.user.isLoggedIn)

    if (!auth) {
        return <Navigate to="/auth" state={{from: location}} />
    }

    return  children
}

export { RequireAuth }