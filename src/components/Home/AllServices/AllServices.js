import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const AllServices = ({userOrder, setUserOrder}) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-sea-95605.herokuapp.com/servicebook')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])

    return (
        <section>
        <div className="container">  
           <div className="mb-5">
                <div className="col-md-12 text-center">
                    <p className="brand-txt text-capitalize">our offer</p>
                    <h4 className="brand-heading text-capitalize">Quality service</h4>
                </div>
           </div>
            <div className="row">
               {
                    services.map(service =><ServicesDetails
                        service={service}
                        userOrder={userOrder}
                        setUserOrder={setUserOrder}
                    ></ServicesDetails>)
               }
            </div>
        </div>
    </section>
    );
};

export default AllServices;