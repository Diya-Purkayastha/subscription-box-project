import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ singledata }) => {
    console.log(singledata);
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{singledata.name}</h2>
                    
                    <div className="badge badge-outline badge-secondary">{singledata.tech_category}</div>
                  <div className='flex justify-between'>
                  <div className="badge badge-outline badge-warning">{singledata.frequency}</div>
                  <div className="badge badge-outline badge-error">{singledata.price}</div>
                  </div>
                    
                    
                    <div className="card-actions justify-start">
                        <Link to={`/service/${singledata.id}`} className="btn btn-primary">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;