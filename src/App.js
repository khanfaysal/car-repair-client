import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import DashBoard from "./components/DashBoard/DashBoard";
import Login from './components/Login/Login';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import AddServices from './components/DashBoard/AddServices/AddServices';
// import ServicesDetails from "./components/Home/ServicesDetails/ServicesDetails";
import MakeAdmin from "./components/DashBoard/MakeAdmin/MakeAdmin";
import OrderProcess from "./components/DashBoard/OrderProcess/OrderProcess";
import OrderListAdmin from "./components/DashBoard/OrderListAdmin/OrderListAdmin";
import ManageService from "./components/DashBoard/ManageService/ManageService";
import Review from './components/DashBoard/Review/Review';


export const UserContext = createContext()

function App() {
  const [logInUser, setLogInUser] = useState({});
  const [userOrder, setUserOrder] = useState({});
  return (
    <UserContext.Provider  value = {[logInUser, setLogInUser]}>
     <Router>
      <Switch>
        <Route exact path="/">
          <Home userOrder={userOrder} setUserOrder={setUserOrder}></Home>
        </Route>

        <Route exact path="/home">
          <Home userOrder={userOrder} setUserOrder={setUserOrder}></Home>
        </Route>

        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>

        <Route path="/addservices">
          <AddServices></AddServices>
        </Route>

        <Route path="/orderlist">
          <OrderListAdmin></OrderListAdmin>
        </Route>

        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>

        <Route path="/manageservice">
          <ManageService></ManageService>
        </Route>

        <Route path="/order">
          <OrderProcess userOrder={userOrder} setUserOrder={setUserOrder}></OrderProcess>
        </Route>

       

        <Route path="/review">
          <Review></Review>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        
        <Route path="*">
          <Login></Login>
        </Route>

        {/* check router */}
        
      </Switch>
    </Router> 
    </UserContext.Provider>
    
  );
}

export default App;
