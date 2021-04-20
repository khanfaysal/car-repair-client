import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const ManageService = () => {
  const [orderServices, setOrderServices] = useState([]);
  useEffect(() => {
    fetch("https://thawing-sea-95605.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrderServices(data));
  }, [setOrderServices, orderServices]);

  const updateService = (id, status) => {
    console.log(id, status);
    const order = { id, status };
    fetch("https://thawing-sea-95605.herokuapp.com/updateOrder/" + id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log("updated:", data));
  };

  const handleStatusChange = async (e) => {
    console.log(e.target.id, e.target.value);
    // Load Product
    await fetch(`https://thawing-sea-95605.herokuapp.com/order/${e.target.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    updateService(e.target.id, e.target.value);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <SideBar></SideBar>
        </div>
        <div className="col-md-10 col-sm-10">
          <h2 className="text-danger fw-bold fs-3">Order List</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-danger">
                  Name
                </th>
                <th scope="col">Email</th>
                <th scope="col">Service</th>
                <th scope="col">Pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderServices.length === 0 && (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {orderServices.map((orderInfo) => {
                const { name, email, orderName, _id, status } = orderInfo;
                return (
                  <tr key={_id}>
                    <th>{name}</th>
                    <td>{email}</td>
                    <td>{orderName}</td>
                    <td>Credit Card</td>
                    <td>
                      <select
                        id={_id}
                        className="form-control"
                        onChange={handleStatusChange}
                      >
                        {status === "Pending" ? (
                          <option
                            defaultValue="Pending"
                            className="text-danger"
                            selected
                          >
                            Pending
                          </option>
                        ) : (
                          <option defaultValue="Pending">Pending</option>
                        )}
                        {status === "On Going" ? (
                          <option
                            defaultValue="On Going"
                            className="text-danger"
                            selected
                          >
                            On Going
                          </option>
                        ) : (
                          <option defaultValue="On Going">On Going</option>
                        )}
                        {status === "Done" ? (
                          <option
                            defaultValue="Done"
                            className="text-danger"
                            selected
                          >
                            Done
                          </option>
                        ) : (
                          <option defaultValue="Done">Done</option>
                        )}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
