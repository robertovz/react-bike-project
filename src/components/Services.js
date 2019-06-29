import React, { Component } from 'react'
import styled from 'styled-components';

export default class Services extends Component {
    render() {
        return (
            <ServicesWrapper className="services">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-md-6 col-lg-3 my-3">
                            <div className="service-wrapper">
                                <div className="service-icon">
                                    <i className="fas fa-bicycle"></i>
                                </div>
                                <div className="service-info">
                                    <span className="text-uppercase d-block">all brands</span>
                                    <span className="text-muted">Enjoy our fast {"&"} free delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto col-md-6 col-lg-3 my-3">
                            <div className="service-wrapper">
                                <div className="service-icon">
                                    <i className="far fa-comment-dots"></i>
                                </div>
                                <div className="service-info">
                                    <span className="text-uppercase d-block">customer care</span>
                                    <span className="text-muted">We are here to help you</span>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto col-md-6 col-lg-3 my-3">
                            <div className="service-wrapper">
                                <div className="service-icon">
                                    <i className="fas fa-bicycle"></i>
                                </div>
                                <div className="service-info">
                                    <span className="text-uppercase d-block">affordable</span>
                                    <span className="text-muted">We are here to help you</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-md-6 col-lg-3 my-3">
                            <div className="service-wrapper">
                                <div className="service-icon">
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="service-info">
                                    <span className="text-uppercase d-block">quality parts</span>
                                    <span className="text-muted">All parts we sell are certified.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}
const ServicesWrapper = styled.div`
    padding: 1rem;
    color: #fff;
    background: #1b222a;
    .services-title {
        margin: 0 auto;
        padding: 25px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .service-info {
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        display: inline-block;
        letter-spacing: 0.3px;
    }
    .service-icon {
        color: #008dc7;
        font-size: 32px;
        display: inline-block;
        line-height: 5px;
        margin-right: 10px;
        i {
            border-radius: 100%;
        }
    }
    .fa-star {
        font-size: 32px;
        color: #008dc7;
    }
    @media screen and (max-width: 768px) {
        .service-wrapper {
            text-align: center;
        }
        .service-icon {
            display: block;
        }
        .service-info {
            margin-top: 5px;
            text-align: center;
        }
    }
`