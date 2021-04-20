import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
import './Review.css';


const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const userFeedbackInfo = {
            username: data.username,
            imageURL: imageURL,
            designation: data.designation,
            textArea: data.textArea
            // serviceTitle: data.serviceTitle,
            // imageUpload: imageURL,
            // price:data.price,
            // textArea: data.textArea
        };
        const url = `http://localhost:5055/userFeedbackInfo`;
        console.log(userFeedbackInfo);
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userFeedbackInfo)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
         imageData.set('key', 'defc38c8221f60aa89f0ade96a2e8342');
         imageData.append('image', event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload',imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                // setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                
            });
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-10 mt-5">
                      <h4 className="brand-txt mt-5">Review</h4>
                        <form className="userFeedback-form"onSubmit={handleSubmit(onSubmit)}>
                            <input name='username' {...register("username", { required: true })} placeholder="Your Name"/>
                            {errors.username && <p className="error">username is required</p>}<br />

                            <input name='designation' {...register("designation", { required: true })} placeholder="Company,s Designation"/>
                            {errors.designation && <p className="error">designation is required</p>}<br />
                                
                            <input name='imageURL'  type='file'  {...register("imageURL", { required: true })}  onChange = {handleImageUpload}  placeholder="Upload image" />
                            {errors.imageURL && <p className="error">imageUpload is required</p>}<br />
                            
                            <textarea  name='textArea' {...register("textArea", { required: true })}  placeholder="Enter Description" />
                            {errors.textArea && <p className="error">comment is required</p>}
                            <input type="submit" className="fw-bold text-white text-uppercase" />
                        </form> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;