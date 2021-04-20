import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const servicebookData = {
            serviceTitle: data.serviceTitle,
            imageUpload: imageURL,
            price:data.price,
            textArea: data.textArea
        };
        const url = `http://localhost:5055/addServiceInfo`;
        console.log(servicebookData);
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(servicebookData)
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
                      <h4 className="brand-txt mt-5">Add service</h4>
                        <form className="addService-form"onSubmit={handleSubmit(onSubmit)}>
                            <input name='serviceTitle' {...register("serviceTitle", { required: true })} placeholder="Enter Title"/>
                            {errors.serviceTitle && <p className="error">Title is required</p>}&nbsp;&nbsp;
                                
                            <input name='imageUpload'  type='file'  {...register("imageUpload", { required: true })}  onChange = {handleImageUpload}  placeholder="Upload image" />
                            {errors.imageUpload && <p className="error">imageUpload is required</p>}

                            <input name='price'{...register("price", { required: true })}  placeholder="Service Price" />
                            {errors.price && <p className="error">price is required</p>}
                            
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

export default AddServices;