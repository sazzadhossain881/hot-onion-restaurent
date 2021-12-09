import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import SingleItemDetails from './Components/SingleItemDetails/SingleItemDetails';
import Checkout from './Components/Checkout/Checkout';
import { connect } from 'react-redux';
import { authCheck } from './Components/redux/authActionCreators';
import { Component } from 'react';
import Menu from './Components/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/item/:itemKey">
            <SingleItemDetails></SingleItemDetails>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route exact path="/">
            <Menu></Menu>
          </Route>
          <Redirect to="/">
            <Menu></Menu>
          </Redirect>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
