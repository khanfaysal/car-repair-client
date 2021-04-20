import React from 'react';
import AllServices from '../AllServices/AllServices';
import CustomerCounter from '../CustomerCounter/CustomerCounter';
import CustomerForm from '../CustomerForm/CustomerForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import ServicesDetails from '../ServicesDetails/ServicesDetails';
import Testimonials from '../Testimonials/Testimonials';

const Home = ({userOrder, setUserOrder}) => {
    return (
        <div>
            <Header></Header>
            <CustomerCounter></CustomerCounter>
            <AllServices userOrder={userOrder} setUserOrder={setUserOrder}></AllServices>
            {/* <ServicesDetails></ServicesDetails> */}
            <Testimonials></Testimonials>
            <CustomerForm></CustomerForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;