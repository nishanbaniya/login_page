import React from 'react'
import loginImg from "../assets/login.jpg"
import logoImg from "../assets/logo.jpg"
//  import "./login.css"

export default function Login() {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-full object-cover' src={loginImg} alt=''/>
        </div>

        <div className='bg-gray-800 flex flex-col justify-center ' > 
  
            <form className='max-w-[400px] w-full mx-auto bg-grey-900 p-8 px-8 rounded-lg '>
                <div className='grid place-items-center'>
                  <img className="w-80 h-20" src={logoImg} alt=''/> <br/>
                </div>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>User Name</label>
                    <input  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-none" type="text" />
                </div>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Password</label> 
                    <input   className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-none" type="password" />
                </div>
                <div className='flex justify-between text-gray-300 py-2'>
                    <p className='flex items-center '><input className='mr-2' type='checkbox'/>Remember Me</p>
                    <p>Forget Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
                <div className='flex items-center justify-between text-gray-300 py-2'>
                    <label>Don't have an Account?</label>
                    <a className='bg-teal-500 p-2 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' href='/'>Sign Up Now</a>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
