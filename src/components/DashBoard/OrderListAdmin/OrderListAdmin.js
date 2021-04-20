import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';

const ManageService = () => {
    const [orderServices, setOrderServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/orders')
        .then(res => res.json())
        .then(data =>setOrderServices(data))
    },[orderServices]);
    return (
        <div className = "container mt-5">
             <div className = "row">
             <div className = "col-md-2 col-sm-2">
                <SideBar></SideBar>
             </div>
                <div className = "col-md-10 col-sm-10">
                    <h2 className = "text-danger fw-bold fs-3">Order List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-danger">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                    orderServices.length === 0 && <div class="d-flex justify-content-center">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                            }
                            {
                             orderServices.map(orderInfo => {
                                    const {name, email,serviceTitle ,_id} = orderInfo;
                                    return (
                                        <tr key={_id}>
                                            <th>{name}</th>
                                            <td>{email}</td>
                                            <td>{serviceTitle}</td>
                                            <td>Credit Card</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    );
};

export default ManageService;