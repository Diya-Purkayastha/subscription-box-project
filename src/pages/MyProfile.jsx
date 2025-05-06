import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
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
        <div className='card bg-base-100 shadow-sm max-w-lg mx-auto mt-10'>
            <div className='card-body'>
                <h2 className='card-title'>My Profile</h2>
                <h3>User Name: {user.displayName}</h3>
                <h3>User Name: {user.photoURL}</h3>
                <p>Update profile</p>
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