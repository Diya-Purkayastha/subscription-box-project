import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useTitle from '../hook/useTitle';
const BlogDetails = () => {
    useTitle('Blog')
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
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p>{service.description}</p>
                    <p className='font-semibold'>Author: <span className='font-medium'>{service.author}</span> </p>
                    <p className='font-semibold'>Published_date: <span className='font-medium'>{service.published_date}</span> </p>
               
                    


                </div>
            </div>
        </div>
    );
};

export default BlogDetails;