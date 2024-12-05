'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux';
import "../../../../styles/_menudetils.scss"
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';


const Menudetail = () => {
  const{id} =  useParams();
  const menuItems = useSelector((state)=>
    state.menu.items.find((item) => item.id === parseInt(id)) // Ensure id is parsed as an integer

)  
if(!menuItems){
    return(
        <div className='loading-container'>
            <div className='spinner'></div>
            <p>...Loading</p>

        </div>
    )
}
  
   

    

    
    
  return (

    <div className='menu-details'>

        <h1 className='menu-details__heading'>MenuDetails</h1>
        <Link href="/" className='menu-details__LINK'>
        <IoMdArrowBack className='menu-details__back-btn'/>
        Back To Homepage

        </Link>
        <div className='menu-details__image'>
            <Image src={menuItems.image} width={400} height={300} alt={menuItems.name}/>

        </div>
        <div className="menu-details__content">
            <h1 className='menu-details__name'>{menuItems.name}</h1>
            <p className='menu-details__description'>{menuItems.description}</p>
            <p className="menu-details__price">{menuItems.price}</p>

        </div>
    </div>
  )
}

export default Menudetail
