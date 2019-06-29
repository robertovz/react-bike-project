import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Banner extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { showProduct } = value;
                    return (
                        <Banners>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="banner_inner-1 text-uppercase">
                                            <div className="banner-text">
                                                <span>get an extra</span>
                                                <strong>-10% off</strong>
                                                <p>Product name</p>
                                                <Link to="/products" className="btn btn-primary mt-2" name="10" id="offer"
                                                    onClick={showProduct}>Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner_inner-2 text-uppercase mx-auto">
                                            <div className="banner-text">
                                                <span>get an extra</span>
                                                <strong>-20% off</strong>
                                                <p>Product name</p>
                                                <Link to="/products" className="btn btn-primary mt-2" name="20" id="offer"
                                                    onClick={showProduct}>Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Banners>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const Banners = styled.div`
    padding: 2rem;
    img {
        margin: 20px;
        max-height: 310px;
        width: 100%;
        opacity: 0.4;
    }
    .banner_inner-1, .banner_inner-2 {
        color: #fff;
        height: calc(50vh - 50px);
        background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url("img/bike-banner-04.png") center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .banner_inner-2 {
        background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url("img/banner-05.png") center/cover no-repeat;
    }
    .banner-text {
        position: absolute;
        display: block;
        margin-left: 120px;
        span {
            display: block;
            font-size: 16px;
            line-height: 16px;
        }
        strong {
            font-size: 2rem;
        }
        p {
            font-size: 16px;
            line-height: 16px;
        }
        .btn {
            font-weight: 700;
            padding: 6px 20px;
            display: inline-block;
            backface-visibility: hidden;
            transform: translateZ(0);
            background-color: #3d9bef;
            color: #fff;
        }
    }
    @media screen and (max-width: 320px) {
        .banner-text {
            span, p {
                font-size: 12px;
            }
            strong {
                font-size: 20px;
            }
        }
    }
    @media screen and (max-width: 992px) {
        .banner-text {
            margin-left: 0px;
        }
    }

`