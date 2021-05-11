import React from 'react';
import CarEngine from '../../../images/car-engine.png';
import CustomerCounterDetails from '../CustomerCounterDetails/CustomerCounterDetails';
import './CustomerCounter.css';

const CustomerCounter = () => {
    const Counts = [
        {
            id: "1",
            label: "Happy Customers",
            number: "500",
        },
        {
            id: "2",
            label: "Total Service",
            number: "85",
        }
    ]
    return (
        <section className="customer-counter section-margin-top container">
            <div className="row ">
                <div className="col-md-6">
                    <img className="img-fluid" src={CarEngine} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="counter-content">
                        <p className="brand-txt">why choose us</p>
                        <h4 className="brand-heading">let us handle your car <span style={{color:"#d81324"}}>professionally</span>.</h4>
                        <p className="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus esse repellendus nesciunt earum obcaecati ad exercitationem quas recusandae a.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="row">
                        {
                            Counts.map(count =><CustomerCounterDetails count={count}></CustomerCounterDetails>)
                        }
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default CustomerCounter;