import React from 'react';
import { Link } from 'react-router-dom';

const PartsDetails = ({product}) => {
    const{_id,name,img,description,price,stock,minimum}=product;
    // const [user]=useAuthState(auth)
    return (
        <div className='drop-shadow-2xl '>
            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2  text-2xl font-medium tracking-tight">Name : {name}</h5>
                    <p className=" details text-justify mb-3 font-normal  dark:text-gray-400">Description : {description}</p>
                    <div className='item'>
                        <h3 className='text-xl'>Quantity : {stock}</h3>
                        <h2 className='text-xl'>Price : ${price}</h2>
                        <h2 className='text-xl'>Minimum : ${minimum}</h2>
                    </div>
                    <Link to = {`/purchase/${_id}`}><button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Purchase</button></Link>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default PartsDetails;