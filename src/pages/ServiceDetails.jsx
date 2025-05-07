import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useTitle from '../hook/useTitle';

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



            {/* review */}
            <div className='my-5'>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl  py-5">
                    <form  className="card-body text-center">
                        <h1 className="text-3xl font-semibold text-center">Login your account</h1>
                        <fieldset className="fieldset text-center">
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required  />
                            {/* password */}
                            <label className="label">Password</label>
                            
                            <input type="email" className="input" placeholder="Email" name='email' required  />

                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default ServiceDetails;