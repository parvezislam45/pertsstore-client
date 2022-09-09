import React from 'react';

const Deals = () => {
    return (
        <div>

            <div class="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div class=" max-w-6xl bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">
                                <img src="https://static.toiimg.com/photo/msid-93436198/93436198.jpg" class="w-full relative z-10" alt="" />
                                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-10">
                            <div class="mb-10">
                                <h1 class="font-bold uppercase text-5xl text-center mb-5">FLASH DEALS</h1>
                                <h1 class="text-2xl font-bold text-center">HURRY UP AND GET 25% DISCOUNT</h1>
                            </div>
                            <div>
                                <div class="flex justify-center items-center">
                                    <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold text-center"><i class="mdi mdi-cart -ml-2 mr-2"></i> Add To Cart</button>
                                </div>
                            </div>
                            <div class=" grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 ">
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-center w-16">
                                    <span class="countdown font-mono text-4xl text-center">
                                        <span className=''></span>
                                    </span>
                                    days
                                </div>
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-center w-16">
                                    <span class="countdown font-mono text-4xl">
                                        <span>0</span>
                                    </span>
                                    hours
                                </div>
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-center w-16">
                                    <span class="countdown font-mono text-4xl">
                                        <span>0</span>
                                    </span>
                                    min
                                </div>
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-center w-16">
                                    <span class="countdown font-mono text-4xl">
                                        <span>0</span>
                                    </span>
                                    sec
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;