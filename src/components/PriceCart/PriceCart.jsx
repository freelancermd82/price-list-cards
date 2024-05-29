
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({ price }) => {
    console.log(price);
    return (
        <div className='bg-indigo-400 mt-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-4xl text-purple-600 font-extrabold'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-2'>{price.name}</h5>
            <p className='font-bold text-white underline pl-4'>Features: </p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full hover:bg-green-700 bg-green-500 py-2 rounded-md text-white mt-auto text-2xl'>Buy Now</button>

        </div>
    );
};

export default PriceCart;