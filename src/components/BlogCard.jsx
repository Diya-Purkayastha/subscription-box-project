import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({singledata}) => {
    return (
        <div>
             <div className="card bg-base-100  shadow-sm space-y-2">
                <figure className='p-3 border border-primary'>
                    <img className='w-full h-[250px] object-cover'
                        src={singledata.banner}
                        alt="products" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title text-xl">{singledata.title}</h2>
                    
                    <div className="text-lg  font-medium">{singledata.author}</div>
                    <div className="text-lg  ">{singledata.published_date}</div>
               
                    <div className="card-actions justify-center">
                        <Link to={`/blog/${singledata.id}`} className="btn btn-primary text-white p-5 text-[16px]">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;