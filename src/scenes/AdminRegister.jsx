import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";

const AdminRegister = () => {
    const [email, setemail] =useState('');
    const [password, setpassword] =useState('');
  /*   const handleEmailChange = (event) => {
        setEmail(event.target.value); // Update the email state when the input changes
      }; */
      async function register(e) {
        e.preventDefault();
        
        try {
          const response = await fetch('https://workshopsphere-backend.onrender.com/admin/register', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
          });
    
          if (response.ok) {
            console.log("User registered successfully!");
          } else {
            console.error("Registration failed!");
          }
        } catch (error) {
          console.error("An error occurred during registration:", error);
        }
      }
  return (
    <div>
    <Navbar />
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-[50%] p-6 mx-auto bg-slate-100 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-hover-blue underline">
                   Register
                </h1>
                <form className="mt-6" onSubmit={register}>
                    <div className="mb-2">
                        <label
                            for="email"
                            
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e=> setemail(e.target.value)}
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
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-hover-blue rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Register
                        </button>
                    </div>
                </form>
                <h1 className=" ml-[80%] font-semibold text-center text-hover-blue underline">
                <Link to="/admin-login">Login</Link>
                </h1>
                

            </div>
        </div>

</div>
  )
}

export default AdminRegister