import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="shadow-lg bg-white">
      <div className="flex border border-black items-center justify-between px-4 py-4 flex-nowrap">
      <div className='logo p-2'>
        <h1 className='text-4xl font-bold'>LOGO</h1>
      </div>
      <div className='categories p-4'>
        <p className='text-2xl'>Programs</p>
      </div>
      <div className='flex flex-1'>
        <form className='relative w-full'>
        <FaSearch  className='absolute text-2xl top-5 left-4 '/>
          <input type="text"
          placeholder="search for anything"
          className='bg-slate-100  px-12 py-4 rounded-full flex-1 text-xl w-full border border-black'
          />
        </form>
        </div>
    <div className='hidden lg:flex gap-1 w-fit'>
        <span className='text-xl p-4 w-fit whitespace-nowrap'>About Us</span>
        <span className='text-xl p-4 w-fit whitespace-nowrap'>Chat with Us</span>
       
    </div>
    <div className='hidden md:block text-center p-6'>
    <FaShoppingCart  className='text-3xl'/>
    </div>
      <div className='hidden buttons xl:flex gap-4'>
        <button type="button" className='border border-black bg-transparent text-xl px-4 py-2'>Log in</button>
        <button type="button" className='bg-black text-white  text-xl px-4 py-2'>Sign UP</button>
        <button type="button" className='border border-black bg-transparent  text-xl px-4 py-2'><FaGlobe /></button>
      </div>
      </div>
    </header>
  )
}

export default Navbar
