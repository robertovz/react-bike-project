import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import ProductList from '../Products/ProductList';
import ProductFilter from '../Products/ProductFilter';;

export default class ProductContainer extends Component {
    render() {
        return (
            <Productsw>
                <div className="breadcrumbs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="text-center text-uppercase mx-auto p-3">
                                    <li>
                                        <Link to="/">Home </Link><span><i className="fas fa-angle-right mx-1"></i></span>
                                    </li>
                                    <li className="active">
                                        product
                            </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductConsumer>
                    {value => {
                        const { title, category } = value;
                        return <h1 className="text-center my-5">{ category !== "" ?  category  : title }</h1>
                    }}
                </ProductConsumer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <ProductFilter />
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </Productsw>
        )
    }
}

const Productsw = styled.div`
    background: #f2f3f7;
`