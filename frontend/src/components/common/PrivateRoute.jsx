
import { useAuth } from '../../hooks/useAuth.js';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const PrivateRoutes = () => {

    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        // If user is not authenticated, redirect to login
        if (!auth.user) {
            navigate('/login', { replace: true, state: { from: location } });
        }
        
    }, [auth, location, navigate])
    
    // User is authenticated and authorized
    return <Outlet />
}

export default PrivateRoutes;
