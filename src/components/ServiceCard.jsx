import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ singledata }) => {
  
    return (
        <div>
            <div className="card bg-base-100  shadow-sm space-y-2">
                <figure className='p-3 border border-primary'>
                    <img className='w-full h-[250px] object-cover'
                        src={singledata.banner}
                        alt="products" />
                </figure>
                <div className="card-body space-y-1">
                    <h2 className="card-title text-2xl">{singledata.name}</h2>
                    
                    <div className="text-lg  font-semibold">{singledata.tech_category}</div>
                  <div className='flex justify-between'>
                  <div className="badge text-lg p-4 badge-outline badge-error">{singledata.price}</div>
                  <div className="badge text-lg p-4 badge-outline badge-warning">{singledata.frequency}</div>
                  </div>
                    
                    
                    <div className="card-actions justify-start">
                        <Link to={`/service/${singledata.id}`} className="btn btn-primary text-white p-5 text-[16px]">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;