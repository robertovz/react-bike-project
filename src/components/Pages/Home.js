import React from 'react'
import { withProductConsumer } from '../../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "react-animated-slider/build/horizontal.css";
import 'react-web-tabs/dist/react-web-tabs.css';
import Services from '../Services';
import Banner from '../Banner';
import Hero from '../Hero';
import FeaturedProducts from '../Products/FeaturedProducts';
import NewProducts from '../Products/NewProducts';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({ context }) {
    const { filterItem, showProduct } = context;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        pauseOnHover: true,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    var setting = {
        dots: false,
        infinite: true,
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
        <>
            <SliderWrapper>
                <Slider {...settings}>
                    <div className="slider-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-inner-1">
                                        <div className="slider-text-1">
                                            <h2 className="text-2">Tortor Dapibus Commodo Aenean Quam</h2>
                                        </div>
                                        <h3 className="text-banner-secondary">sale</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-inner-1">
                                        <div className="slider-text-1">
                                            <h2>Vulputate <strong className="text-2">Mollis</strong></h2>
                                        </div>
                                        <h3>1</h3>
                                        <button type="button" className="btn btn-primary btn-banner">Shop now</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-inner-1">
                                        <div className="slider-text">
                                            <h2>Vitae <strong>Lorem</strong></h2>
                                        </div>
                                        <h3>Volutpat</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </SliderWrapper>
            <Services />
            <Categories className="categories">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h5 className="font-weight-bold text-uppercase title-categories"><strong>Bikes</strong> Categories</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 my-3">
                            <div className="category-box-1">
                                <img src="./img/casual-bike.png" alt="" />
                                <div className="inner">
                                    <span className="text-category">urban <span className="text-bright">bikes</span></span>
                                    <ul className="subcategory-grid">
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> performance bikes
                                            </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> adventure {"&"} gravel bikes
                                            </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> cyclocross bikes
                                            </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> hybrid bikes
                                            </span>
                                        </li>
                                        <Link to="/products">
                                            <button type="button" className="btn btn-primary mt-2" id="type" name="Urban Bike"
                                                onClick={filterItem} >Shop Now</button>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 my-3">
                            <div className="category-box-2">
                                <img src="./img/mountain-bike.png" alt="" />
                                <div className="inner">
                                    <span className="text-category">mountain <span className="text-bright">bikes</span></span>
                                    <ul className="subcategory-grid">
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> xc bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> trail mountain bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> downhill bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> fat bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> bmx bikes
                                        </span>
                                        </li>
                                        <Link to="/products">
                                            <button type="button" className="btn btn-primary mt-2" id="type" name="Mountain Bike"
                                                onClick={showProduct} >Shop Now</button>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 my-3">
                            <div className="category-box-3">
                                <img src="./img/road-bike.png" alt="" />
                                <div className="inner">
                                    <span className="text-category">road <span className="text-bright">bikes</span></span>
                                    <ul className="subcategory-grid">
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> road bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> cyclocross bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> gravel bikes
                                        </span>
                                        </li>
                                        <li>
                                            <span className="subcategory-name text-uppercase">
                                                <i className="fas fa-arrow-right" /> trail bikes
                                        </span>
                                        </li>
                                        <Link to="/products">
                                            <button type="button" className="btn btn-primary mt-2" id="type" name="Road Bike"
                                                onClick={filterItem} >Shop Now</button>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Categories>
            <div className="container">
                <div className="row">
                    <div className="divider"></div>
                </div>
            </div>
            <FeaturedProducts />
            <Hero />
            <NewProducts />
            <Banner />
            <Sponsor>
                <Slider {...setting}>
                    <div className="slider-1 mx-auto">
                        <img src="img/sponsor-1.png" alt="" />
                    </div>
                    <div className="slider-2 mx-auto">
                        <img src="img/sponsor-2.png" alt="" />
                    </div>
                    <div className="slider-3 mx-auto">
                        <img src="img/sponsor-3.png" alt="" />
                    </div>
                    <div className="slider-4 mx-auto">
                        <img src="img/sponsor-4.png" alt="" />
                    </div>
                    <div className="slider-5 mx-auto">
                        <img src="img/sponsor-1.png" alt="" />
                    </div>
                </Slider>
            </Sponsor>
        </>
    )
}

