import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='flex px-[4%] py-2 justify-between items-center'>
      <h3 className='text-3xl font-bold'>ClothingbyDan</h3>

      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar