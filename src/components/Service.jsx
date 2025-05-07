import React, { use } from 'react';
import ServiceCard from './ServiceCard';

const servicePromise = fetch('/data.json').then(res => res.json());
const Service = () => {
    const service = use(servicePromise);
    
    return (
        <div className='my-20 space-y-10'>
            <h1 className='text-5xl text-center'>Choose a <span className='font-bold text-secondary'>Subscription Box</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            
            {
                service.map(singledata => <ServiceCard singledata = {singledata} key={singledata.id}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Service;