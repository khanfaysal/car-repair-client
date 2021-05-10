import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceOrderDetails from '../ServiceOrderDetails/ServiceOrderDetails';
import SideBar from '../SideBar/SideBar';


const ServiceOrder = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [specificOrder, setSpecificOrder] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-sea-95605.herokuapp.com/specificOrders?email='+logInUser.email)
        .then(res => res.json())
        .then(data =>setSpecificOrder(data))
    },[logInUser.email])

    return (
        <section className ="section-margin-top">
        <div className="container "> 
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <h4 className="brand-txt mt-5">Order List</h4>
                    <div class="row">
                    {
                        specificOrder.map(order =><ServiceOrderDetails order={order} key={order._id}></ServiceOrderDetails>)
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceOrder;