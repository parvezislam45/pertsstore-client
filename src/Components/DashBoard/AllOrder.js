import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AllOrder = () => {
    const [orders,setOrders]=useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://gentle-peak-72216.herokuapp.com/orders`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, [user]);
    return (
        <div>
        <h1>all orders {orders.length}</h1>
        <div class="overflow-x-auto w-full">
<table class="table w-full">
{/* <!-- head --> */}
<thead>
  <tr>
    <th>
      <label>
        <input type="checkbox" class="checkbox" />
      </label>
    </th>
    <th>Name</th>
    <th>Job</th>
    <th>Favorite Color</th>
    <th></th>
  </tr>
</thead>
<tbody>
  {/* <!-- row 1 --> */}
 {
     orders.map(order => <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={user.photoURL} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold">{user.displayName}</div>
            </div>
          </div>
        </td>
        <td>
          {order.name}
        </td>
        <td>{order.email}</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
 }
</tbody>

</table>
</div>
    </div>
    );
};

export default AllOrder;