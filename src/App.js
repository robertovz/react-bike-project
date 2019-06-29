import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollUpButton from 'react-scroll-up-button';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import ModalFilter from './components/ModalFilter';
import ModalList from './components/ModalList';
import Footer from './components/Footer';
import About from './components/Pages/About';
import ProductContainer from './components/Pages/ProductContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductContainer} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route component={Default} />
        </Switch>
        <ScrollUpButton />
        <Modal />
        <ModalFilter />
        <ModalList />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
