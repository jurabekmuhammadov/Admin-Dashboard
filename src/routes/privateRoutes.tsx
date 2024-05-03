
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function PrivateRoutes() {
    const token = useAuth();
    
    return token ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoutes
