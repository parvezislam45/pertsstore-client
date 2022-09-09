import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mt-14 gap-y-6'>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src="https://preview.redd.it/qba2bgc720o61.jpg?auto=webp&s=9e02e5d44a28501f3a19245a39bf8960cb1a2fde" alt="" className='bg-gray-300 h-72 w-80 rounded-lg shadow-md bg-cover bg-center' />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Piston</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <Link to ="/items"><button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">See More</button></Link>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2017/08/A-Better-911-Engine-Singer-gear-patrol-1.jpg" alt="" className='bg-gray-300 h-72 w-80 rounded-lg shadow-md bg-cover bg-center' />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Engine</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <Link to ="/items"><button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">See More</button></Link>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Reduction_Gear.jpg" alt="" className='bg-gray-300 h-72 w-80 rounded-lg shadow-md bg-cover bg-center' />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Gear</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <Link to ="/items"><button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">See More</button></Link>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src="https://m.media-amazon.com/images/I/71FEya+QazS._AC_SL1500_.jpg" alt="" className='bg-gray-300 h-72 w-80 rounded-lg shadow-md bg-cover bg-center' />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Head Light</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <Link to ="/items"><button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">See More</button></Link>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src="https://i0.heartyhosting.com/www.bikemag.com/wp-content/uploads/2018/03/BIKP-180400-BTST-013-HR.jpg?fit=1920%2C1080&ssl=1&resize=1920%2C1080" alt="" className='bg-gray-300 h-72 w-80 rounded-lg shadow-md bg-cover bg-center' />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Gear Box</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <Link to ="/items"><button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">See More</button></Link>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <img src="https://c.ndtvimg.com/2022-02/1i0s85i8_car_625x300_03_February_22.jpg" alt="" className='bg-gray-300 h-72 w-80 rounded-lg shadow-md bg-cover bg-center' />
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Tyre</div>
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
                        <h1 class="text-gray-800 font-bold ">$129</h1>
                        <Link to ="/items"><button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">See More</button></Link>
                    </div>
                </div>
            </div>
    
        </div>
    );
};

export default AllProduct;