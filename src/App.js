import logo from './logo.svg';
import './App.css';
import React from "react";
import {  Switch,   Route,  Link, NavLink,useParams } from "react-router-dom";
import { useState } from 'react';
import RouteProduct from './components/RouteProduct'
import Cart from './components/Cart';




function App() {



  return (
    <div className="App">

    <Cart />


    < NavLink to="/RouteProduct">Product</NavLink>
     <Route path="/RouteProduct/:id">
       <RouteProduct />
     </Route>
    </div>
  );
}

export default App;
