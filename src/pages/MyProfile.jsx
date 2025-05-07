import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hook/useTitle';

const MyProfile = () => {
    useTitle('My Profile')
    const { user, updateUser, setUser } = use(AuthContext)

    const handleUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUser({ displayName: name, photoURL: photoURL }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            // navigate('/')
        }).catch((error) => {
            console.log(error);
            setUser(user)
        });
    }
   
    return (
       <div className='flex flex-col md:flex-row gap-5'>
             <div className='card bg-base-100 shadow-sm md:max-w-2xl border-2 border-r-0 border-b-0 border-secondary mt-10  p-5'>
            <div className='card-body'>
                <h2 className='card-title mb-4'>My Profile <img src={user.photoURL} className='w-12 rounded-full' alt="" /> </h2>
                <h3 className='font-semibold'>User Name: <span className='text-primary'>{user.displayName}</span></h3>
                <h3 className=' font-semibold overflow-hidden md:overflow-none'>User PhotoURL: <span className='text-primary'>{user.photoURL}</span></h3>
              
            </div>
           
        </div>
        <div className='card bg-base-100 md:w-xl shadow-sm mt-10 p-5 lg:absolute lg:bottom-80 lg:right-5 border-2 border-l-0 border-t-0 border-secondary'>
              <p className='card-title'>Update profile</p>
                <form onSubmit={handleUpdate} className='fieldset'>

                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name='name' required />


                    {/* photo url */}
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Photo URL" name='photoURL' required />
                    <button type='submit' className="btn btn-neutral mt-4">Update Profile</button>
                </form>
        </div>
       </div>
    );
};

export default MyProfile;