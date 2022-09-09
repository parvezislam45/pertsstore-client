import React from 'react';

const Service = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mt-14 gap-y-6'>
            <div class="relative flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto bg-white">
                <div class="w-full md:w-1/3 bg-white grid place-items-center rounded-full">
                    <img class="w-14" src="https://thumbs.dreamstime.com/b/airplane-flight-thin-line-icon-airlines-concept-plane-vector-sign-white-background-airplain-flying-outline-style-mobile-215894275.jpg" alt='david' />
                </div>
                <div class="w-full md:w-2/3 bg-white flex flex-col">
                    <h3 class="font-bold text-gray-800 md:text-2xl text-sm">Free Home Delivery</h3>
                    <p class=" text-gray-500 text-base">Provide free home delivery for all product over $100</p>
                </div>
            </div>
            <div class="relative flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto bg-white">
                <div class="w-full md:w-1/3 bg-white grid place-items-center rounded-full">
                    <img class="w-14" src="https://cdn-icons-png.flaticon.com/512/115/115778.png" alt='david' />
                </div>
                <div class="w-full md:w-2/3 bg-white flex flex-col">
                    <h3 class="font-bold text-gray-800 md:text-2xl text-sm">Quality Products</h3>
                    <p class=" text-gray-500 text-base">We ensure our product quality all times.</p>
                </div>
            </div>
            <div class="relative flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto bg-white">
                <div class="w-full md:w-1/3 bg-white grid place-items-center rounded-full">
                    <img class="w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEFUznYe_6tpzmIKxGDrkmSV1mLWQDo73lQ&usqp=CAU" alt='david' />
                </div>
                <div class="w-full md:w-2/3 bg-white flex flex-col">
                    <h3 class="font-bold text-gray-800 md:text-2xl text-sm">Online Support</h3>
                    <p class=" text-gray-500 text-base">To satisfy our customer we try to give support online</p>
                </div>
            </div>
        </div>

    );
};

export default Service;