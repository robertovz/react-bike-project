import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default class ProductFilter extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { handleChange, filterItem, title, items, setSearchProducts, removeCompare, brand, speed, wheel,
                        price, minPrice, maxPrice, search, compare, material, category } = value;
                    let types = getUnique(items, "company");
                    types = ["All", ...types];
                    types = types.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })
                    let categories = '';
                    if (value.title === '') {
                        categories = getUnique(items, "type");
                        categories = [...categories];
                        categories = categories.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link to="/products" name={item} id="type" onClick={filterItem}
                                        className="item-filter">
                                        {item}s</Link>
                                </div>
                            )
                        })
                    } else {
                        categories = getUnique(items, "category");
                        categories = [...categories];
                        categories = categories.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link to="/products" name={item} id="category" onClick={filterItem}
                                        className="item-filter">
                                        {item}</Link>
                                </div>
                            )
                        })
                    }
                    let style = getUnique(items, "material");
                    style = style.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link to="/products" name={item} onClick={filterItem} id="material"
                                    className="item-filter">{item}
                                </Link>
                            </div>
                        )
                    })
                    let itemSpeed = getUnique(items, "speed");
                    itemSpeed = itemSpeed.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link to="/products" name={item} onClick={filterItem} id="speed"
                                    className="item-filter">{item}
                                </Link>
                            </div>
                        )
                    })
                    let itemWheelSize = getUnique(items, "wheel");
                    itemWheelSize = itemWheelSize.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link to="/products" name={item} onClick={filterItem} id="wheel"
                                    className="item-filter">{item} Inch
                                </Link>
                            </div>
                        )
                    })
                    let compared = [];
                    if (compare.length >= 1) {
                        compared = [...compared];
                        compared = compare.map((item, index) => {
                            return (<span key={index} className="d-block my-2"> {item.title}
                                <div className="remove-icon-btn">
                                    <i className="fas fa-trash" onClick={() => removeCompare(item.id)}></i>
                                </div>
                            </span>
                            )
                        })
                    } else if (compare.length === 4) {
                        compared = <span className="text-muted">Basket is full</span>
                    }
                    return (<>
                        <FilterContainer className="py-5">
                            <form className="filter-form">
                                <div className={material !== '' || title !== '' || speed !== '' || wheel !== '' ? "form-group filter-items" : "d-none"}>
                                    <p className="filter-title">Now Shopping by</p>
                                    <div className={title !== '' ? "text-muted filter-value" : "d-none"}>Category:
                                    {category === "" ? " "+title : " "+title + " > " + category}
                                        <Link to="/products" name="" className="remove-icon-btn" id={category !== "" ? "category" : "type"} onClick={filterItem} >
                                            x
                                         </Link>
                                    </div>
                                    <div className={material !== '' ? "text-muted filter-value" : "d-none"}>Frame material: {material}
                                        <div className="remove-icon-btn">
                                            <Link to="/products" name="" className="remove-icon-btn" id="material" onClick={filterItem} >
                                            x
                                         </Link>
                                        </div>
                                    </div>
                                    <div className={speed !== '' ? "text-muted filter-value" : "d-none"}>Speed: {speed}
                                        <div className="remove-icon-btn">
                                            <Link to="/products" name="" className="remove-icon-btn" id="speed" onClick={filterItem} >
                                            x
                                         </Link>
                                        </div>
                                    </div>
                                    <div className={wheel !== '' ? "text-muted filter-value" : "d-none"}>Wheel Size: {wheel}
                                        <div className="remove-icon-btn">
                                            <Link to="/products" name="" className="remove-icon-btn" id="wheel" onClick={filterItem} >
                                            x
                                         </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group range-price">
                                    <label htmlFor="price" className="price">product price ${price}</label>
                                    <input type="range" name="price" id="price" min={minPrice}
                                        max={maxPrice} value={price} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="type" className="text-uppercase font-weight-bold mt-3">Brand:</label>
                                    <select name="brand" id="brand" value={brand} className="form-control"
                                        onChange={handleChange}>
                                        {types}
                                    </select>
                                </div>
                                <div className={category === '' ? "form-group" : "d-none"}>
                                    <label htmlFor="type" className="text-uppercase font-weight-bold">Categories</label>
                                    {categories}
                                </div>
                                <div className={material === '' ? "form-group" : "d-none"}>
                                    <label htmlFor="type" className=
                                        "text-uppercase font-weight-bold">Frame Material</label>
                                    {style}
                                </div>
                                <div className={speed === '' ? "form-group" : "d-none"}>
                                    <label htmlFor="type" className="text-uppercase font-weight-bold">Speed</label>
                                    {itemSpeed}
                                </div>
                                <div className={wheel === '' ? "form-group" : "d-none"}>
                                    <label htmlFor="type" className="text-uppercase font-weight-bold">Wheel Size</label>
                                    {itemWheelSize}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="search" className="text-uppercase font-weight-bold">Search by name:</label>
                                    <input className="form-control search-input" type="text" placeholder="Search"
                                        aria-label="Search" name="filter" id="search" value={search} onChange={setSearchProducts} />
                                    <Link to="/products">
                                        <button className="btn btn-outline-dark pull-right search-btn"><i className="fas fa-search" /></button>
                                    </Link>
                                </div>
                                <div className="form-group">
                                    <h5 className="text-uppercase font-weight-bold">compare
                                                <span className="d-block font-weight-bold">products</span></h5>
                                    {compared.length === 0 ? <span className="text-muted text-compare my-2">You have no items to compare</span> :
                                        <span className="text-muted text-compare">You have <span className="text-bright font-weight-bold">{compared.length} {compared.length === 1 ?
                                            "item" : "items"}</span> to compare</span>}
                                    <span className="items-compare">{compared}</span>
                                    <button type="button" className="btn btn-compare  mt-2 text-center"
                                        disabled={compare.length >= 1 ? false : true}
                                        onClick={() => { value.openFilterModal(compare); }}>Compare</button>

                                </div>
                            </form>
                        </FilterContainer>
                    </>
                    );
                }}
            </ProductConsumer>
        )
    }
}

