import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Pages/Loading'
import auth from '../../firebase.init'
import { useAuthState } from "react-firebase-hooks/auth";
const Purchase = () => {
    const params = useParams();
    const [user]=useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const [minimumError,setMinimumError]=useState('');
    const { isLoading, data: singleProduct,refetch} = useQuery('singleProduct', () =>
    fetch(`http://localhost:7000/product/${params.id}`).then(res =>
      res.json()
    )
  )
  if (isLoading) 
  return <Loading></Loading>
   
    const onSubmit = data => {
      // handleBtn(data.quantity)
      if(data.quantity < singleProduct.minimum){
        setMinimumError('Please Select Atleast Minimum Quantity')
        return
      }
      else{setMinimumError('')}
      const order = {
        product:singleProduct._id,
        productName:singleProduct.name,
          email: user.email,
          name:user.displayName,
          address: data.Address,
          phone: data.phone,
          quantity : data.quantity,
          price:singleProduct.price
      }
      const restQuantity= singleProduct.stock-order.quantity
      fetch("http://localhost:7000/order", {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(order)
      })
      .then(res =>res.json())
      .then(data =>{
          console.log(data)
          fetch(`http://localhost:7000/product/${params.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({restQuantity})
        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data)
          refetch()
         
        })
  
      })
  }
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className='flex  justify-between  flex-wrap mx-1 lg:mx-4'>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <div class="card-body bg-base-100 shadow-xl">
        <img className="w-96" src={singleProduct.img} alt="Shoes" />
        <h2 class="card-title">Name : {singleProduct.name}</h2>
        <h3 className="text-xl">Quantity : {singleProduct.stock}</h3>
        <h2 className="text-xl">Price : {singleProduct.price}</h2>
        <h2 className="text-xl">Minimum : {singleProduct.minimum}</h2>
      </div>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="card-body bg-base-100 shadow-xl border-blue-900 border-2">
              <form onSubmit={handleSubmit( onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input border-blue-900 border-2"
            value={user.displayName || ''} readOnly
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input border-blue-900 border-2"
            value={user.email || ''} readOnly
          />
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Your Address"
            className="input border-blue-900 border-2"
            {...register("Address", {
            })}
          />
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input border-blue-900 border-2"
            {...register("phone", {
            })}
          />
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input border-blue-900 border-2"
            {...register("quantity", {
            })}
          />
          {
            minimumError && <p>{minimumError}</p>
          }
          <div className="mt-3 text-center">
          <input type="submit" className="btn btn-outline btn-secondary h-2 w-32" />
          </div>
        </div>
           </form>
              </div>
          </div>
        </div>      
    </div>
    );
};

export default Purchase;