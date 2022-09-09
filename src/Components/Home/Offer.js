import React from 'react';
import './Offer.css'

const Offer = () => {
    return (
        <div>
            <div class=" max-w-7xl rounded bg-banner2 shadow-xl p-10 lg:p-10 mx-auto text md:text-left">
                <p className="text-center text-2xl font-bold text-white mt-3">SPECIAL OFFER FOR SUBSCRIPTION</p>
                <h1 className="text-center text-4xl font-bold text-white mt-4">GET INSTANT DISCOUNT FOR<br></br>MEMBERSHIP</h1>
                <p className="text-center text-xl text-white mt-3">Subscribe our newsletter and all latest news of our<br></br>
                    latest product, promotion and offers</p>
                <div className='flex justify-center items-center mt-8'>
                    <div class="newslatter">
                        <form>
                            <input type="email" name="email" id="mail" placeholder="Enter Your E-Mail" />
                            <input type="submit" name="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Offer;