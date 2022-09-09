import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        const url = `https://gentle-peak-72216.herokuapp.com/product/`;
        console.log(url)
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result)
            toast('product added sucessfully',result);
            event.target.reset()
        })
    }
       
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="card-body bg-base-100 shadow-xl border-blue-900 border-2">
        <form onSubmit={handleSubmit( onSubmit)}>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input
      type="text"
      placeholder="Enter Your Name"
      className="input border-blue-900 border-2"
      {...register("name", {
      })}
    />
    <label className="label">
      <span className="label-text">Image</span>
    </label>
    <input
      type="text"
      placeholder="Url"
      className="input border-blue-900 border-2"
      {...register("img", {
      })}
    />
    
    <label className="label">
      <span className="label-text">Quantity</span>
    </label>
    <input
      type="text"
      placeholder="Select Your Ratting"
      className="input border-blue-900 border-2"
      {...register("stock", {
      })}
    />
    <label className="label">
      <span className="label-text">Min Quantity</span>
    </label>
    <input
      type="text"
      placeholder="Select Your Ratting"
      className="input border-blue-900 border-2"
      {...register("minquantity", {
      })}
    />
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input
      type="text"
      placeholder="Select Your Ratting"
      className="input border-blue-900 border-2"
      {...register("price", {
      })}
    />
    <div className="mt-3 text-center">
    <input type="submit" className="btn btn-outline btn-secondary h-2 w-32" />
    </div>
  </div>
     </form>
        </div>
    </div>
    );
};

export default AddNewItem;