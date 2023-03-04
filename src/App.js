import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import DashBoard from "./components/DashBoard/DashBoard";
import Login from './components/Login/Login';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import AddServices from './components/DashBoard/AddServices/AddServices';
import MakeAdmin from "./components/DashBoard/MakeAdmin/MakeAdmin";
import OrderProcess from "./components/DashBoard/OrderProcess/OrderProcess";
import OrderListAdmin from "./components/DashBoard/OrderListAdmin/OrderListAdmin";
import ManageService from "./components/DashBoard/ManageService/ManageService";
import Review from './components/DashBoard/Review/Review';
import ServiceOrder from "./components/DashBoard/ServiceOrder/ServiceOrder";


export const UserContext = createContext()
function App() {
  const [logInUser, setLogInUser] = useState({});
  const [userOrder, setUserOrder] = useState({});

  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const rawEmail = logInUser.email;
    if (!rawEmail) return;
    fetch('https://car-repair-server-kappa.vercel.app/admin?email=' + rawEmail)
      .then(res => res.json())
      .then(data => setAdminData(data))
  }, [logInUser.email]);
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home userOrder={userOrder} setUserOrder={setUserOrder}></Home>
          </Route>

          <Route path="/home">
            <Home userOrder={userOrder} setUserOrder={setUserOrder}></Home>
          </Route>

          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

          {
            adminData && (
              <Route path="/addservices">
                <AddServices></AddServices>
              </Route>
            )
          }

          {
            adminData && (
              <Route path="/orderlist">
                <OrderListAdmin></OrderListAdmin>
              </Route>
            )
          }

          {
            adminData && (
              <Route path="/makeadmin">
                <MakeAdmin></MakeAdmin>
              </Route>
            )
          }

          {
            adminData && (
              <Route path="/manageservice">
                <ManageService></ManageService>
              </Route>
            )
          }

          <PrivateRoute path="/order">
            <OrderProcess userOrder={userOrder} setUserOrder={setUserOrder}></OrderProcess>
          </PrivateRoute>

          <Route path="/customerorder">
            <ServiceOrder></ServiceOrder>
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
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
