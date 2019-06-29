import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class NewProducts extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            autoplay: true,
            pauseOnHover: true,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        initialSlide: 1,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        initialSlide: 1,
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <NewProduct>
                <div className="container">
                    <div className="row">
                        <h5 className="font-weight-bold text-uppercase title-featured">New Products</h5>
                    </div>
                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                const { newProducts: products, handleDetail, addToCart, addToCompare, openModal, openListModal, compare } = value;
                                return (
                                    <SliderWrapper className="col-12 mx-auto">
                                        <Slider {...settings}> {(products.map(product => {
                                            return (
                                                <div key={product.id} className="">
                                                    <div className="card">
                                                        {product.newest === true ? <div className="product-label">new</div> : ""}
                                                        {product.offer !== 0 ? <div className="offer">{product.offer}% off</div> : ""}
                                                        <Link to="/details">
                                                            <div className="img-container p-1 mt-1" onClick={() => { handleDetail(product.id) }} >
                                                                <img src={product.img} alt={product.title} className="card-img-top" />
                                                            </div>
                                                        </Link>
                                                        <div className="card-body">
                                                            <p className="mb-0 title d-inline-block">{product.title}</p>
                                                            <div className="py-2 pb-2">
                                                                {product.offer !== 0 ? <span className="old-price text-muted mr-2">${product.oldPrice}</span> : null}
                                                                <span className="price font-weight-bold"><span>$</span>{(product.price).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</span>
                                                            </div>
                                                            <div className="card-buttons">
                                                                <button type="button" className="btn cart-btn btn-primary" disabled={product.inCart ? true : false}
                                                                    onClick={() => { addToCart(product.id); openModal(product.id); }} >
                                                                    {product.inCart ? (<p className="text-capitalize in-cart-btn" disabled>{" "}in Cart</p>) :
                                                                        (<p><i className="fas fa-shopping-cart" />{" "}</p>)}
                                                                </button>
                                                                <Link to="/details" className="btn compare-btn btn-primary" onClick={() => value.handleDetail(product.id)} title="Search">
                                                                    <i className="fas fa-search"></i>
                                                                </Link>
                                                                <button type="button" className="btn compare-btn btn-primary" placeholder="Compare"
                                                                    disabled={product.inCompare ? true : false}
                                                                    onClick={() => { if (compare.length < 5){ addToCompare(product.id);openListModal() } openListModal(); }} >
                                                                    {product.inCompare ? (<p className="text-capitalize" disabled>{" "}<i className="fas fa-check" /></p>) :
                                                                        (<p>{" "}<i className="fas fa-sort-amount-up" /></p>)}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>)
                                        }))}
                                        </Slider>
                                    </SliderWrapper>
                                )
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </NewProduct>
        )
    }
}
const SliderWrapper = styled.div`
    .slick-prev {
        z-index: 1;
        background: #000;
    }
    .slick-next, .slick-prev {
        border-radius: 0;
        text-align: center;
        font-size: 25px;
        padding: 0;
        transition: .3s ease;
        width: 32px;
        height: 33px;
        background: none;
    }
    .slick-prev {
        left: -31px;
    }
    .slick-prev:before, .slick-next:before {
        font-size: 40px;
        color: #000;
        line-height: 0;
    }
    .slick-prev:before {
    }
    .slick-dots li button:before{
        font-size: 15px;
    }
    .slick-dots {
        bottom: 15px;
    }
`
const NewProduct = styled.div`
    color: #333;
    padding: 2.1rem;
    .title-featured {
        padding: 5px 30px;
        border-radius: 5px;
        z-index: 10;
    }
`