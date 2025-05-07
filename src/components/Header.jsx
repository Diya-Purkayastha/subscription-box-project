import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import userimage from '../assets/icons8-user-icon-100.png'

const Header = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
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
        <div className='bg-primary'>
            <div className="navbar w-11/12 mx-auto shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to='/'> Home</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                            <NavLink to='/login'>Login</NavLink>
                            {
                                user && <NavLink to='/myprofile'>My Profile</NavLink>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><div className="md:text-3xl text-white font-medium"><h1>SubS.<span className='text-secondary'>boX</span></h1></div></a>
                </div>
                <div className="navbar-center text-white  hidden lg:flex ">
                    <ul className="menu menu-horizontal flex gap-4 text-[16px] px-1">
                        <NavLink to='/'> Home</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                        {
                            user && <NavLink to='/myprofile'>My Profile</NavLink>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="login-btn md:flex md:gap-5">
                        <img className='w-12 hidden md:block rounded-full cursor-pointer' src={`${user ? user.photoURL : userimage}`} alt="user" title={user ? user.displayName : 'guest'} />
                        {
                            user ? <button onClick={handleLogout} className='btn btn-secondary text-primary'>Log Out</button> : <Link to='login' className='btn btn-secondary md:px-10 text-primary'  >Login</Link>
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Header;