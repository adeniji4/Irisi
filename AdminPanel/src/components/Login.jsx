import React, { useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Login = ({setToken}) => {
  
  const [email, setEmail] = useState('ClothingByDan@gmail.com')
  const [password, setPassword] = useState('basket86')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      // console.log(email, password)
      const response = await axios.post(backendUrl + '/api/admin/login', {email, password})

      if (response.data.success) {
        setToken(response.data.token) //this will be send the token to the useState in the app.jsx so it will display the pages
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <label htmlFor="" className='text-sm font-medium text-gray-700 mb-2'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
          </div>

          <div className="mb-3 min-w-72">
            <label htmlFor="" className='text-sm font-medium text-gray-700 mb-2'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password}  className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
          </div>

          <button type='submit' className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'>Login</button>
        </form>
      </div>
    </div>
  )
}
