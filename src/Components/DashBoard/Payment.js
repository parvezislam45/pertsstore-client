import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from 'react-router-dom';
import Loading from '../Pages/Loading'
import { useQuery } from 'react-query';
import Checkout from './Checkout';




const stripePromise = loadStripe(
    "pk_test_51L1bidLo292x3g8tfr8moanl2KaXvZzkWe64O6xf0Y5k422IWBhN0rS8yvCMS2Z1ObVpGAQXkUeUzdaxlumdUjJH00TtrVJp74"
  );

const Payment = () => {
    const { id } = useParams();
    const url = `https://gentle-peak-72216.herokuapp.com/order/${id}`;
    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        
    }).then(res => res.json()));
    console.log(orders)
  
    if (isLoading) {
        return <Loading></Loading>
    }
  
    return (
        <div className=''>
          <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
              <div class="card-body">
                  <p className="text-success font-bold">Hello, {orders?.name}</p>
                  <h2 class="card-title">Payment for {orders?.productName}</h2>
                  <p class="card-title">Please Pay {orders?.price}</p>
                 
              </div>
          </div>
          <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
              <div class="card-body">
                  <Elements stripe={stripePromise}>
                      <Checkout orders={orders} />
                  </Elements>
              </div>
          </div>
      </div>
    );
};

export default Payment;