const FilterContainer = styled.div`
    transition: all 0.3s linear!important;
    background: #f2f3f7;
    .range-price {
        background: #1b222a;
        color: #fff;
        padding: 20px;
        text-align: center;
    }
    .fa-times {
        cursor: pointer;
        color: red;
    }
    .fa-trash {
        color: #dc3545;
        float: right;
        cursor: pointer;
    }
    .filter-form {
        background: #fff;
        width: 100%;
        margin: 0 auto;
        display: grid;
        transition: all 0.3s linear!important;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }
    .filter-items {
        background: #ddd;
        padding: 15px;
        font-size: 15px;
        line-height: 1.2;
        .filter-title {
            font-size: 17px;
            font-weight: bold;
            line-height: 1.7;
        }
        .filter-value {
            padding: 10px 0;
        }
    }
    .form-group {
        padding: 12px 20px;
        text-transform: capitalize;
        .price {
            line-height: 2;
        }
    }
    .form-group label {
        display: block;
        letter-spacing: 0.5;
        margin-bottom: 0.5rem;
        line-height: 0.9;
    }
    .text-compare {
        text-transform: none;
    }
    .search-input {
        width: 79%;
        display: inline;
    }
    .search-btn {
        width: 21%;
    }
    .btn-compare {
        width: 100%;
    }
    #price {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 20px;
        -webkit-appearance: none;
        padding: 0px;
        &:focus {
            outline: none;
        }
        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 1px;
            cursor: pointer;
            box-shadow: none;
            background: #ffffff;
            border-radius: 0px;
            border: 0px solid #010101;
        }
        &::-webkit-slider-thumb {
            box-shadow: none;
            box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
            height: 32px;
            width: 12px;
            border-radius: 22px;
            background: var(--lightBlue);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -15px;
        }
      &::-moz-focus-outer {
        border: 0;
        }
    }
    .form-control-input {
        margin-top: 1px;
        padding: 6px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .item-filter {
        color: #6C757D;
        line-height: 1.9;
        &:hover {
            color: var(--lightBlue);
            text-decoration: none;
        }
    }
    .single-extra label {
        display: inline-block;
        font-size: 0.9rem;
        margin-left: 0.5rem;
    }
    .items-compare {
        width: 100%;
        clear: both!important;
        display: block;
    }
    .btn {
        color: #fff;
        background: #1b222a;
    }
    .remove-icon-btn {
        font-size: 18px;
        float: right
        color: #dc3545;
        background: none;
        border: none;
        &:focus {
            background: none;
            border: none;
        }
        i {
            cursor: pointer;
        }
    }
`;