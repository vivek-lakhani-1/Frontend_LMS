import React, { useState } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs';

const SignUp = () => {
  const [SignUpData, setSignUpData] = useState({
    email : "",
    phoneno : "",
    password : ""
  })

  const handleChange = (e) => {
    setSignUpData(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }


  const handleSubmit = async (e) => {
   
    e.preventDefault();
    
    const hashedPassword = await bcrypt.hashSync(SignUpData.password, 10);


    try {
      const response = await axios.post('http://localhost:8080/user', {
        ...SignUpData,
        password : hashedPassword
      });
      console.log('Response:', response.data);
      
    } catch (error) {
      console.error('Error:', error);
      
    }
  }
  return (
    <div className="max-w-sm mx-auto flex flex-col mt-24 gap-4">
    <h1 className="text-2xl font-bold">Sign up and Start Learning</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={SignUpData.email}
          onChange={handleChange}
          className="w-full border border-black py-6 px-2 text-2xl text-black"
        />
        <input
          type="text"
          name="phoneno"
          value={SignUpData.phoneno}
          onChange={handleChange}
          placeholder="Phone No"
          className="w-full border border-black py-6 px-2 text-2xl text-black mt-4"
        />
        <input
          type="password"
          name="password"
          value={SignUpData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-black py-6 px-2 text-2xl text-black mt-4"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-center py-4  bg-green-500 border border-black mt-4 text-white text-xl"
        >
          Sign Up
        </button>
       
      </form>
      <span className='inline text-center text-3xl'> or <a href="#" >ForgotPassword</a></span>
    </div>
  );
}

export default SignUp
