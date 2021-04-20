import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const AllServices = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/userfeedback')
        .then(res => res.json())
        .then(data =>setFeedbacks(data))
    },[])

    return (
        <section className ="section-margin-top">
        <div className="container ">  
           <div className="mb-5">
                <div className="col-md-12 text-center">
                    <p className="brand-txt text-capitalize">our testimonial</p>
                    <h4 className="brand-heading text-capitalize">client reviews</h4>
                </div>
           </div>
            <div className="row">
               {
                   feedbacks.map(feedback =><TestimonialDetails feedback={feedback}></TestimonialDetails>)
               }
            </div>
        </div>
    </section>
    );
};

export default AllServices;