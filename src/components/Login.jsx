import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


const Login = () => {
  return (
    <div className="max-w-lg mx-auto flex flex-col mt-24 gap-4">
      <h1 className="text-2xl font-bold">Log in to your Udemy account</h1>

      <button className='w-full border border-black text-left px-2 py-4 flex flex-row items-center gap-2 hover:bg-slate-300'> 
      <FcGoogle className=" text-4xl "/>
      <span className='font-bold text-2xl'>Continue with Google</span>
      </button>
      <button className='w-full border border-black text-left px-2 py-4 flex flex-row items-center gap-2 hover:bg-slate-300'> 
      <FaFacebookSquare className="i text-4xl " />
      <span className='font-bold text-2xl' >Continue with Facebook</span>
      </button>
      {/* <button className='w-full border border-black text-left px-2 py-4 flex flex-row items-center gap-2 hover:bg-slate-300'> 
       <FaApple className=" text-4xl" />
      <span className='font-bold text-2xl'>Continue with Apple</span>
      </button> */}

      <form >
        <input type="email"
               placeholder="email"
               className='w-full border border-black py-6 px-2 text-2xl text-black' />
        <input type="password"
               placeholder="password"
               className='w-full border border-black py-6 px-2 text-2xl text-black mt-4' />
        <button type="button" className='w-full text-center py-4  bg-green-500 border border-black mt-4 text-white text-xl'>Log in</button>
      </form>
        <span className='inline text-center text-3xl'> or <a href="#" >ForgotPassword</a></span>
    </div>
  );
}

export default Login
