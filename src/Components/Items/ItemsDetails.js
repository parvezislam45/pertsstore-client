import React from 'react';
import { Link } from 'react-router-dom';

const ItemsDetails = ({product}) => {
    const{_id,name,img,price,stock}=product;
    return (
      <div>
        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div class="prod-title">
        <p class="text-2xl uppercase text-gray-900 font-bold text-center">{name}</p>
      </div>
      <div class="prod-img">
        <img src={img}
             class="w-72 h-72 object-cover object-center" alt=''/>
      </div>
      
        
        <div class="flex flex-col md:flex-row justify-between items-center text-center text-gray-900">
          <p class="font-bold text-xl text-center">Price : $ {price}</p>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p class="font-bold text-xl text-center">Stock : {stock}</p>
        </div>
        <div className='text-center'>
          <Link to = {`/purchase/${_id}`}><button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Buy Now</button></Link>
        </div>
        
      </div>
        <div>
        {/* <Link to ='/addnewproduct'><button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add New</button></Link> */}
        </div>
      </div>
        
    );
};

export default ItemsDetails;