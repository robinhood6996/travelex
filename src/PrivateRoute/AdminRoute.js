import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const AdminRoute = ({ children }) => {
    const { user, loading, admin } = useAuth();

    if (!admin) {
        return <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }

    return user.email && admin ? children : <Navigate to='/' />
};

export default AdminRoute;