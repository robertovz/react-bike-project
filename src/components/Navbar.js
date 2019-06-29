import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdDirectionsBike } from "react-icons/md";
import { ProductConsumer } from '../context';

export default class Navbar extends Component {
    state = {
        isOpen: false,
        open: false,
        visible: false
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.updateDimensions)
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen, open: false })
    }
    handleTog = () => {
        this.setState({ open: !this.state.open, isOpen: false })
    }
    handleScroll = () => {
        const currentScrollpos = window.pageYOffset;
        const visible = currentScrollpos > 150;
        this.setState({
            visible
        })
    }
    updateDimensions = () => {
        let { isOpen, open } = this.state;
        if(window.innerWidth >= 768) {
            isOpen = false;
            open = false;
        }
        this.setState({
            isOpen, open
        });
    }
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { showProduct, search, setSearchProducts, cart } = value;
                    return (
                        <Nav className="navbar-expand-lg navbar-dark">
                            <div className="nav-middle">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="text-white brand text-center">
                                                <MdDirectionsBike />
                                                <div className="text-brand">
                                                    <span className="text-white text-weight-bold">Bike 
                                                    Shop</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9 nav-icons">
                                            <form className="form-inline search-bar my-4">
                                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                                                    value={search} onChange={setSearchProducts} />

                                                <Link to='/products' className="" >
                                                    <button className="btn btn-secondary" type="submit">
                                                        <i className="fa fa-search" />
                                                    </button>
                                                </Link>
                                            </form>
                                            <div className="d-inline-block">
                                                <Link to='/cart' className="cart" >
                                                    <i className="fas fa-shopping-cart" />
                                                    <span className="cart-quantity mx-1">
                                                        {cart.length}
                                                    </span>

                                                </Link>
                                                <button type="button"
                                                    className="user"
                                                    onClick={this.handleTog}>
                                                    <i className="fas fa-user" />
                                                </button>
                                                <ul className={this.state.open ? "user-menu" : "d-none"}>
                                                    <div className="user-content">
                                                        <div className="item">My account</div>
                                                        <div className="item">My Wish List</div>
                                                        <div className="item">Sign In</div>
                                                        <div className="item">Create an account</div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.visible ? "nav-center nav-hidden" : "nav-center"}>
                                <div className="container">
                                    <div className="row">
                                        <div className="nav-header">
                                            <button type="button"
                                                className="nav-btn"
                                                onClick={this.handleToggle}>
                                                <i className={this.state.isOpen ? "fas fa-times close-nav" :
                                                    "fas fa-bars nav-icon"} />
                                            </button>
                                        </div>
                                        <div className="navbar-icons">
                                            <Link to='/cart' className="cart-icon" >
                                                <i className="fas fa-shopping-cart" />
                                                <span className="cart-quantity">
                                                    {cart.length}
                                                </span>
                                            </Link>
                                            <button type="button"
                                                className="user-icon"
                                                onClick={this.handleTog}>
                                                <i className={this.state.open ? "fas fa-times" : "fas fa-user"} />
                                            </button>
                                            <ul className={this.state.open ? "user-menu" : "d-none"}>
                                                <div className="user-content">
                                                    <Link to="/products"className="item">My account</Link>
                                                    <Link to="/products" className="item">My Wish List</Link>
                                                    <Link to="/products" className="item">Sign In</Link>
                                                    <Link to="/products" className="item">Create an account</Link>
                                                </div>
                                            </ul>
                                            <form className="search-bar-icon">
                                                <input className="search-input" type="search" placeholder="Search" aria-label="Search"
                                                    value={search} onChange={setSearchProducts} />
                                                <Link to='/products' className="" >
                                                    <button className="btn btn-secondary search-icon" type="submit">
                                                        <i className="fa fa-search" />
                                                    </button>
                                                </Link>
                                            </form>
                                        </div>
                                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <div className="dropdown">
                                                    <Link to="/products" onClick={showProduct} className="nav-link" id="bikes">BIKES <i className="fas fa-angle-down" />
                                                    </Link>
                                                    <div className="show-dropdown">
                                                        <div className="container">
                                                            <div className="row col-12">
                                                                <div className="col-md-4 dropdown-column">
                                                                    <img src="./img/casual-bike.png" alt="" height="60" />
                                                                    <p className="text-uppercase title-dropdown">Urban<span className="d-block font-weight-bold"> Bikes</span></p>
                                                                    <div className="dropdown-divider"></div>
                                                                    <Link to="/products" className="item-dropdown" name="Performance" id="category"
                                                                        onClick={showProduct}>Performance</Link>
                                                                    <Link to="/products" className="item-dropdown" name={"Adventure & Gravel"} id="category"
                                                                        onClick={showProduct}>Adventure {"&"} Gravel</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Cyclocross" id="category"
                                                                        onClick={showProduct}>Cyclocross</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Hybrid" id="category"
                                                                        onClick={showProduct}>Hybrid bikes</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Urban Bike" id="type"
                                                                        onClick={showProduct}>Urban Bikes</Link>
                                                                </div>
                                                                <div className="col-md-4 dropdown-column">
                                                                    <img src="./img/mountain-bike.png" alt="" height="60" />
                                                                    <p className="text-uppercase title-dropdown">Mountain<span className="d-block font-weight-bold"> Bikes</span></p>
                                                                    <div className="dropdown-divider"></div>
                                                                    <Link to="/products" className="item-dropdown" name="XC" id="category"
                                                                        onClick={showProduct}>XC</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Trail" id="category"
                                                                        onClick={showProduct}>Trail</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Downhill" id="category"
                                                                        onClick={showProduct}>Downhill</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Fat" id="category"
                                                                        onClick={showProduct}>Fat</Link>
                                                                    <Link to="/products" className="item-dropdown" name="BMX" id="category"
                                                                        onClick={showProduct}>BMX</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Mountain Bike" id="type"
                                                                        onClick={showProduct}>Mountain Bikes</Link>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <img src="./img/road-bike.png" alt="" height="60" />
                                                                    <p className="text-uppercase title-dropdown">Road<span className="d-block font-weight-bold"> Bikes</span></p>
                                                                    <div className="dropdown-divider"></div>
                                                                    <Link to="/products" className="item-dropdown" name="Performance" id="category"
                                                                        onClick={showProduct}>Performance</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Cyclocross" id="category"
                                                                        onClick={showProduct}>Cyclocross</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Gravel" id="category"
                                                                        onClick={showProduct}>Gravel</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Trail" id="category"
                                                                        onClick={showProduct}>Trail</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Road Bike" id="type"
                                                                        onClick={showProduct}>Road Bikes</Link>
                                                                    <Link to="/products" className="item-dropdown" name="Road Bike" id="type"
                                                                        onClick={showProduct}>Something else here</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="dropdown-menu">
                                                    <Link to="/products" onClick={showProduct} className="nav-link">PRODUCT TYPES <i className="fas fa-angle-down" />
                                                    </Link>
                                                    <div className="show-dropdown-menu">
                                                        <Link to="/products" className="text-dropdown">Bikes</Link>
                                                        <Link to="/products" className="text-dropdown">Performance</Link>
                                                        <Link to="/products" className="text-dropdown">Something else here</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/products" className="nav-link">
                                                    BIKE TOOLS
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/about" className="nav-link">
                                                    ABOUT US
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Nav>)
                }}</ProductConsumer>
        );
    }
}
const Nav = styled.div`
    .show-nav {
        position: fixed;
        left: 0;
        bottom: 0;
        top: 60px;
        margin: 0;
        padding: 0;
        width: 320px;
        height: 100%;
        background: #fff;
        box-shadow: 0 3px 27px rgba(0,0,0,.24);
        text-align: left;
        overflow: auto;
        display: none;
        animation-name: modalFadeNav;
        animation-duration: 0.7s;
    }
    .nav-link, .dropdown, .dropdown-menu {
        display: block;
        line-height: 2.1;
    }    
    .cart {
        border: 1px solid #fff;
        font-size: 1.2rem;
        padding: 6px 10px;
        margin-right: 10px;
        cursor: pointer;
        color: #fff;
        background: #3793e4;
        border: none;
        width: 40px;
        height: 40px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        &:hover {
            color: #3793e4;
            background: #f5f5f5;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
        }
        &:focus {
            outline: none;
        }
    }
    .cart-quantity {
        font-weight: bold;
        font-size: 15px;
    }
    .user {
        padding: 5px 10px;
        border: 1px solid lightgrey;
        color: #1b222a;
        background: lightgrey;
        font-size: 1.2rem;
        cursor: pointer;
        width: 40px;
        height: 39px;
        background: #f5f5f5;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    }
    .user-menu {
        position: absolute;
        z-index: 9999;
        right: 0;
    }
    .user-content {
        background: #fff;
        box-shadow: 0 3px 27px rgba(0,0,0,.24);
        text-align: left;
        padding: 22px 16px 34px 38px;
        margin-top: 5px;
        margin-right: 15px;
        .item {
            display: block;
            color: #777;
            font-size: 13px;
            line-height: 16px;
            font-weight: 400;
            padding: 3px 0;
            &:hover {
                color: var(--lightBlue)!important;
                cursor: pointer;
            }
        }
    }
    .search-bar {
        display: inline-block;
        margin-right: 10px;
        .form-control {
            height: 40px;
            border-radius: 0;
            border: none;
            margin-bottom: 3px;
        }
        .btn {
        background: #1b222a;
        border-radius: 0;
        font-size: 1.2rem;
        padding: 6px 10px;
        margin-right: 10px;
        cursor: pointer;
        border: none;
        margin-bottom: 3px;
        height: 40px;
        width: 40px;
        }
    }
    .dropdown, .dropdown-menu {
        position: static!important;
        cursor: pointer;
        padding:0;
        margin: 0;
    }
    .show-dropdown {
        position: absolute;
        z-index: 9999;
        background: #fff;
        transition: all 0.3s ease-in-out;
        display: none;
        padding: 20px 0px;
        cursor: default;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        animation-name: modalFadeNav;
        animation-duration: 0.7s;
        .container {
            max-width: none;
        }
        .dropdown-column {
            border-right: 1px solid lightgrey;
            padding: 0 23px;
        }
        .title-dropdown {
            color: #000;
            margin-top: 15px;
            font-weight: bold;
            line-height: 20px;
        }
        .item-dropdown {
            margin: 0;
            padding: 5px 0;
            font-size: 14px;
            line-height: 1.3;
            text-align: left;
            color: #6c757d;
            cursor: pointer;
            &:hover {
                color: var(--lightBlue);
            }
        }
    }
    .dropdown-menu {
        background: none;
        border: none;
        .text-dropdown {
            color: #000;
            cursor: pointer;
            margin: 0;
            &:hover {
                color: var(--lightBlue);
            }
        }
    }
    .dropdown:hover .show-dropdown {
        display: block;
    }
    .show-dropdown-menu {
        position: absolute;
        z-index: 9999;
        background: #fff;
        transition: all 0.3s ease-in-out;
        display: none;
        padding: 20px;
        line-height: 1;
        cursor: default;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        animation-name: modalFadeNav;
        animation-duration: 0.7s;
    }
    .dropdown-menu:hover .show-dropdown-menu {
        display: block;
    }
    .navbar-icons {
        display: none;
        font-size: 1.5rem;top: 13px;
        position: absolute;
        right: 70px;
        .cart-icon {
            font-size: 1.5rem;
            padding: 0;
            color: #fff;
            text-decoration: none;
            &:hover{
            }
        }
        .user-icon {
            color: #fff;
            font-size: 1.5rem;
            border: none;
            background: none;
            margin: 0 10px;
            .fa-user {
                transform: rotate(0deg);
                transition: transform 0.1s linear;
            }
            .fa-times {
                transform: rotate(90deg);
                transition: transform 0.1s linear;
            }
        }
        .user-content {
            position: fixed;
            right: 0px;
            top: 60px;
            width: 320px;
            height: 100%;
            background: #fff;
            box-shadow: 0 3px 27px rgba(0,0,0,.24);
            transition: .3s ease;
            text-align: left;
            overflow: auto;
            margin-top: 0;
            margin-right: 0;
            padding: 0;
            .item {
                color: #888;
                font-size: 14px;
                line-height: 16px;
                font-weight: 700;
                padding: 17px 16px;
                border-bottom: 1px solid #f0f0f0;
                &:hover {
                    color: var(--lightBlue)!important;
                    text-decoration: none;
                }
            }
        }
        .search-bar-icon input {
            flex-grow: 2;
            border: none;
        }
        .search-bar-icon input:focus {
            outline: none;
        }
        .search-bar-icon {
            position: absolute;
            top: -5px;
            right: -45px;
            font-size: 1rem;
            padding: 0;
            color: #fff;
            text-decoration: none;
            display: flex;
            .btn {
                background: none;
                border: none;
                font-size: 1.5rem;
                pointer-events: none;
            }
            .search-input {
                color: white;
                border: 0;
                outline: 0;
                background: none;
                width: 0;
                caret-color:transparent;
                z-index: 1000;
            }
        }
        
        .search-bar-icon:hover > .search-input{
                position: absolute;
                padding: 0 10px;
                width: 100%;
                top: 0;
                left: 0;
                right: 0;
                border-radius: 0;
                caret-color:red;
                overflow: hidden;
                color: #000;
                background: #fff;
                position: fixed;
                height: 60px;
        }
        
        .search-bar-icon:hover > .search-icon{
                color: var(--lightBlue);
                z-index: 99999;
        }
    }
    @media screen and (max-width: 767px) {
        .show-dropdown {
            max-height: 375px;
            overflow-y: scroll;
        }
        .show-dropdown, .show-dropdown-menu {
            left: 10px;
            right: 10px;
            height: 445px;
            .dropdown-column {
                border: none;
            }
            img {
                display: none;
            }
            .item-dropdown, .text-dropdown {
                margin: 0 0 5px;
                font-size: 14px;
                text-align: left;
            }
        }
        .nav-center {
            background: #1b222a;
            box-shadow: none;
        }
        .nav-icon {
            transform: rotate(0deg);
            transition: transform 0.1s linear;
        }
        .close-nav {
            transform: rotate(90deg);
            transition: transform 0.1s linear;
        }
        .nav-icons {
            display: none;
        }
        .navbar-icons {
            display: block;
        }
        .search-bar {
            display: none;
        }
        .fa-angle-down {
            float: right;
        }
    }
    .nav-center {
        height: 60px;
    }
    .nav-middle {
        text-align: center;
    }
    .nav-icons {
        text-align: right;
    }
    @keyframes modalFadeNav {
        from {transform: translateY(-10%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }
    @media screen and (max-width: 767px) {
        .show-nav {
            display: block;
        }
        *:focus {
          outline: none;
        }
        .nav-middle {
            margin-top: 60px;
            .text-brand {
              margin-bottom: 20px;
            }
        }
        .nav-center {
            position: fixed;
            top: 0;
            z-index: 99;
            }
            .nav-link {
                padding: 17px 16px;
            }
            .nav-link, .dropdown, .dropdown-menu {
                color: #888;
                font-size: 14px;
                line-height: 16px;
                font-weight: 700;
                width: 100%;
                border-bottom: 1px solid #f0f0f0;
                text-align: left;
                float: left;
                z-index: 10000;
                &:hover {
                    color: var(--lightBlue);
                }
            }
            .show-dropdown-menu {
                height: auto;
                line-height: 2;
                overflow-y: none;
            }
        }
        
    }
`