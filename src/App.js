import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import LogIn from './Component/LogIn/LogIn';
import Booking from './Component/Booking/Booking';
import FakeData from './FakeData/FakeData';
import HotelDetails from './Component/HotelDetails/HotelDetails';
import PrivetRoute from './Component/PrivateRoute/PrivateRoute';


export const AllContext = createContext()

function App() {
  const [exactLocation, setExactLocation] = useState(FakeData[0])
  const [loginUser, setLoginUser] = useState({
    photoURL:'',
    displayName:'',
    email: ""
  })
  return (
    <AllContext.Provider value={[exactLocation, setExactLocation, loginUser, setLoginUser]}>
      <Router >
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <PrivetRoute path="/hotelDetails">
            <HotelDetails></HotelDetails>
          </PrivetRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AllContext.Provider>
  );
}

export default App;
