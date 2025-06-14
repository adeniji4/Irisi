import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const List = ({token}) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate()
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      
      if (response.data.success) {
        setList(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  const removeProduct = async (id) => {
    try {

      const url = `${backendUrl}/api/product/delete/${id}`;

      const response = await axios.delete(url, {headers: {token}});

      if (response.data.success) {
        toast.success(response.data.message);
        setList([]);
        await fetchList();
      } else {
        toast.error(response.data?.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchList()
  }, [])
  return (
    <>
      <p>All Prouducts List</p>
      {/* List Table Title */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b >Action</b>
      </div>
      {/* Product List */}

      {[...list].reverse().map((item, index) => (
        <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={item._id}>
          <img src={item.image} className='w-12' alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <div className='flex items-center gap-5'>
            <p className='text-right md:text-center cursor-pointer text-lg' onClick={() => removeProduct(item._id)}>X</p>

            <img src={assets.update_icon} className='w-5 cursor-pointer' alt="" onClick={() => navigate(`/update/${item._id}`)}/>
          </div>
        </div>
      ))}
    </>
  )
}

export default List