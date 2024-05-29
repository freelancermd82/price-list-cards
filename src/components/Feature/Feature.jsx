import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center pl-4 pb-2'>
            <div><CheckCircleIcon className="size-4 text-blue-500" /></div>
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;