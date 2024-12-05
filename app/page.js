'use client'
import React from 'react'
import "../styles/_home.scss"
import Menucard from '@/Components/menucard';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { deletemenuItem } from '@/redux/menuSlice';

const Page = () => {
  const menus = useSelector((state)=>state.menu.items);
  const dispatch = useDispatch();
  const handeldelete =(id)=>{
    dispatch(deletemenuItem(id));
  }
  return (
    <div className='homepage'>
      <h1 className='homepage__title'>Welcome to Our E-Menu</h1>
      <div className="homepage__menu-button">
        <Link href="/add-menu" className='menu-button'>
        Add menu
        </Link>
      </div>
      <div className='homepage__menu-grid'>
       {
        menus.length>0 ? (
          menus.map((menu)=><Menucard key={menu.id} menu={menu} onDelete={handeldelete}/>)
        ):(
          <div className="homepage__no-menu">
            <p>No menus available at the moment. Please check back later!</p>
          </div>
        )
       }


      </div>
      
    </div>
  )
}

export default Page
