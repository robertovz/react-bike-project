import React, { Component } from 'react'
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        return (
            <section>
            <div className="breadcrumbs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="text-center text-uppercase mx-auto p-3">
                                <li>
                                    <Link to="/">Home </Link><span><i className="fas fa-angle-right mx-1"></i></span>
                                </li>
                                <li>
                                    <Link to="/products">Products </Link><span><i className="fas fa-angle-right mx-1"></i></span>
                                </li>
                                <li className="active">
                                    cart
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}