import React from 'react';
import BannerImage from '../../../images/banner-img 1.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className=" header-main row mt-5">
            <div className="col-md-5 offset-md-1 mt-5">
                <h1 className="">car repair services & <br /> auto machine</h1>
                <p className="text-dark py-3">If your engine is sick or tired we have the equipment to check,<br /> diagnose and efficiently fix any problem you may have.</p>
                <a href="#all-service"><button className="brand-btn">get service</button></a>
            </div>
            <div className="col-md-6 mt-5">
                <img src={BannerImage} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;