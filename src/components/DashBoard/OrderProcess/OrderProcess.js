import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PaymentProcess from '../PymentProcess/PaymentProcess';
import SideBar from '../SideBar/SideBar';
import CreditCard from '../../../images/credit-card.png';
import PayPal from '../../../images/paypal.png';
// import SplitForm from '../SplitForm/SplitForm';
import './OrderProcess.css';
import { UserContext } from '../../../App';

const OrderProcess = ({ userOrder, setUserOrder }) => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { orderName } = userOrder;

    const onSubmit = async data => {
        await handleClick(data);
        console.log(data);
        console.log(userOrder);

        fetch("https://car-repair-server-kappa.vercel.app/addOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(success => {
                alert('successfully submitted');
            })
    };

    const handleClick = async data => {
        const newOrder = { ...userOrder }
        newOrder.name = logInUser.displayName || data.name;
        newOrder.email = logInUser.email || data.email;
        newOrder.orderName = userOrder.orderName || data.serviceTitle;
        await setUserOrder(newOrder);
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-10 mt-5">
                        <h4 className="brand-txt mt-5">Book Service</h4>
                        <div>
                            <form className="buyProcess-form row" onSubmit={handleSubmit(onSubmit)}>
                                <input name='name' disabled defaultValue={logInUser.displayName} {...register("name", { required: false })} placeholder="Enter Name" />
                                {errors.serviceTitle && <p className="error">Title is required</p>}<br />

                                <input name='email' disabled defaultValue={logInUser.email} {...register("email", { required: false })} placeholder="Enter E-mail" />
                                {errors.serviceTitle && <p className="error">Title is required</p>}<br />

                                <input name='serviceTitle' disabled defaultValue={orderName} {...register("serviceTitle", { required: false })} placeholder="Enter Service Title" />
                                {errors.serviceTitle && <p className="error">Title is required</p>}<br />
                                <input type="submit" onClick={handleClick} className="fw-bold text-white text-uppercase" />
                            </form>
                        </div>
                        <div>
                            <p className="tex-danger pt-4">Pay with</p>
                            <div className="d-flex pb-4">
                                <div class="form-check d-flex  px-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <img className="img-fluid" style={{ width: "30px", height: "30px" }} src={CreditCard} alt="" />
                                    </label>
                                </div>
                                <div class="form-check d-flex">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <img className="img-fluid" style={{ width: "30px", height: "30px" }} src={PayPal} alt="" />
                                    </label> &nbsp; &nbsp;
                                </div>
                                <p>Your Service Charge Will be ${userOrder.price}</p>
                            </div>
                            <PaymentProcess></PaymentProcess>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderProcess;