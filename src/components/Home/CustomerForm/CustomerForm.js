import React from 'react';
import { useForm } from "react-hook-form";
import './CustomerForm.css';

const CustomerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="customer-form section-margin-top">
         <div className="container">
             <div className="row">
                 <div className="col-md-12 text-center">
                 <p className="brand-txt text-capitalize">Put information</p>
                    <h4 className="brand-heading text-capitalize">Booking for repair</h4>
                 </div>
             </div>
         <div className="row ">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <form className="customer-form"onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div >
                                <input name='firstName' {...register("firstName", { required: true })} placeholder="First Name"/>
                                {errors.firstName && <p className="error">First name is required</p>}&nbsp;&nbsp;

                                <input  name='lastName'  {...register("lastName", { required: true })}  placeholder="Last Name" />
                                {errors.lastName && <p className="error">Last name name is required</p>}
                            </div>

                            <div>
                                <input  name='email' {...register("email", { required: true })}  placeholder="Email Address" />
                                {errors.email && <p className="error">Email is required</p>}&nbsp;&nbsp;

                                <input  name='phoneNumber' {...register("phoneNumber", { required: true })}  placeholder="Phone Number" />
                                {errors.phoneNumber && <p className="error">Phone number is required</p>}
                            </div>
                        </div>
                        <textarea  name='textArea' {...register("textArea", { required: true })}  placeholder="Your Message"  />
                        {errors.textArea && <p className="error">comment is required</p>}
                        <input type="submit" className="fw-bold text-white text-uppercase" />
                    </form> 
                </div>
            </div>
         </div>
        </section>
    );
};

export default CustomerForm;