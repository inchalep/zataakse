import React from "react";

const ProductCard = ({ product }) => {
  console.log(product,'product:::')
  return (
    <div className='w-full h-full'>
      <figure className='bg-slate-400 w-full'>
        <img src={product.thumbnail} alt={product.title} className='w-full h-full object-contain' />
      </figure>
      <p className='capitalize text-gray-500'>{product.category}</p>
      <h3 className='capitalize font-semibold'>{product.title}</h3>
      <span className='text-gray-800'>${product.price}</span>
    </div>
  );
};

export default ProductCard;
