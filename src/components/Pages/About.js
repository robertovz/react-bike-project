import React, { Component } from 'react'
import styled from 'styled-components';

export default class About extends Component {
    render() {
        return (
            <div>
            <AboutWrapper className="container my-5">
                <div className="row">
                    <div className="col-10 col-lg-6 mx-auto">
                        <div className="img-wrapper mt-4">
                            <img src="img/bike-banner-03.png" alt="" />
                        </div>
                    </div>
                    <div className="col-10 col-lg-6 mx-auto">
                        <p className="p-3">In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-10 col-lg-6 mx-auto">
                        <p className="p-3">In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui.</p>
                    </div>
                    <div className="col-10 col-lg-6 mx-auto">
                        <div className="img-wrapper mt-4">
                            <img src="img/bike-banner-02.png" alt="" />
                        </div>
                    </div>
                </div>
            </AboutWrapper>
            <Preferences className="preferences">
                <div className="container">
                    <div className="row">
                        <div className="col-10 preferences-text">
                            <h1 className="text-capitalize m-2 mt-5 mx-auto text-center font-weight-bold">why choose us</h1>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-4 col-sm-6">
                            <div className="preferences-wrapper">
                                <h4 className="text-center font-weight-bold">Professional</h4>
                                <p className=""> In vel odio eu enim dignissim tempor et vitae lorem.
                                Curabitur non placerat quam, eu volutpat dui.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="preferences-wrapper">
                                <h4 className="text-center font-weight-bold">Modern products</h4>
                                <p className=""> In vel odio eu enim dignissim tempor et vitae lorem.
                                Curabitur non placerat quam, eu volutpat dui.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="preferences-wrapper">
                                <h4 className="text-center font-weight-bold">Satisfaction guaranteed</h4>
                                <p className=""> In vel odio eu enim dignissim tempor et vitae lorem.
                                Curabitur non placerat quam, eu volutpat dui.</p>
                            </div>
                        </div>
                    </div>
                    {/* In vel odio eu enim dignissim tempor et vitae lorem.
                            Curabitur non placerat quam, eu volutpat dui. */}
                </div>
            </Preferences>
            </div>
        )
    }
}
const AboutWrapper = styled.div`
    background: #f2f3f7;
    border: 1px solid lightgrey;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    .img-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    img {
        width: 100%;
    }
`
const Preferences = styled.div`
        color: #fff; 
        background: #eb01a5;
        min-height: calc(50vh - 70px);
        background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("./img/bike-banner.png") center/cover no-repeat;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        .preferences-wrapper {
            background: rgba(255, 255, 255, 0.4);
            padding: 20px;
            margin: 5px;
            font-weight: 500;
        }
        @media screen and (max-width: 1200px) {
            .preferences-wrapper {
                height: 220px;
            }
        }
`