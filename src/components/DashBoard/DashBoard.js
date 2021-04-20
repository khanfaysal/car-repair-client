import React from 'react';
import SideBar from './SideBar/SideBar';
// import User from '../../images/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBars } from '@fortawesome/free-solid-svg-icons';
import './DashBoard.css';


const DashBoard = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar></SideBar>
                    </div>
                       {/* <div className="main-content">
                           <header> 
                              <h2>
                              <label for ="">
                                   <span className="fa fa-bars"><FontAwesomeIcon icon={faBars} className="fa fa-order-list" /></span>
                               </label>
                               Dashboard
                              </h2>
                              <div className="user-wrapper">
                                  <img src={User} alt=""/>
                                  <div>
                                      <h4>Admend jr.</h4>
                                      <small>Admin</small>
                                  </div>
                              </div>
                           </header>
                          
                       </div> */}
                </div>
            </div>
        </section>
    );
};

export default DashBoard;