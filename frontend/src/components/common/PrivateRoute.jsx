
import { useAuth } from '../../hooks/useAuth.js';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const PrivateRoutes = () => {

    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        if (!auth.user) {
            navigate('/login', { replace: true, state: { from: location } });
        }
        
    }, [auth, location, navigate])
    
    return <Outlet />
}

export default PrivateRoutes;
