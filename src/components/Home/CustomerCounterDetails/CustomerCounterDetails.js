import React from 'react';
import CountUp from 'react-countup';

const CustomerCounterDetails = props => {
    const {label, number} = props.count;
    return (
        <div className="col-md-4">
            <div className="happy-customer ">
            <h1 className="text-danger fw-bold">
                <CountUp
                    start={0}
                    duration={14}
                    delay={2}
                    end={number}
                />
            </h1>
            <h5 className="text-capitalize">{label}</h5>
          </div>
        </div>
    );
};

export default CustomerCounterDetails;