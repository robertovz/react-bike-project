import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Hero extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            pauseOnHover: true,
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <ProductConsumer>
                {(value) => {
                    const { handleDetail } = value;
                    return (
                        <HeroWrapper>
                            <Slider {...settings}>
                                <div className="slider-hero">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 my-5">
                                                <img src="./img/best-seller.png" alt="" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-inner-1 text-white mx-auto my-5">
                                                    <h1 className="text-uppercase font-weight-bold">best seller</h1>
                                                    <p className="font-weight-bold slider-secondary-text">Tourin Road Bike</p>
                                                    <p className="price">$500.00</p>
                                                    
                                                    <Link to="/details">
                                                        <button type="button" className="btn btn-primary" onClick={() => handleDetail(11)} ><span>Shop Now</span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-hero">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 my-5">
                                                <img src="./img/best-seller-01.png" alt="" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-inner-1 text-white mx-auto my-5">
                                                    <h1 className="text-uppercase font-weight-bold">top offer</h1>
                                                    <p className="font-weight-bold slider-secondary-text">Polygon Bend RV - Gravel / Cyclocross bike</p>
                                                    <p className="price">
                                                        <span className="text-bright old-price">$700.00</span><span className="mx-2">$525.00</span></p>

                                                    <Link to="/details">
                                                        <button type="button" className="btn btn-primary" onClick={() => handleDetail(10)} ><span>Shop Now</span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-hero">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 my-5">
                                                <img src="./img/best-seller-03.png" alt="" />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-inner-1 text-white mx-auto my-5">
                                                    <h1 className="text-uppercase font-weight-bold">most wanted</h1>
                                                    <p className="font-weight-bold slider-secondary-text">Diamond Bicycles Road Bike</p>
                                                    <p className="price">$500.00</p>
                                                    <Link to="/details">
                                                        <button type="button" className="btn btn-primary" onClick={() => handleDetail(12)} ><span>Shop Now</span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </HeroWrapper>
                    )
                }}
            </ProductConsumer>
        )
    }
}
const HeroWrapper = styled.div`
    color: #fff; 
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("img/banner-02.jpg") center/cover no-repeat;
    position: relative;
    align-items: center;
    justify-content: center;
    font-family: "Shadows into Light", sans-serif;
    min-height: calc(80vh - 50px);
    .slider-hero {
        margin-top: 5%!important;
    }
    img {
        margin: 0 auto;
    }
    .slider-inner-1 {
        text-align: center;
    }
    .slider-secondary-text {
        letter-spacing: 0.7px;
    }
        .btn {
            position: relative;
            padding: 0.7em 1.5em;
            border: none;
            background: rgba(0, 141, 199, 0.1);
            box-shadow: 0 3px 5px rgba(0, 141, 199, 0.4);
            cursor: pointer;
            outline: none;
            font-size: 18px;
            margin: 1em 0.8em;
            z-index: 1;
            &::after,::before{
              content: '';
              display: block;
              position: absolute;;
              width: 20%;
              height: 20%;
              border: 2px solid;
              transition: all 0.6s ease;
              border-radius: 2px;
        }
            &::after{
              bottom: 0;
              right: 0;
              border-top-color: transparent;
              border-left-color: transparent;
              border-bottom-color: var(--lightBlue);
              border-right-color: var(--lightBlue);
        }
            &::before{
              top: 0
              left: 0
              border-bottom-color: transparent;
              border-right-color: transparent;
              border-top-color: var(--lightBlue);
              border-left-color: var(--lightBlue);
        }
            &:hover:after,
            &:hover:before{
                background: var(--lightBlue);
                box-shadow: 0 5px 8px rgba(0, 141, 199, 0.4);
              border-bottom-color: var(--lightBlue);
              border-right-color:  var(--lightBlue);
              border-top-color: var(--lightBlue);
              border-left-color: var(--lightBlue);
              width: 100%;
              height: 100%;
            }
            }
            .btn span {
              position: relative; 
              z-index: 2;
            }
        .price {
            font-size: 20px;
        }
        .old-price {
            text-decoration: line-through;
        }
    }
    @media screen and (max-width: 768px) {
        img {
            width: 295px;
        }
    }
    @media screen and (max-width: 992px) {
        .slick-dots {
            bottom: 25px;
        }
    }
    .slick-slider{ 
        max-height: 100%;
        max-width: 100%;
    }
    .slick-dots li button:before{
        font-size: 15px;
        color: rgba(255, 255, 255, 0.9);
    }
    .slick-dots li.slick-active button:before {
        opacity: .75;
        color: #008dc7;
    }
`