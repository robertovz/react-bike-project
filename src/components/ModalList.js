import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default class ModalList extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalListOpen, closeListModal, compare } = value;
                    let compared = [];
                    if (compare.length >= 1) {
                        compared = [...compared];
                        compared = compare.map((item, index) => {
                            return (<div key={index}> <img src={item.img} alt="" className="img-modal" />
                                <span className=""> {item.title}</span></div>
                            )
                        })
                    }
                    if (!modalListOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="modal-list mx-auto">
                                            <i className="mx-2 fas fa-times close-modal" onClick={() => closeListModal()} />
                                            <span className="text-uppercase font-weight-bold">compare</span>
                                            <div className="divider"></div>
                                            {compared}
                                            <div className="btn-modal">
                                                <div className="divider"></div>
                                                <span className="text-muted mt-3 text-modal-list">Item added to the comparison list</span>
                                                <button type="button" className="btn mt-2"
                                                    disabled={compare.length >= 1 ? false : true}
                                                    onClick={() => { value.openFilterModal(compare); closeListModal() }}>
                                                    <i className="fas fa-check mx-2" /> Compare</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div`
    position: fixed;
    padding: 0.75em;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 99;
    background: rgba(255, 255, 255, 0.5);
    .modal-list {
        padding: 15px;
        width: 50%;
        background: #fff;
        box-shadow: 0 0 12px 2px rgba(0,0,0,.35);
        animation-name: modalFade;
        animation-duration: 1s;
    }
    .img-modal {
        height: 50px;
        width: 70px;
    }
    .close-modal {
        top: 20px;
        float: right;
        font-size: 1.5rem;
        cursor: pointer;
    }
    .text-modal-list {
        font-weight: bold;
        bottom: 20px;
    }
    .text-red {
        color: var(--primaryColor);
    }
    .fa-check {
        color: #fff;
    }
    .btn {
        color: #fff;
        background: #008dc7;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        margin: 20px;
        margin-right: 0;
        margin-bottom: 0px;
        float: right;
    }
    @media screen and (max-width: 768px) {
        .modal-list {
            width: 100%;
        }
    }
    @keyframes modalFade {
        from {transform: translateY(-100%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
`