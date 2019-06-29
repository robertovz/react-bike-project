import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from 'react-rating';

export default class ModalFilter extends Component {
    render() {
        var settings = {
            infinite: false,
            speed: 500,
            autoplay: false,
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
            <div>
                <ProductConsumer>
                    {(value) => {
                        const { removeCompare, modalFilterOpen, closeModal, compare } = value;
                        let prod = [];
                        prod = [...prod];
                        prod = <SliderWrapper className="col-12">
                            <Slider {...settings}>  {(compare.map((item, index) => {
                                return <div key={index} className="compare-item">
                                    <div className="compare-effect">
                                        <div className="remove-icon-btn">
                                            <i className="fas fa-trash" onClick={() => compare.length === 1 ? (removeCompare(item.id), closeModal()) : removeCompare(item.id)}></i>
                                        </div>
                                        <div className="img-container">
                                            <img src={item.img} alt="" className="card-img-top" />
                                        </div>
                                        <p className="text-modal text-center font-weight-bold">{item.title}</p>
                                        <div className="divider"></div>
                                        <div className="text-center">
                                        <span className="rating">
                                            <Rating
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                                fractions={2}
                                                initialRating={item.rating}
                                                readonly
                                            />  <span className="ml-2">{item.rating}</span>
                                            </span>
                                            <span className="mx-3 text-muted">{item.review.length} Reviews</span>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="info-item text-center">
                                            <span className="text-modal">{item.company}</span>
                                            <span className="text-modal mx-1">· {item.type}</span>
                                            <span className="text-modal mx-1">· {item.material}</span>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="text-center">
                                            <span className="text-modal price">${(parseFloat(item.price).toFixed(2))}</span>
                                            <button type="button" className="btn cart-btn btn-primary" disabled={item.inCart ? true : false}
                                                onClick={() => { value.addToCart(item.id); value.openModal(item.id); }} >
                                                {item.inCart ? (<p className="text-capitalize in-cart-btn" disabled>{" "}in Cart</p>) :
                                                    (<i className="fas fa-shopping-cart" />)}
                                            </button>
                                            <button type="button" className="btn compare-btn btn-primary">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="description-item">{item.info}</p>
                                    </div>
                                </div>
                            }))}</Slider>
                        </SliderWrapper>
                        if (!modalFilterOpen) {
                            return null;
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="compare-items">
                                        <h3 className="text-compare p-4">Product Comparison</h3>
                                        {prod}
                                        <i className="fas fa-times" onClick={() => closeModal()} />
                                    </div>
                                </ModalContainer>
                            );
                        }
                    }}
                </ProductConsumer>

            </div>
        )
    }
}
const SliderWrapper = styled.div`
    .slick-prev, .slick-next {
        height: 60px;
        width: 40px;
        background: rgba(64,64,66,.8);
        transition: background-color .3s,opacity .3s,visibility .3s,transform .3s;
        overflow: hidden;
        white-space: nowrap;
        color: transparent;
        border-radius: 5px;
        position: fixed;
        top: 50%;
        z-index: 99;
    }
    .slick-prev {
        left: 10px;
    }
    .slick-next {
        right: 10px;
    }
    .slick-prev:before {
        content: '\f053';
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
    }
    .slick-next:before {
        content: '\f054';
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
    }
    .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
        color: rgba(64,64,66,.8);
        outline: none;
        background: rgba(64,64,66,.8);
    }
    .slick-prev.slick-disabled, .slick-next.slick-disabled {
        display: none!important;
    }
`
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    padding: 20px;
    z-index: 100;
    .compare-items {
        width: 100%
        background: #fff;
        height: 100%;
        overflow-y: scroll;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,.35);
        animation-name: modalFade;
        animation-duration: 1s;
        &::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
            box-shadow: inset 0 0 5px grey; 
            border-radius: 10px;
        } 
        &::-webkit-scrollbar-thumb {
            background-color:  rgba(0,0,0,0.8);
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.7); 
        }
    }
    .compare-menu {
        border: 1px solid lightgrey;
        width: 50%;
        margin: 0 auto;
        .menu-item {
            margin: 0 auto;
            width: 50%;
            height: 40px;
            margin-top: 10px;
        }
    }
    .compare-wrapper {
        width: 15%;
        margin-left: 15px;
        bottom: 45%;
        position: absolute;
        text-transform: uppercase;
        font-size: 12px;
        color: darkgrey;
        animation-name: modalFade;
        animation-duration: 1s;
    }
    .compare-effect {
        img {
            padding: 30px;
            max-height: 225px;
            max-width: 300px;
            margin: 0 auto;
        }
        font-size: 15px;
        width: 100%;
        background: #fff;
        margin-bottom: 25px;
        border: 1px solid lightgrey;
        .rating {
            margin: 0 auto;
            width: 50%;
        }
    }
    .remove-icon-btn {
        font-size: 18px;
        margin: 5px 5px 0px 0px;
        color: #dc3545;
        background: none;
        border: none;
        text-align: right;
        &:focus {
            background: none;
            border: none;
        }
        i {
            cursor: pointer;
            &:hover {
                color: #de1327;
            }
        }
    }
    .info-item {
        height: 40px;
        margin: 20px;
    }
    .description-item {
        margin: 20px;
        height: 300px;
    }
    .text-compare {
        text-align: center;
    }
    .fa-times {
        position: absolute;
        top: 30px;
        right: 45px;
        font-size: 25px;
        transition: all 1s ease-in-out;
        cursor: pointer;
    }
    .fa-star {
        font-size: 1.2em;
        color: #FFD700;
    }
    .text-modal {
        height: 30px;
    }
    .btn {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px!important;
        height: 30px!important;
        margin-left: 5px;
        border-radius: 0;
        text-align: center;
        border: none;
        display: inline-block;
        background-color: var(--lightBlue);
        transform: translateZ(0);
        transition: background .8s ease;
    }
    .fa-shopping-cart, .fa-search {
        font-size: 15px;
    }
    @media screen and (max-width: 768px) {
        .fa-times {
            font-size: 1.5rem;
            color: var(--lightBlue);
            z-index: 99999999;
        }
        .compare-effect {
            border: none;
        }
        .description-item {
            margin: 20px;
            height: auto;
        }
    }
    @keyframes modalFade {
        from {transform: translateY(-100%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
    @keyframes modalFadeEffect {
        from {transform: translateY(100%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
`;