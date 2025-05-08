
import React, { use } from 'react';
import BlogCard from './BlogCard';
import useTitle from '../hook/useTitle';

const blogPromise = fetch('/blog.json').then(res=>res.json())

const Blog = () => {
    useTitle("Blog")
    const blog = use(blogPromise)
    return (
        <div className='my-20 space-y-10'>
        <h1 className=' text-3xl md:text-5xl text-center'>Box Blog: <span className='font-bold text-secondary'>Stories, Tips & Trends </span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        
        {
            blog.map(singledata => <BlogCard singledata = {singledata} key={singledata.id}/>)
        }
    </div>
    </div>
    );
};

export default Blog;