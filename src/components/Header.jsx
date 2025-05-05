import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/cat.jpeg'
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const {user, logOut} = use(AuthContext);
  
    const handleLogout = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
            toast('you logged out successfully')
          }).catch((error) => {
            // An error happened.
            toast(error.message);
          });
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/about'> About</NavLink>
                <NavLink to='/career'> Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : userimg}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary'>Log Out</button> :  <Link to='login' className='btn btn-primary px-10'>Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Header;