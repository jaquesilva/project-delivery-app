import React from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from './context/Provider';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SellersOrders from './pages/SellersOrders';
import AdminPage from './pages/AdminPage';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function App() {
  return (
    <Provider>
      <Switch>
        {/* <Route path="/"  { <Redirect to="/login" />}  /> */}
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/checkout" component={ CustomerCheckout } />
        <Route exact path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route exact path="/seller/orders" component={ SellersOrders } />
        <Route exact path="/admin/manage" component={ AdminPage } />
        {/* <Route exact path="/customer/orders/:saleId" component={ SaleDetails } /> */}
      </Switch>
    </Provider>
  );
}

export default App;
