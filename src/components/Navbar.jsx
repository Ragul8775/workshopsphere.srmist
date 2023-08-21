import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import srm from '../images/srm.png'
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between w-full items-center h-24 max-w font-bold max-w-[1240px] bg-white'>
        <div className='flex justify-center'>
        <img src={srm} className='md:max-w-[200px] max-w-[150px] md:pl-10 ' alt=''></img>
        </div>
        <div>
        <ul className='hidden md:flex'>
            <a href=''>
            <li className='p-4 hover:underline active:underline'><Link to="/">Home</Link></li>
            </a>
            <a href=''>
            <li className='p-4 hover:underline active:underline '>About </li>
            </a>
            <a href=''>
            <li className='p-4 hover:underline active:underline '> <a href="#members">Members</a></li>
            </a>
            <a href=''>
            <li className='p-4 hover:underline active:underlineduration-500'><Link to="/project-page">Projects</Link></li>
            </a>
            <a href=''>
            <li className='p-4 pr-10 hover:underline active:underline '>Contact </li>
            </a>
        </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden pr-5'>
            {!nav ? <AiOutlineClose size={20} ></AiOutlineClose> : <AiOutlineMenu size={20}></AiOutlineMenu>}
           
        </div>
        <div className={!nav ? 'z-50 fixed left-0 top-0 w-[50%] border-r h-full bg-gray-500 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className=' px-2'>
                <a href=''>
            <li className='p-4 border-b border-gray-600'><Link to="/">Home</Link></li>
            </a>
            <a href=''>
            <li className='p-4 border-b border-gray-600'>About </li>
            </a>
            <a href=''>
            <li className='p-4 border-b border-gray-600'><a href="#members">Members</a></li>
            </a>
            <a href=''>
            <li className='p-4 border-b border-gray-600'><Link to="/project-page">Projects</Link></li>
            </a>
            <a href=''>
            <li className='p-4 border-b border-gray-600'>Contact </li>
            </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar