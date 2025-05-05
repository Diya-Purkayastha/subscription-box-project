import React, { use } from 'react';
import ServiceCard from './ServiceCard';

const servicePromise = fetch('/data.json').then(res => res.json());
const Service = () => {
    const service = use(servicePromise);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                service.map(singledata => <ServiceCard singledata = {singledata} key={singledata.id}></ServiceCard>)
            }
        </div>
    );
};

export default Service;