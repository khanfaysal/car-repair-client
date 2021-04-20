import React from "react";

const ServiceOrderDetails = ({ order }) => {
  const { image, description, orderName, status } = order;
  return (
    <div className="col-md-4">
        <div class="card shadow p-3 mb-5 bg-body rounded">
            <div className="d-flex mt-3 px-2">
                <div>
                    <img
                    className="img-fluid  p-2"
                    src={image}
                    class="card-img-top"
                    alt=" "
                    />
                </div>
                <div className="ms-3 pt-4">
                    <h5 class="card-text ">{orderName}</h5>
                    <p class="card-text">
                    <small class="text-muted">{status}</small>
                    </p>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text fs-5">{description}</p>
            </div>
        </div>
    </div>
  );
};

export default ServiceOrderDetails;
