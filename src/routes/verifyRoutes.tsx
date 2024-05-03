import { Outlet, Navigate } from 'react-router-dom'
import { useEmail } from '../hooks/useEmail'

function VerifyRoutes() {
    const email = useEmail();

    return email ? <Outlet /> : <Navigate to='/' />
}

export default VerifyRoutes
