import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
        const serviceDetails = data.find(singleData => singleData.id == id)
        setService(serviceDetails)
    }, [data, id])

    return (
        <div className="max-w-6xl mx-auto my-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           
                <div>
                    <img
                        src={service.banner}
                        alt={service.name}
                        className="w-full h-auto rounded-xl shadow-md object-cover"
                    />
                </div>

              
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">{service.name}</h2>
                    <p>{service.description}</p>
                    <p className='font-semibold'>Category: <span className='font-medium'>{service.tech_category}</span> </p>
                    <p className='font-semibold'>Frequency: <span className='font-medium'>{service.frequency}</span> </p>
                    <p className='font-semibold'>Price: <span className='font-medium'>{service.price}</span> </p>
                    <p className='font-semibold'>Rating: <span className='font-medium'>{service.ratings}</span> </p>
                    <p className='font-semibold'>Features: 
                        <ul className='font-medium'> 
                            <li>✔ {service.features[0]}</li> 
                            <li>✔ {service.features[1]}</li> 
                            <li>✔ {service.features[2]}</li> 
                        </ul> </p>
                    <p className='font-semibold'>Subscription Benefits: 
                        <ul className=' font-medium'> 
                            <li>✔ {service.subscription_benefits[0]}</li> 
                            <li>✔ {service.subscription_benefits[1]}</li> 
                            <li>✔ {service.subscription_benefits[2]}</li> 
                        </ul> </p>
                    


                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;