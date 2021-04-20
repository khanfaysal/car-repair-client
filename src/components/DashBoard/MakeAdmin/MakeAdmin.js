import React from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>
            <div className="container">
            <div className="row">
                    <div className="col-md-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-10 mt-5">
                    <h4 className="brand-txt mt-5">Make Admin</h4>
                    <form className="makeadmin-form"onSubmit={handleSubmit(onSubmit)}>
                        <input name='email' {...register("email", { required: true })} placeholder="Enter E-mail"/>
                        {errors.serviceTitle && <p className="error">Title is required</p>}<br />
                        <input type="submit" className="fw-bold text-white text-uppercase" />
                    </form> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;