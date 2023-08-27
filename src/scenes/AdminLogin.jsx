import React, { useState } from 'react'

import { Navigate, json } from 'react-router-dom';


const AdminLogin = ({ setIsLoggedIn }) => {
     const [email, setEmail] =useState('');
    const [password, setpassword] =useState('');
    const [redirect, setRedirect]=useState(false);
    
   
    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:6001/admin/login', {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
      
        if (response.ok) {
          const data = await response.json();
          if (data.token) {
            localStorage.setItem('authToken', data.token);
            setIsLoggedIn(true);
            setRedirect(true);
            console.log('Token stored:', data.token);
          } else {
            alert('Authentication failed. Please check your credentials.');
          }
        } else {
          alert('Authentication failed. Please check your credentials.');
        }
      }
      if(redirect){
        return <Navigate to={'/admin-panel'}/>
      }
      
      
  return (
    <div>
        
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-[50%]  p-6 mx-auto bg-slate-100 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-hover-blue underline">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={login} >
                    <div className="mb-2">
                        <label
                            for="email"
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                             value={email}
                            onChange={e=> setEmail(e.target.value)} 
                            className="block w-full px-4 py-2 mt-2 text-hover-blue bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password} 
                            onChange={e=> setpassword(e.target.value)} 
                            className="block w-full px-4 py-2 mt-2 text-hover-blue bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-hover-blue rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
        </div>
  )
}

export default AdminLogin