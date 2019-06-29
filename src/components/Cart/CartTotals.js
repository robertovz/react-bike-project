import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right mb-5">
                        <Link to="/">
                            <button className="btn btn-outline-primary text-uppercase mb-3">continue shopping</button>
                        </Link>
                        <Link to="/">
                            <button type="button"
                                className="btn btn-outline-danger text-uppercase mb-3 mx-3"
                                onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="mx-3">subtotal: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="mx-3">tax: </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="mx-3">total: </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
