import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero bg-banner">
            </div>
            <div class="-mt-96">
                <div class="p-20 text-start">
                    <p class="text-4xl tracking-widest text-white">New Technology & Build</p>
                    <h1 class="font-bold text-6xl text-white">All Type Parts Collection</h1>
                    <button class="btn btn-primary mt-3">Shop Now</button>
                </div>

                <div class="grid grid-cols-1 gap-0 sm:grid-cols-3 -mt-20 ">
                    <div class="p-4 sm:p-10 text-center cursor-pointer">
                    <figure class="relative max-w-sm">
                        <a href="#">
                            <img class="rounded-lg w-full" src="https://i.ibb.co/99QG4Fs/photo-1609387445284-e0e30aeffe1a.png" alt="description" />
                        </a>
                        <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                            <h1>From $ 358</h1>
                            <h1 className='font-bold text-4xl text-yellow-500'>Latest & Beauty Headlight</h1>
                            <button class="btn btn-primary mt-3">Shop Now</button>

                        </figcaption></figure>
                    </div>
                    <div class="p-2 sm:p-10 text-center cursor-pointer">
                    <figure class="relative max-w-sm">
                        <a href="#">
                            <img class="rounded-lg" src="https://i.ibb.co/F50BQKS/bonnet.png" alt="description" />
                        </a>
                        <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                            <h1>New Design 2018</h1>
                            <h1 className='font-bold text-4xl text-yellow-500'>Exclusive Car Bonnets</h1>
                            <button class="btn btn-primary mt-3">Shop Now</button>

                        </figcaption></figure>
                    </div>
                    <div class="p-2 sm:p-10 text-center cursor-pointer">
                    <figure class="relative max-w-sm">
                        <a href="#">
                            <img class="rounded-lg" src="https://i.ibb.co/sV6NPQD/car.png" alt="description" />
                        </a>
                        <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                            <h1>Latest Interior</h1>
                            <h1 className='font-bold text-4xl text-yellow-500'>Attractive Car DeshBoard</h1>
                            <button class="btn btn-primary mt-3">Shop Now</button>

                        </figcaption></figure>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Banner;