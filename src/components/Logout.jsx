import React from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token from localStorage
        localStorage.removeItem('authToken');
        
        // Update auth state (if using state management)
        setIsLoggedIn(false);

        // Redirect to login page or homepage
        navigate('/admin'); // Redirect to your login page
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
