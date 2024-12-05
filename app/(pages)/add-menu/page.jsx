'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./../../../styles/_addmenu.scss"
import { addmenuItem } from '@/redux/menuSlice';
import Image from 'next/image';
const Addmenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formdata,setformdata] = useState({
    name:'',
    description:'',
    price:'',
    image:null,
  });
  const[imagepreview,setimagepreview] = useState(null);
  const handelchange = (e)=>{
    const{name,value,files} = e.target;
    if(name === 'image'){
      const file = files[0];
      setformdata((prev)=>({
        ...prev,
        [name]:file,
      }));
      setimagepreview(URL.createObjectURL(file));
    }else{
      setformdata((prev)=>({
        ...prev,
        [name]:value,
      }))
    }
  }
  const handelsubmit = (e)=>{
    e.preventDefault();

    dispatch(addmenuItem(formdata));
    router.push('/');
  }
  return (
    <div className='add-menu'>
      <h1>Add New Menu Item</h1>
      <form onSubmit={handelsubmit} className='add-menu__form'>
        <div className="form-group">
          <label >Name:</label>
          <input type="text" name='name' value={formdata.name} onChange={handelchange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name='description' value={formdata.description} onChange={handelchange} required/>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name='price' value={formdata.price} onChange={handelchange} required/>
        </div>
        <div className="form-group">
          <label>Upload Image:</label>
          <input type='file' name='image' accept='image/*' onChange={handelchange} required/>
          {
            imagepreview && (
              <div className="image-preview">
                <Image
                src={imagepreview}
                alt="Image Preview"
                width={300}
                height={300}
                layout="intrinsic"
                objectFit="contain"
              />
              </div>
            )
          }

        </div>
        <button type="submit" className="btn btn-save">
          Add Menu Item
        </button>

      </form>
      
    </div>
  )
}

export default Addmenu
