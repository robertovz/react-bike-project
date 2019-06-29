import React, { Component } from 'react';
import RelatedProducts from '../Products/RelatedProducts';
import { ProductConsumer } from '../../context';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import styled from 'styled-components';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, oldPrice, offer, speed, wheel, rating, title, material, type, review, inCart } = value.detailProduct;
                    const { getRating, getComment, stars, author, comment, limit, onLoadMore } = value;
                    console.log(limit)
                    let comments = review.slice(limit-5, limit).map((reviews, index) => {
                        return (
                            <div key = {index} >
                                <span className="">{reviews.author}</span>
                                <span className="mx-3 d-inline-block">
                                    <Rating
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        fractions={2}
                                        initialRating={reviews.rating}
                                        readonly />
                                </span>
                                <span className="pull-right text-muted">{reviews.datePublished}</span>
                                <p className="">{reviews.description}</p>
                                <p className="">{reviews[1]}</p>
                                <div className="divider"></div>
                            </div>
                        )

                    })

                    return (
                        <div>
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
                                                    single product
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SingleProduct className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 text-center text-slanted my-5">
                                        <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-5">
                                        <h3 className="text-bright">{title}</h3>
                                        <p className="text-muted mt-3 mb-3">
                                            Made by: <span>{company}</span>
                                        </p>
                                        <span className="d-inline-block">
                                            <Rating
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                                fractions={2}
                                                initialRating={rating}
                                                readonly
                                            /> <span className="ml-2">{rating}</span>
                                        </span>
                                        <span className="mx-3 text-muted">{review.length} Reviews</span>
                                        <div className="prices my-3">
                                            {offer !== 0 ? <span className="old-price text-muted mr-3">${oldPrice}</span> : null}
                                            <span className="price"><span>$</span>{(parseFloat(price).toFixed(2))}</span>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-2">
                                            some info about product
                                        </p>
                                        <p className="text-muted">{info}</p>
                                        <div className="divider"></div>
                                        <p className="mt-3 lead">Category: <span className="text-muted lead">{type}</span></p>
                                        <p className="lead">Frame Material:  <span className="text-muted lead">{material}</span></p>
                                        <button disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                            }}
                                            className="btn btn-lg btn-primary text-uppercase mt-3">{inCart ? "in cart" : "add to cart"}
                                        </button>
                                    </div>
                                </div>
                            </SingleProduct>
                            <TabDetails className="container py-5">
                                <div className="row">
                                    <TabProvider defaultTab="one">
                                        <section className="my-tabs text-left">
                                            <TabList className="my-tablist text-left">
                                                <Tab tabFor="one" className="tab-detail">reviews</Tab>
                                                <span className="divider"></span>
                                                <Tab tabFor="two" className="tab-detail">additional information</Tab>
                                                <span className="divider"></span>
                                                <Tab tabFor="three" className="tab-detail">delivery and payment</Tab>
                                            </TabList>
                                            <div className="wrapper py-3">
                                                <TabPanel tabId="one" className="m-2">
                                                    {comments}
                                                    <Link to="/details" className={limit <= review.length ? "load-more" : "d-none"} onClick={onLoadMore}>Load More <i className="fas fa-chevron-down" /></Link>
                                                    <form>
                                                    <h6 className="text-bright font-weight-bold text-uppercase my-5">Write your own review</h6>
                                                    <div className="text-muted review-legend font-weight-bold">You're reviewing: <span className="text-muted">{title}</span></div>
                                                    <div className="text-muted mt-4 font-weight-bold">Your Rating <span className="text-danger">*</span></div>
                                                    <div className="text-muted d-block font-weight-bold">Quality<span className="mx-3 d-inline-block">
                                                        <Rating emptySymbol="far fa-star"
                                                            initialRating={stars}
                                                            fullSymbol="fas fa-star" name="stars" id="stars"
                                                            onChange={getRating} /></span></div>
                                                    <label className="text-muted mt-4 font-weight-bold">Nickname <span className="text-danger">*</span></label>
                                                    <input type="text" placeholder="" className="name-review" required
                                                        name="author" id="author" value={author}
                                                        onChange={getComment} />
                                                    <label className="text-muted mt-4 font-weight-bold">Text <span className="text-danger">*</span></label>
                                                    <textarea type="text" placeholder="" className="text-review"
                                                        name="comment" id="comment" value={comment} required
                                                        onChange={getComment} />
                                                    <button type="button" className="btn btn-primary mt-4"
                                                        onClick={() => {
                                                            value.addComment(id);
                                                        }}>Submit Review</button>
                                                        </form>
                                                </TabPanel>
                                                <TabPanel tabId="two" className="m-4">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Category</td>
                                                                <td className="item-table">{type}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Frame Material</td>
                                                                <td className="item-table">{material}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Speed</td>
                                                                <td className="item-table">{speed}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Wheel Size</td>
                                                                <td className="item-table">{wheel} Inch</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Brand</td>
                                                                <td className="item-table">{company}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </TabPanel>
                                                <TabPanel tabId="three" className="m-4">
                                                    <i className="fas fa-info text-muted p-2 mx-2 d-inline-block" />
                                                    <p className="text-muted d-inline-block">
                                                        In vel odio eu enim dignissim tempor et vitae lorem.
                                                        Curabitur non placerat quam, eu volutpat dui. Morbi mattis mollis justo,
                                                        sed imperdiet justo eleifend a. Praesent eros ex, sollicitudin in elit eu,
                                                        laoreet gravida nibh. Curabitur varius convallis purus nec maximus.
                                                        Pellentesque nec eleifend ligula. Phasellus rhoncus sed odio at placerat.</p>
                                                </TabPanel>
                                            </div>
                                        </section>
                                    </TabProvider>
                                </div>
                            </TabDetails>
                            <RelatedProducts />
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const SingleProduct = styled.div`
    background: #fff;
    .fa-star {
        font-size: 1.2em;
        color: #FFD700;
    }
    .prices {
        font-size: 19px!important;
        line-height: 1;
    }
    .old-price {
        font-size: 1rem;
        text-decoration: line-through;
    }
    .price {
        display: inline;
        font-weight: 600;
    }
    .btn {
        min-width: 250px;
        font-size: 1.1rem;
        border: none;
        border-radius: 0;
        background-color: #3d9bef;
        font-weight: 700;
        display: inline-block;
        backface-visibility: hidden;
        transform: translateZ(0);
    }
`
const TabDetails = styled.div`
    background: #fff;
    .fa-star {
        font-size: 1em;
        color: #FFD700!important;
    }
    .my-tabs {
        width: 100%;
    }
    .my-tablist {
        text-transform: uppercase;
        width: 100%;
        transition: all 1s ease-in-out;
    }
    .tab-detail {
        text-transform: uppercase;
    }
    .fa-info {
        font-size: 1.5rem;
        border: 2px solid grey;
        border-radius: 100%;
        width: 43px;
        text-align: center;
        margin-top: 10px;
    }
    p {
        text-transform: none!important;
    }
    .divider {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .load-more {
        color: #000;
        text-decoration: none;
        position: absolute;
        margin-top: -45px;
        &:hover {
            color: var(--lightBlue);
        }
    }
    .review-legend {
        background: #ddd;
        padding: 12px 24px;
        margin-top: 25px;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 18px;
    }
    .name-review {
        width: 100%;
        max-width: 750px;
        display: block;
        padding: 13px 18px;
        font-size: inherit;
        vertical-align: baseline;
        border: 1px solid #f0f0f0;
    }
    .text-review {
        width: 100%;
        max-width: 750px;
        display: block;
        padding: 13px 18px;
        font-size: inherit;
        min-height: 150px;
        vertical-align: baseline;
        border: 1px solid #f0f0f0;
    }
    .btn {
        border: none;
        border-radius: 0;
        background-color: #3d9bef;
        font-weight: 700;
        padding: 6px 20px;
        display: inline-block;
        backface-visibility: hidden;
        transform: translateZ(0);
    }
`