export default withProductConsumer(Home);
const SliderWrapper = styled.div`
    font-family: sans-serif;
    .slider-1 {
        color: #fff; 
        background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url("img/bike-banner-03.jpeg") center/cover no-repeat;
        position: relative;
        align-items: center;
        justify-content: center;
        font-family: "Shadows into Light", sans-serif;
        min-height: calc(80vh - 50px);
        .slider-inner-1 {
            margin-top: 20%;
            text-align: center;
            .slider-text-1 {
            }
            .text-2 {
                font-weight: bold;
            }
            .text-banner-secondary {
                background: red;
                width: 150px;
                margin: 0 auto;
                padding: 5px 10px;
                text-transform: uppercase;
                font-weight: 900;
                color: #000;
            }
        }
        .btn-banner {
            background: rgba(255, 69, 0, 0.2);
            border-radius: 0;
            color: orangered;
            border: 1px solid orangered;
            font-weight: 900;
            box-shadow: 0 10px 15px rgba(255, 69, 0, 0.5);
            font-size: 18px;
            height: 40px;
            transform: translateZ(0);
            text-transform: capitalize;
            &:hover {
                color: #fff;
                background: orangered;
            }
        }
    }
    .slider-2 {
        color: #fff; 
        background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("img/bike-banner-02.png") center/cover no-repeat;
        position: relative;
        align-items: center;
        justify-content: center;
        font-family: "Shadows into Light", sans-serif;
        min-height: calc(80vh - 50px);
        .slider-inner-1 {
            margin-top: 20%;
            text-align: center;
            .slider-text-1 {
                font-style: italic;
            }
            .text-2 {
                color: orangered;
            }
        }
        .btn-banner {
            background: rgba(255, 69, 0, 0.2);
            border-radius: 0;
            color: orangered;
            border: 1px solid orangered;
            font-weight: 900;
            box-shadow: 0 10px 15px rgba(255, 69, 0, 0.5);
            font-size: 18px;
            height: 40px;
            transform: translateZ(0);
            text-transform: capitalize;
            &:hover {
                color: #fff;
                background: orangered;
            }
        }
    }
    .slider-3 {
        color: #fff; 
        background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("img/bike-banner.jpeg") center/cover no-repeat;
        position: relative;
        align-items: center;
        justify-content: center;
        font-family: "Shadows into Light", sans-serif;
        min-height: calc(80vh - 50px);
        .slider-inner-1 {
            margin-top: 20%;
            text-align: center;
            .slider-text-1 {
                font-style: italic;
            }
            .text-2 {
                color: orangered;
            }
        }
        .btn-banner {
            background: rgba(255, 69, 0, 0.2);
            border-radius: 0;
            color: orangered;
            border: 1px solid orangered;
            font-weight: 900;
            box-shadow: 0 10px 15px rgba(255, 69, 0, 0.5);
            font-size: 18px;
            height: 40px;
            transform: translateZ(0);
            text-transform: capitalize;
            &:hover {
                color: #fff;
                background: orangered;
            }
        }
    }
    .slick-slider{ 
        max-height: 100%;
        max-width: 100%;
    }.slick-track
    {
        display: flex !important;
    }
    .slick-arrow {
        color: #000;
    }
    .slick-prev {
        color: #000;
        left: 35px;
        z-index: 1;
    }
    .slick-next {
        color: #000;
        right: 50px;
    }
    .slick-prev:before, .slick-next:before {
        font-size: 40px;
    }
    .slick-dots {
        bottom: 25px;
    }
    .slick-dots li button:before{
        font-size: 15px;
        color: rgba(255, 255, 255, 0.9);
    }
    .slick-dots li.slick-active button:before {
        opacity: .75;
        color: #fff;
    }

`
const Categories = styled.div`
        color: #333;
        padding: 2rem;
        .title-categories {
            padding: 5px 30px;
            border-radius: 5px;
            z-index: 10;
        }
        .category-wrapper {
            height: calc(50vh - 50px);
            background: #ddd;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .category-box-1 {
            color: #fff;
            height: calc(65vh - 50px);
            background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("img/banner-01.jpeg") center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                max-width: 80%;
                opacity: 0.8;
            }
            &:hover {
                img {
                    opacity: 0.5;
                }
                .inner {
                    transform: translateY(15%);
                }
                .subcategory-grid {
                    display: block;
                    transform: translateY(0%);
                    opacity: 1;
                }
            }
        }
        .category-box-2 {
            color: #fff;
            height: calc(65vh - 50px);
            background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("img/banner-02.jpg") center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                max-width: 80%;
            }
            &:hover {
                img {
                    opacity: 0.5;
                }
                .inner {
                    transform: translateY(20%);
                }
                .subcategory-grid {
                    display: block;
                    transform: translateY(0%);
                    opacity: 1;
                }
            }
        }
        .category-box-3 {
            color: #fff;
            height: calc(65vh - 50px);
            background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("img/banner-03.jpg") center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                max-width: 80%;
                opacity: 0.9;
            }
            &:hover {
                img {
                    opacity: 0.5;
                }
                .inner {
                    transform: translateY(15%);
                }
                .subcategory-grid {
                    display: block;
                    transform: translateY(0%);
                    opacity: 1;
                }
            }
        }
        @media screen and (max-width: 450px) {
            .category-img img {
                margin-top: 50%!important;
                max-width: 150px!important;
            }
        }
        img {
            text-align: center;
        }
        .inner {
            position: absolute;
            text-align: left;
            left: 15%;
            bottom: 45%;
            transform: translateY(40%);
            transition: all 0.3s ease-in-out;
            .text-category {
                font-size: 20px;
                font-weight: bold;
                text-transform: uppercase;
                span {
                    display: block;
                    font-weight: bold;
                }
            }
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li {
            text-decoration: none;
        }
        .subcategory-grid {
            transition: all 0.3s ease-in-out;
            opacity: 0;
        }
        .subcategory-name {
            font-weight: 600;
            font-size: 14px;
            line-height: 25px;
            i {
                color: var(--lightBlue);
            }
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
`
const Sponsor = styled.div`
    padding: 2rem;
    img {
        margin: 0 auto;
    }

`