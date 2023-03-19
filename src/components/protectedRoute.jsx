import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute({isAllowed, children, redirectto='/landing'}) {
    if (!isAllowed) return <Navigate to = {redirectto}/>

    return children ? children : <Outlet /> 
}

export default ProtectedRoute