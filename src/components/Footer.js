import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdDirectionsBike } from "react-icons/md";

export default class Footer extends Component {
    state = {
        showFooterContent: false,
        showFooterDetail: false,
    }
    showContent = () => {
        this.setState({ showFooterContent: !this.state.showFooterContent, showFooterDetail: false })
    }
    showDetail = () => {
        this.setState({ showFooterDetail: !this.state.showFooterDetail, showFooterContent: false })
    }
    render() {
        return (
            <FooterContainer>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 col-lg-2 text-center">
                            <p className="brand"><MdDirectionsBike /></p>
                            <h5 className="text-uppercase">bike shop</h5>
                        </div>
                        <div className="col-10 col-lg-2">
                            <ul>
                                <li onClick={this.showContent} ><span className="footer-text">pages</span>
                                    <button type="button"
                                        className="btn footer-col-btn">
                                        <i className={this.state.showFooterContent ? "fas fa-angle-up" : "fas fa-angle-down"} />
                                    </button></li>
                                <div className={this.state.showFooterContent ? "footer-col-content" : "footer-content"}>
                                    <li><Link to='/' className="" ><i className="fas fa-angle-right" /> Home</Link></li>
                                    <li><Link to='/about' className="" ><i className="fas fa-angle-right" /> About Us</Link></li>
                                    <li><Link to='/' className="" ><i className="fas fa-angle-right" /> Blog</Link></li>
                                    <li><Link to='/' className="" ><i className="fas fa-angle-right" /> FAQs</Link></li>
                                    <li><Link to='/' className="" ><i className="fas fa-angle-right" /> Delivery</Link></li>
                                    <li><Link to='/' className="" ><i className="fas fa-angle-right" /> Contact</Link></li>
                                </div>
                            </ul>
                        </div>
                        <div className="col-10 col-lg-2">
                            <ul>
                                <li onClick={this.showDetail} ><span className="footer-text">my account</span>
                                    <button type="button"
                                        className="btn footer-col-btn"
                                    >
                                        <i className={this.state.showFooterDetail ? "fas fa-angle-up" : "fas fa-angle-down"} />
                                    </button>
                                </li>
                                <div className={this.state.showFooterDetail ? "footer-content-detail" : "footer-detail"}>
                                    <li><Link to='/' className="" ><i className="fas fa-angle-right" /> My Account</Link></li>
                                    <li><Link to='/cart' className="" ><i className="fas fa-angle-right" /> Wish List</Link></li>
                                    <li><Link to='/cart' className="" ><i className="fas fa-angle-right" /> Shopping Cart</Link></li>
                                </div>
                            </ul>
                        </div>
                        <div className="col-10 col-lg-3">
                            <ul>
                                <li><span className="footer-text">my account</span></li>
                                <li><i className="footer-icon fas fa-phone" /> phone-example</li>
                                <li><i className="footer-icon fas fa-envelope" /> email@example.com</li>
                                <li><i className="footer-icon fas fa-map-marker-alt" /> Example EX, 000</li>
                            </ul>
                        </div>
                        <div className="col-10 col-lg-3">
                            <ul>
                                <li>
                                <h5 className="text-uppercase">newsletter</h5>
                                    <div className="newsletter-box">
                                        <input type="text" className="" placeholder="Email" />
                                        <button type="button" className="btn ml-2 mt-2 text-right">Subscribe<i className="fa fa-long-arrow-right"></i></button>
                                    </div>
                                </li>
                            </ul>
                            <ul className="social">
                                <li><Link to='/' className="" ><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to='/' className="" ><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to='/' className="" ><i className="fab fa-google-plus"></i></Link></li>
                                <li><Link to='/' className="" ><i className="fab fa-pinterest"></i></Link></li>
                                <li><Link to='/' className="" ><i className="fab fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container mt-3">
                        <div className="row">
                            <p className="ml-3">Coyright Footer | All rights reserved</p>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        )
    }
}

const FooterContainer = styled.div`
    color: #fff;
    bottom: 0;
    background: #2ba8db;
    .brand {
        font-size: 5rem;
    }
    .footer-content, .footer-detail {
        display: block;
    }
    .footer-col-btn {
        display: none;
        animation-name: modalFadeNav;
        animation-duration: 0.7s;
    }
    .footer-text {
        margin-top: 15px;
        text-transform: uppercase;
    }
    .btn {
        color: #fff;
        background: #1b222a;
    }
    .footer-col-btn {
        color: #fff;
        background: #1b222a;
        float: right;
        height: 30px;
        i {
            color: #fff; 
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .footer-icon {
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 100%;
    }
    ul {
        padding: 0;
    }
    ul {
        animation-name: modalFadeNav;
        animation-duration: 0.7s;
    }
    ul li {
        margin-top: 10px;
        font-weight: 200;
        text-decoration: none;
        list-style-type: none;
        animation-name: modalFadeNav;
        animation-duration: 0.7s;
        font-size: 14px;
    }
    ul li a {
        color: #fff;
    }
    input {
        padding: 10px;
        border: none;
        border-radius: 50px;
    }
    .social li{
        padding: 0;
        width: 35px;
        margin: 0 8px 0 0;
        display: inline;
    }
    .social li a i {
        font-size: 29px;
        margin: 0 0 0 5px;
    }
    .footer-bottom {
        padding: 1px;
        color: #fff;
        background: #1b222a;
        font-size: 13px;
    }
    @keyframes modalFadeNav {
        from {transform: translateY(-10%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
    @media screen and (max-width: 993px) {
        .footer-text {
            line-height: inherit;
            cursor: pointer;
            font-size: 20px;
            position: relative;
            font-weight: 700;
            padding-right: 26px;
            color: #fff;
            margin-bottom: 0;
        }
        .footer-col-btn, .footer-content-detail {
            display: block;
            animation-name: modalFadeNav;
            animation-duration: 0.7s;
        }
        .footer-content, .footer-detail {
            display: none;
        }
    }
`