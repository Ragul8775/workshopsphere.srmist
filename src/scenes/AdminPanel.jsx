import React, { useState ,useEffect} from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import CreateNews from '../components/CreateNews'
import { Switch } from '@headlessui/react'
import AdminLogin from './AdminLogin';
const AdminPanel = () => {
    const [isCreatingNews, setIsCreatingNews] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      // Check if the user is logged in by verifying the token in local storage
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        setIsLoggedIn(true);
      }
    }, []);
  
    if (!isLoggedIn) {
      // If the user is not logged in, redirect to login page
      return <AdminLogin setIsLoggedIn={setIsLoggedIn} />;
    }


    return (
    <div>
      
      <div className="mb-4 flex items-center">
        
        <div className="flex items-center ml-6">
          <span className="mr-2">Post</span>
          <Switch
            checked={isCreatingNews}
            onChange={setIsCreatingNews}
            className={`${
              isCreatingNews ? 'bg-teal-900' : 'bg-teal-700'
            } relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${
                isCreatingNews ? 'translate-x-9' : 'translate-x-0'
              } pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="ml-2">News</span>
        </div>
      </div>
  

      <div className="block max-w-l rounded-lg bg-brown-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        {isCreatingNews ? (
          <CreateNews  />
        ) : (
          <CreatePost />
        )}
      </div>
    </div>
  );
}
export default AdminPanel;