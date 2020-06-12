import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./container/home/Home";
import NotFound from "./container/NotFound/NotFound";
import Login from "./container/login/Login";
import Signup from "./container/signup/Signup";
import CardPage from "./container/cardpage/CardPage";
import Product from "./container/product/Product";
import Compare from './container/compare/Compare';
import {useSelector} from 'react-redux';

function App() {

  const auth = useSelector(state => state.auth);

  return (
    <div>
    {auth.auth?
      <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home}/>
        <Route path="/cardpage/:line" exact component={CardPage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/compare" exact component={Compare} />
        <Route path="/product/:productId" exact component={Product} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    </div>
    :
    <Switch>
      <Route path="/signup" exact component={Signup} />
      <Route path="/" exact component={Login} />
    </Switch>}
    </div>
    );
    
}

export default App;