import React from 'react';
import Lists from './Lists';

const WhatWeDo = () => {

        const services = [
            {
                title: 'Strategy',
                items: ['Analytics and Research', 'Interactive Workshops', 'Brand Strategy', 'Content Strategy', 'Digital Strategy', ],
                linkItem: {
                    text: 'Conversion Rate Optimization',
                    to: '',
                },
            },
            {
                title: 'Design',
                items: ['Creative Direction', 'Brand Guides', 'Prototypes', 'Visual Asset Creation', 'Motion Design'],
                linkItem: {
                    text:  'UI/UX & Web Design',
                    to: '',
                },
            },
            {
                title: 'Development',
                items: ['System Architecture Design', 'Full-Stack Development','Performance Optimization', 'WordPress Development', 'Shopify Development'],
                linkItem: {
                    text:  '3rd Party Integrations', 
                    to: '',
                },
            },
        ];

    return (
        <div className='bg-black text-white pt-16 space-y-20'>

            <div  className='text-[#FFD700] justify-center text-center space-y-4 flex flex-col'>
                <h1 className=' font-bold text-4xl'>Epic Design and Engineering</h1>
            </div>

            <div className='grid grid-cols-3 gap-10 text-center'>
                {
                    services.map( (service,id) => <Lists key={id} service={service}></Lists>)
                }
            </div>


        </div>
    );
};

export default WhatWeDo;