import React from 'react';
import AllProduct from './AllProduct';
import Banner from './Banner';
import Deals from './Deals';
import Offer from './Offer';
import Partner from './Partner';
import Selling from './Selling';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <div className='mt-10'>
            <h1 className="text-3xl text-center font-bold">Best Seller</h1>
            <p className=" text-center">All best seller product are now available for you and your can<br></br> buy this product from here any time any where so sop now</p>
            <Selling></Selling>
            <Deals></Deals>
            <h1 className="text-3xl text-center font-bold">All Product</h1>
            <AllProduct></AllProduct>
            <Offer></Offer>
            <div className="mt-6">
            <Partner></Partner> 
                </div> 
                 
            </div>
        </div>
    );
};

export default Home;