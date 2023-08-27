import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import News from './News';

const Hero = () => {

  return (
    <div className='flex flex-col justify-center bg-[#E2DFD2]' id='my-div'>
      <div className='py-2'>
        <h1 className='mx-auto text-center md:py-3 font-mono text-3xl md:text-5xl text-white font-bold'>
          IOT Lab
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center pb-9'>
        <h1 className='py-4 pb-5 text-2xl md:text-4xl font-bold text-white'>
          Click Here to View Projects
        </h1>
        <button className='bg-white xl md:text-2xl p-2 font-bold font-mono rounded hover:opacity-70'>
          <Link to='/project-page'>Research Projects</Link>
        </button>
      </div>

      <div className='flex flex-col md:flex-row justify-center text-white bg-gray-500'>
        {/* Welcome part */}
        <div className='md:pl-40 md:pr-5 px-6 pt-10 pb-5 md:max-w-[50%] border border-gray-600'>
          <h1 className='text-xl md:text-2xl font-bold flex justify-center'>Welcome</h1>
          <p className='font-semibold font-mono py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quae, rerum, labore
            officia incidunt repellat hic porro alias ullam consectetur maxime vitae? Nostrum
            tenetur eos, iusto architecto laborum nobis dicta.
          </p>
          <p className='font-semibold font-mono py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente nobis,
            temporibus unde quod possimus nulla maxime voluptates, illum optio laborum eaque
            magnam soluta? Praesentium maiores impedit facilis autem quidem?
          </p>
        </div>

        {/* News part */}
        <News />
      </div>
    </div>
  );
};

export default Hero