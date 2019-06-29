import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context.js';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
export default class Product extends Component {
    render() {
        const { id, title, img, price, oldPrice, offer, rating, company, type, material, info, newest, inCart, inCompare } = this.props.product;
        
        return (
                <ProductConsumer>
                    {(value) => (
                    <ProductWrapper className={ value.grid ? "mx-auto col-md-6 col-lg-4" : "mx-auto col-md-12 col-lg-12"}>
                        <div className={value.grid ? "card-grid" : "card-list"} >
                            { newest === true ? <div className="product-label">new</div> : ""}
                            { offer !== 0 ? <div className="offer">{offer}% off</div> : ""}
                            <Link to="/details">
                                <div className="img-container p-2 mt-1" onClick={() => value.handleDetail(id)} >
                                    <img src={img} alt="product" className="card-img-top" />
                                </div>
                            </Link>
                            <div className="card-body">
                                <p className="mb-0 title-product">{title}</p>
                                <div className="py-2 pb-2">
                                    { offer !== 0 ? <span className="old-price text-muted mr-2">${oldPrice}</span> : null }
                                    <span className="price font-weight-bold"><span>$</span>{(price).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</span>

                                </div>
                                <p className={value.grid ? "d-none" : ""}>
                                    <Rating
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        fractions={2}
                                        initialRating={rating}
                                        readonly
                                    />
                                </p>
                                <div className={value.grid ? "d-none" : "description-product text-muted"}>
                                {info.length > 150 ? <div>{`${info.substring(0, 150)}...`}
                                <Link to="/details">
                                <span className="read-more mx-2" onClick={() => value.handleDetail(id)}>Read more</span>
                                </Link>
                                </div>: info }
                                </div>
                                <span className={value.grid ? "d-none" : "text-muted"}>{company}</span>
                                <span className={value.grid ? "d-none" : "mx-1 text-muted"}>· {type}</span>
                                <span className={value.grid ? "d-none" : "mx-1 text-muted"}>· {material}</span>
                            <div className="card-buttons">
                                <button type="button" className="btn cart-btn btn-primary" title="Add to cart" disabled={inCart ? true : false}
                                    onClick={() => { value.addToCart(id); value.openModal(id); }} >
                                    {inCart ? (<p className="text-capitalize in-cart-btn" disabled>{" "}in Cart</p>) :
                                        (<p className="font-weight-bold"><i className="fas fa-shopping-cart mx-1" />{ value.grid ? "" : 
                                        <span className="btn-content">Add to cart</span> }</p>)}
                                </button>
                                <Link to="/details" className="btn compare-btn btn-primary" onClick={() => value.handleDetail(id)} title="Search">
                                    <i className="fas fa-search"></i>
                                </Link>
                                <button type="button" className="btn compare-btn btn-primary" title="Compare"
                                disabled={inCompare ? true : false}
                                    onClick={() => { if ( value.compare.length < 5){  value.addToCompare(id); value.openListModal() } value.openListModal(); }} >
                                    {inCompare ? (<p className="text-capitalize" disabled>{" "}<i className="fas fa-check" /></p>) :
                                        (<p>{" "}<i className="fas fa-sort-amount-up" /></p>)}
                                </button>
                            </div>
                            </div>
                        </div>
                        </ProductWrapper>
                        )}
                </ProductConsumer>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    z-index: 1;
    .card-grid {
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        min-height: 355px;
        .fa-check {
            color: var(--lightBlue);
        }
        &:hover {
            .card-img-top {
                transform: scale(1.05);
            }
        }
        .card-body {
            text-align: center;
            background: #fff;
            .title-product {
                height: 44px;
            }
        }
        .img-container {
            position: relative;
        }
        .card-img-top {
            transition: all 0.3s linear;
        }
        .img-container:hover .card-img-top {
            transform: scale(1.05);
            z-index: -10!important;
        }
    }
    .card-list {
        margin-bottom: 20px;
        background: #fff!important;
        display: flex;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        .product-label {
            left: 360px;
            width: 50px;
        }
        .fa-check {
            color: var(--lightBlue);
        }
        .card-img-top {
            transition: all 0.3s linear;
        }
        .img-container {
            height: initial!important;
            max-width: initial;
            text-align: center;
            width: 400px;
        }
        .description-product {
            margin-bottom: 15px;
        }
        .read-more {
            color: var(--lightBlue);
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .card-buttons {
            text-align: left!important;
        }
        &:hover {
            .card-img-top {
                transform: scale(1.05);
            }
        }
        .card-body {
            width: 70%;
            background: #fff!important;
            text-align: left;
        }
    }
    @media screen and (max-width: 992px) {
        display: block;
        .product-label {
            left: auto;
        }
        .card-body {
            width: 100%;
        }
        .card-list {
            display: block;
            .img-container {
                max-width: fit-content;
            }
            .card-body {
                width: 100%;
            }
            .product-label {
                left: 187px;
            }
        }
        .card-buttons {
            display: block!important;
            margin: 0 auto;
        }
        .btn-content {
            display: none;
        }
        .product-label {
            left: 70%;
        }
    }
}
`