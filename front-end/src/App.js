import React from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
// import { Provider } from './context/Provider';

function App() {
  return (
    <Switch>
      {/* <Route path="/"  { <Redirect to="/login" />}  /> */}
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/checkout" component={ CustomerCheckout } />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
    </Switch>
  );
}

export default App;
