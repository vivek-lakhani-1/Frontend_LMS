import React from 'react'

const SignUp = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col mt-24 gap-4">
    <h1 className="text-2xl font-bold">Sign up and Start Learning</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-black py-6 px-2 text-2xl text-black"
        />
        <input
          type="text"
          placeholder="Phone No"
          className="w-full border border-black py-6 px-2 text-2xl text-black mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-black py-6 px-2 text-2xl text-black mt-4"
        />
        <button
          type="button"
          className="w-full text-center py-4  bg-green-500 border border-black mt-4 text-white text-xl"
        >
          Sign Up
        </button>
       
      </form>
    
    </div>
  );
}

export default SignUp
