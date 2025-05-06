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
        <div className='flex justify-between items-center p-2'>
            <div className="text-3xl text-primary font-medium"><h1>SubS.<span className='text-secondary'>boX</span></h1></div>
            <div className="nav flex gap-5 text-lg font-medium">
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    user &&  <NavLink to='/myprofile'>My Profile</NavLink>
                }
            </div>
            <div className="login-btn flex gap-5">
                <img className='w-12 rounded-full cursor-pointer' src={`${user ? user.photoURL : userimg}`} alt="user" title= {user ? user.displayName : 'guest'} />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary text-white'>Log Out</button> :  <Link to='login' className='btn btn-primary px-10 text-white'  >Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Header;