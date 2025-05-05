import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const[service, setService] = useState({});
    useEffect(()=>{
        const serviceDetails = data.find(singleData => singleData.id == id)
        setService(serviceDetails)
    },[data, id])

    return (
        <div>
        <div className="card bg-base-100 w-6/12 mx-auto my-5 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{service.name}</h2>
                
                <div className="badge badge-outline badge-secondary">{service.tech_category}</div>
              <div className='flex justify-between'>
              <div className="badge badge-outline badge-warning">{service.frequency}</div>
              <div className="badge badge-outline badge-error">{service.price}</div>
              </div>
            
            </div>
        </div>
    </div>
    );
};

export default ServiceDetails;