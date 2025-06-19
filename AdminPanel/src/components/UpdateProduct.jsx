import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import { backendUrl} from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const backendUrl = import.meta.env.VITE_API_BASE_URL;


const UpdateProduct = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [type, setType] = useState('');
  const [fabric, setFabric] = useState('');
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/product/single/${id}`);
        if (response.data.success) {
          const product = response.data.product;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategory(product.category);
          setFabric(product.fabric);
          setSizes(product.sizes);
          setExistingImage(product.image); 
          setType(product.type)// existing Cloudinary image URL
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error.message)
        toast.error('Failed to load product');
      }
    };

    fetchProduct();
  }, [id]);

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('type', type);
      formData.append('fabric', fabric);
      formData.append('sizes', JSON.stringify(sizes)); // serialize array
      if (image) formData.append('image', image);

      const response = await axios.put(`${backendUrl}/api/product/update/${id}`, formData, {headers: {token}});

      if (response.data.success) {
        toast.success('Product updated successfully!');
        navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message)
      toast.error('Error updating product');
    }
  };

  return (
    <form className='flex flex-col w-full items-start gap-3' onSubmit={onSubmitHandler}>
      <div>
        <p className='mb-2'>Upload Image</p>
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : existingImage || assets.upload_area}
            className='w-28'
            alt=""
          />
          <input type="file" id='image' onChange={(e) => setImage(e.target.files[0])} hidden />
        </label>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='write content here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Type</p>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} className='w-full px-3 py-2' placeholder='e.g. Kaftan, T-Shirt'/>
        </div>

      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Fabric</p>
          <input type="text" value={fabric} onChange={(e) => setFabric(e.target.value)} className='w-full px-3 py-2' placeholder='Type Here' />
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='7500' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p className={`${sizes.includes(size) ? 'bg-[#c09c8b]' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>UPDATE</button>
    </form>
  );
};

export default UpdateProduct;
