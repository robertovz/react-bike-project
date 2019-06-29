import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container text-center d-none d-lg-block mt-5">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase cart-column">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase cart-column">name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase cart-column">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase cart-column">quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase cart-column">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase cart-column">total</p>
                    </div>
                    <div className="divider"></div>
                </div>
            </div>
        )
    }
}
