import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import SignUp from './pages/Sign/SignUp';
import SignIn from './pages/Sign/SignIn';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Redirect from './pages/RedirectPage/Redirect';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/productdetail/" component={ProductDetail} />
        <Route exact path="/list" component={ProductList} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/redirect" component={Redirect} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
