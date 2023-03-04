import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SideBar from "../SideBar/SideBar";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      adminEmail: data.email,
    };
    const serverURL = "https://car-repair-server-kappa.vercel.app/addAdmin";
    fetch(serverURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => {
      console.log("server side response:", res);
    });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <SideBar></SideBar>
          </div>
          <div className="col-md-10 mt-5">
            <h4 className="brand-txt mt-5">Make Admin</h4>
            <form className="makeadmin-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter E-mail"
              />
              <input
                type="submit"
                className="fw-bold text-white text-uppercase"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
