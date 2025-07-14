import React from 'react';
import { Link } from 'react-router';

const WeCreateWebsite = () => {
    return (
        <div className='bg-white text-left md:mt-50 md:w-4/5'>
            <div className='pl-2 pr-2 md:pl-10 md:pr-20 pb-2 md:pb-30 pt-5 space-y-5 md:w-2/3'>
                <h1 className='font-bold md:text-4xl'>We Create Websites</h1>
            <p className='text-sm md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit perspiciatis sapiente totam ipsum eveniet dolore asperiores rem sed? Voluptates itaque sapiente porro quia placeat molestiae ipsa, ad quis repellendus sed.</p>
            <Link><button className='btn btn-primary bg-black'>View Portfolio</button></Link>
            </div>
        </div>
    );
};

export default WeCreateWebsite;