'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateMenuItem } from '@/redux/menuSlice';
import "./../../../../styles/_editmenu.scss"
const Editmenu = () => {
    const{id}=useParams();
    const dispatch = useDispatch();
    const router = useRouter();
    
    const menu = useSelector((state)=>
    state.menu.items.find((item)=>item.id === parseInt(id))
    )
    const[formdata,setformdata] =useState({
        name:menu?.name || '',
        description:menu?.description || '',
        price:menu?.price || '',
    
    })
    if(!menu){
        return <p>Menu item not found</p>
    }
    const handelchange = (e)=>{
        const{name,value} = e.target;
        setformdata((prev)=>({
            ...prev,
            [name]:value,
        }))
    }
    const handelsubmit=(e)=>{
        e.preventDefault();
        dispatch(updateMenuItem({ id: menu.id, data: formdata })); // Update the Redux store

        router.push('/');
    }
  return (
    <div className='edit-menu'>
        <h1>Edit menu Item</h1>
        <form onSubmit={handelsubmit} className='edit-menu__form'>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name='name'value={formdata.name} onChange={handelchange} required />

            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea name="description" value={formdata.description} onChange={handelchange} required/>
            </div>
            <div className="form-group">
                <label>Price:</label>
                <input type="number" name='price' value={formdata.price} onChange={handelchange} required />

            </div>
            <button type='submit' className='btn btn-save'>Save Changes</button>

        </form>

    </div>
  )
}

export default Editmenu
