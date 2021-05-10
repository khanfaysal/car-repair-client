import React from "react";

const ServiceOrderDetails = ({ order }) => {
  const { image, description, orderName, status } = order;
  return (
    <div className="col-md-4">
      <div
        className="card shadow-sm p-2 mb-4 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <span class="badge rounded-pill bg-primary">{status}</span>
          <h3 className="card-title text-capitalize">{orderName}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrderDetails;
