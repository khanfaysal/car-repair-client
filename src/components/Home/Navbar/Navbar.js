/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logo2.png';

const Navbar = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#"><img src={Logo} alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link ms-4" aria-current="page" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/home">About us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/home">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/home">Contact</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/dashboard">Dashboard</Link>
                </li>
                <li class="nav-item"> 
                    <Link class="nav-link ms-5 " to="/login"><button type="button" class="brand-btn">Login</button></Link>
                </li>
                <li>
                    {logInUser.displayName ? (
                                    <h5 className='nav-link active text-center text-dark'>
                                        {logInUser.displayName && <img className = " avatar rounded-circle img-fluid width w-50 " src={logInUser.photoURL} alt = ""/>}
                                    </h5>
                            ) : (
                                    <Link to='/login' className='nav-link active text-white text-center'>
                                        Login
                                    </Link>
                            )}
                    </li>
           </ul>
         </div>
      </div>
    </nav>
    );
};

export default Navbar;