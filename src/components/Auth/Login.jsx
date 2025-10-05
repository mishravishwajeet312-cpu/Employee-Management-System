import React from 'react'
import { useState } from 'react'

const Login = ({HandleLogin}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const SubmitHandler= (e) =>{
    e.preventDefault()
    HandleLogin(email,password);
    
    setEmail('')
    setPassword('')

}


  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className='rounded-xl border-2 border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
                SubmitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          
          required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-3 py-3 px-5 text-xl placeholder:text-gray-400' type="password" placeholder='Enter your Password' />
          <button className='mt-5 text-white border-none outline-none bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white'>Log in</button>

     

            </form>


        </div>


    </div>
  )
}

export default Login