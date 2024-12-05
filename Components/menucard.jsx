
import React from 'react';
import "../styles/_menucard.scss";
import Image from 'next/image';
import Link from 'next/link';

const Menucard = ({ menu, onDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    onDelete(menu.id);   // Trigger the delete action
  };

  return (
    <div className="menu-card">
      <Link href={`/menudetails/${menu.id}`} className="menu-card-link">
        <div className="menu-card__image">
          <Image 
            src={menu.image} 
            width={300} 
            height={200} 
            alt={menu.name} 
            objectFit="cover" 
            priority={menu.id === 1} 
          />
        </div>
        <div className="menu-card__details">
          <h3 className="menu-card__details__name">{menu.name}</h3>
          <p className="menu-card__details__description">{menu.description}</p>
          <p className="menu-card__details__price">${menu.price}</p>
        </div>
      </Link>
      <div className="menu-card__actions">
        <Link href={`/edit-menu/${menu.id}`} className="menu-card__edit">Edit</Link>
        <button onClick={handleDelete} className="menu-card__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Menucard;
