import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { useEffect, useState } from 'react';
import Add from './pages/Add';
import List from './pages/List';
import Order from './pages/Order';
import UpdateProduct from './components/UpdateProduct';
import ContactMessages from './pages/ContactMessages';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₦'


function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token'): '')

  //we are add the token into localStorage or when we refresh we don't get logout

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token ? (<>
        <Navbar setToken={setToken}/>
        <hr />

        <div className='flex w-full'>
          <Sidebar/>

          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/' element={<Add token={token}/>}/>
              <Route path='/list' element={<List token={token}/>}/>
              <Route path='/order' element={<Order token={token}/>}/>
              <Route path='/update/:id' element={<UpdateProduct token={token}/>}/>
              <Route path='/contact-messages' element={<ContactMessages />} />
            </Routes>
          </div>
        </div>
      
      </>) : (<Login setToken={setToken}/>)}
      
    </div>
  )
}

export default App
