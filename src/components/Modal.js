import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {title, img, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4
                                    text-center text-capitalize">
                                        <h5 className="title-modal p-3">Item added to the cart</h5>
                                        <div className="divider"></div>
                                        <i className="fas fa-times" onClick={()=>closeModal()} />
                                        <img src={img} className="img-fluid" alt="product" style={{background:'none'}}/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ${price}</h5>
                                        <div className="divider mb-3"></div>
                                        <Link to="/products">
                                            <button className="btn btn-primary mb-4
                                            text-uppercase" onClick={()=>closeModal()}>continue shopping</button>
                                        </Link>
                                        <Link to="/cart">
                                            <button className="btn btn-success mx-2 mb-4
                                            text-uppercase" onClick={()=>closeModal()}>go to cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div ` 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    .fa-times {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10000;
    }
    .btn-primary, .btn-success {
        font-size: 15px;
        border-radius: 0;
        text-align: center;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    }
    #modal {
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
        animation-name: modalFade;
        animation-duration: .7s; 
    }
    @keyframes modalFade {
        from {transform: translateY(-50%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
`;