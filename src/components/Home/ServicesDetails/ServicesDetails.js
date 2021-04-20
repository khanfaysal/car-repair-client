import React, { useState } from "react";
import { Link } from "react-router-dom";
// import CarEngine from '../../../images/car-cleaning.jpg';

const ServicesDetails = ({ service }) => {
  const [logInUser, setLogInUser] = useState({});
  const handleBooking = () =>{
    const SpecificOrder = {...logInUser};
    fetch('http://localhost:5055/')

  }
  return (
          <div className="col-md-4">
            <div className="card shadow-sm p-2 mb-4 bg-body rounded" style={{ width: "18rem" }}>
              <img src={service.imageUpload} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h6 className="card-title">{service.serviceTitle}</h6>
                <h4 className="card-title text-danger">${service.price}</h4>
                <p className="card-text">{service.textArea}</p>
                <Link to="/order"><button onClick={handleBooking} className="brand-btn">Order Service</button></Link>
              </div>
            </div>
       </div>
  );
};

export default ServicesDetails;
