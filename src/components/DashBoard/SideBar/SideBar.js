import React, { useContext } from 'react';
// import DashboardLogo from '../../../images/dashboard logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl,faPlus,faUserCog,faThLarge,faCartPlus,faCommentDots, faTools,faHome} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const SideBar = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <section className = "sidebar-section">
            <div className="container">
                <div className="sidebar">
                    <div className="sidebar-brand">
                        <h2><span><FontAwesomeIcon icon={faTools} /></span>AMEND</h2>
                    </div>
                    <div className="user-wrapper px-3 pb-4">
                      <img className="img-fluid avatar rounded-circle w-25" src={logInUser.photoURL} alt=""/>
                        <div className="px-3">
                            <h6 className="text-white pt-2">{logInUser.displayName }</h6>
                            <small className="text-white">Admin</small>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <Link className="active" to ="/orderlist"><FontAwesomeIcon icon={faListUl} className="fa fa-order-list" />&nbsp;&nbsp;<span>Order List</span></Link>
                            </li>
                            <li>
                                <Link to ="/addservices"><FontAwesomeIcon icon={faPlus} className="fa fa-add-service" color="#d81324"/>&nbsp;&nbsp;<span>Add Service</span></Link>
                            </li>
                            <li>
                                <Link to ="/makeadmin"><FontAwesomeIcon icon={faUserCog} className="fa fa-make-admin" color="#d81324" />&nbsp;&nbsp;<span>Make Admin</span></Link>
                            </li>
                            <li>
                                <Link to ="/manageservice"><FontAwesomeIcon icon={faThLarge} className="fa fa-manage-service" color="#d81324" />&nbsp;&nbsp;<span>Manage Service</span></Link>
                            </li>
                            <li>
                                <Link to ="/order"><FontAwesomeIcon icon={faCartPlus} className="fa fa-order" color="#d81324"/>&nbsp;&nbsp;<span>Order</span></Link>
                            </li>
                            <li>
                                <Link to ="/sidebar"><FontAwesomeIcon icon={faListUl} className="fa fa-userOrder-list" color="#d81324" />&nbsp;&nbsp;<span>Order List</span></Link>
                            </li>
                            <li>
                                <Link to ="/review"><FontAwesomeIcon icon={faCommentDots} className="fa fa-review" color="#d81324" />&nbsp;&nbsp;<span>Review</span></Link>
                            </li>
                            <li>
                                <Link to ="/home"><FontAwesomeIcon icon={faHome} className="fa fa-review" color="#d81324" />&nbsp;&nbsp;<span>Back Home<span className="fa fa-home"></span></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SideBar;