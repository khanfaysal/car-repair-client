import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://thawing-sea-95605.herokuapp.com/servicebook")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  const specificDeleteBook = (id) => {
    console.log(id);
    fetch("https://thawing-sea-95605.herokuapp.com/deleteService/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("deleted successfully", data));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <SideBar></SideBar>
        </div>
        <div className="col-md-10 col-sm-10">
          <h2 className="text-danger fw-bold fs-3">Mange Service</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-danger">
                  Service Name
                </th>
                <th scope="col">Price</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.length === 0 && (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {services.map((info) => {
                const { serviceTitle, price, _id } = info;
                return (
                  <tr key={_id}>
                    <th>{serviceTitle}</th>
                    <td>{price}</td>
                    <td>
                      <button onClick={() => specificDeleteBook(_id)}>
                        <FontAwesomeIcon
                          style={{ border: "none" }}
                          icon={faTrashAlt}
                          color="#eb4d4b"
                        />
                      </button>
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
