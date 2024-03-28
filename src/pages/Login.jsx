import React, { useState } from 'react';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className='text-center '>
            <h5 className='pt-2'>Conditional Rendering</h5>
            <div className="d-flex justify-content-evenly pt-5">
                <button className='btn btn-warning ' onClick={handleLogin}>Login</button>
                <button className='btn btn-warning' onClick={handleLogout}>Logout</button>
            </div>

            {isLoggedIn ? (
                <p className='h5 pt-3'>Welcome back!</p>
            ) : (
                <p className='h5 pt-3'>Please log in to continue.</p>
            )}
        </div>
    );
}

export default Login;