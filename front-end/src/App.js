import React from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MyRequests from './pages/MyRequests';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      {/* <Route path="/"  { <Redirect to="/login" />}  /> */}
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/my_requests" component={ MyRequests } />
    </Switch>
  );
}

export default App;
