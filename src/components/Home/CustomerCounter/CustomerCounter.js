import React from 'react';
import CarEngine from '../../../images/car-engine.png';
import './CustomerCounter.css';

const CustomerCounter = () => {
    return (
        <section className="customer-counter section-margin-top container">
            <div className="row ">
                <div className="col-md-6">
                    <img src={CarEngine} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="counter-content">
                        <p className="brand-txt">why choose us</p>
                        <h4 className="brand-heading">let us handle your car <span style={{color:"#d81324"}}>professionally</span>.</h4>
                        <p className="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus esse repellendus nesciunt earum obcaecati ad exercitationem quas recusandae a.</p>
                    </div>
                    <div className="counter-counter d-flex pt-3">
                        <div className="happy-customer ">
                            <h1 className="text-danger fw-bold">500+</h1>
                            <h5 className="text-capitalize ">happy customer</h5>
                        </div>
                        <div className="total-service px-5">
                            <h1 className="text-danger fw-bold">85+</h1>
                            <h5 className="text-capitalize">total service</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerCounter;