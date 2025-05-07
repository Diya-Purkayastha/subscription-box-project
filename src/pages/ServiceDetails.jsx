import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useTitle from '../hook/useTitle';
import ServiceReview from '../components/ServiceReview';

const ServiceDetails = () => {
    useTitle("Services")
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
                    <p className='font-semibold'>Features:</p>
                    <ul className=' font-medium'>
                        {service.features?.slice(0, 3).map((feature, index) => (
                            <li key={index}>✔ {feature}</li>
                        ))}
                    </ul>

                    <p className='font-semibold'>Subscription Benefits:</p>
                    <ul className=' font-medium'>
                        {service.subscription_benefits?.slice(0, 3).map((benefit, index) => (
                            <li key={index}>✔ {benefit}</li>
                        ))}
                    </ul>



                </div>
            </div>
            <ServiceReview></ServiceReview>
        </div>

    );
};

export default ServiceDetails;