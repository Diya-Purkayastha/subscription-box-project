import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hook/useTitle';

const MyProfile = () => {
    useTitle('My Profile');
    const { user, updateUser, setUser } = use(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
            })
            .catch((error) => {
                console.log(error);
                setUser(user);
            });
    };

    return (
        <div className='max-w-6xl mx-auto p-5 mt-10 flex flex-col lg:flex-row gap-8 justify-center items-start'>

            
            <div className='card bg-base-100 shadow-md w-full lg:w-1/2 p-6 border border-secondary' data-aos = "fade-up" data-aos-delay='100'>
                <div className='card-body'>
                    <h2 className='card-title mb-4'>
                        My Profile
                        <img src={user.photoURL} className='w-12 h-12 rounded-full ml-2' alt="User" />
                    </h2>
                    <h3 className='font-semibold mb-2'>
                        User Name: <span className='text-primary'>{user.displayName}</span>
                    </h3>
                    <h3 className='font-semibold break-words'>
                        Photo URL: <span className='text-primary'>{user.photoURL}</span>
                    </h3>
                </div>
            </div>

        
            <div className='card bg-base-100 shadow-md w-full lg:w-1/2 p-6 border border-secondary' data-aos = "fade-down" data-aos-delay='100'>
                <p className='card-title mb-4'>Update Profile</p>
                <form onSubmit={handleUpdate} className='space-y-4'>
                 
                    <div>
                        <label className="label">Name</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Your Name" name='name' required />
                    </div>

                    <div>
                        <label className="label">Photo URL</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Photo URL" name='photoURL' required />
                    </div>

                    <button type='submit' className="btn btn-neutral w-full">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
