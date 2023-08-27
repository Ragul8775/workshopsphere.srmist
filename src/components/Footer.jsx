import React from 'react'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import dees from '../images/dees.png'
import schl from '../images/schl.png'
import srm from '../images/srm.png'

const Footer = () => {
  return (
    <div>
    <div className='flex justify-normal md:justify-between border border-gray-600 bg-white'>
      <div className='flex justify-center'>
      <ul className='px-20 font-semibold py-8 md:py-20'>
        <li className=' font-bold'>Contents</li>
        <a href=''>
            <li className=' hover:text-gray-500 transition-colors duration-300 border-b border-gray-600'>Home</li>
            </a>
            <a href=''>
            <li className=' hover:text-gray-500 transition-colors duration-300 border-b border-gray-600'>About </li>
            </a>
            <a href=''>
            <li className=' hover:text-gray-500 transition-colors duration-300 border-b border-gray-600'>Members</li>
            </a>
            <a href=''>
            <li className=' hover:text-gray-500 transition-colors duration-300 border-b border-gray-600'>Projects</li>
            </a>
            <a href=''>
            <li className='  hover:text-gray-500 transition-colors duration-300 border-b border-gray-600'>Contact </li>
            </a>
        </ul>
      </div>


      <div className='flex justify-center'>
      <ul className='pl:8 md:px-20 font-semibold py-8 md:py-20'>
        <li className='py-1 font-bold'>Contact US</li>
        <li className='py-1 flex flex-r170'><AiOutlinePhone className='icons'></AiOutlinePhone>+91 44 27417000</li>
        <li className='py-1 flex flex-row '><AiOutlinePhone className='icons'></AiOutlinePhone>+91 44 27417777</li>
        <li className='py-1 flex flex-row '><AiOutlineMail className='icons'></AiOutlineMail><span className='px-1'></span> helpdesk@srmist.edu.in</li>
      </ul>
      </div>

      <div className=' flex-col justify-normal py-10 px-20 hidden xl:flex'>
        <div>
          <h2 className=' justify-center flex'>lorem ipsum sin</h2>
        </div>
        <div className='flex flex-row justify-between py-10 '>
          <a href=''>
          <img className='max-w-[130px]  hover:scale-110 ease-in-out duration-200 ' src={dees} alt=''></img>
          </a>
          <a href=''>
          <img className='max-w-[130px] hover:scale-110 ease-in-out duration-200 ' src={schl} alt=''></img>
          </a>
          <a href=''>
          <img className='max-w-[150px] hover:scale-110 ease-in-out duration-200 ' src={srm} alt="" />
          </a>
        </div>
      </div>

    </div>
    </div>
  )
}


export default Footer