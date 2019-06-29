import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import Product from './Product';
import styled from 'styled-components';

export default class ProductList extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { productList: products, order, handleChangeSort, pageSize, setPageSize,
                        sortedProducts } = value;
                    if (products.length === 0) {
                        return (
                            <div className="container">
                                <div className="row p-5">
                                    <div className="empty-search">
                                        <h3>Unfortunately no products matched your search parameters</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    let items = products.map(product => {
                        return <Product key={product.id}
                            product={product} />
                    })
                    return (
                        <List>
                            <form className="form-sort">
                                <div className="form-text">
                                    <select name="order" id="order" value={order} className="form-control"
                                        onChange={handleChangeSort}>
                                        <option value="default">Default sorting</option>
                                        <option value="lowests">Price: low to high</option>
                                        <option value="highests">Price: high to low</option>
                                    </select>
                                </div>
                                <div className="form-text">
                                    {value.pageSize <= sortedProducts.length ?
                                        <span className="text-muted font-weight-bold text-form-sort">
                                            Showing {value.productList.length} of {sortedProducts.length} results
                                                    </span> :
                                        <span className="text-muted font-weight-bold text-form-sort">
                                            Showing {sortedProducts.length} of {sortedProducts.length} result{sortedProducts.length > 1 ? "s" : ''}
                                        </span>}
                                </div>
                                <div className="form-text">
                                    <span className="text-muted font-weight-bold text-form-sort mr-2">Show</span>
                                        <select name="pageSize" id="pageSize" value={pageSize} className="form-control page-control"
                                        onChange={setPageSize}>
                                        <option value="3">3</option>
                                        <option value="9">9</option>
                                        <option value="15" className="option">15</option>
                                        <option value="30" className="option">30</option>
                                    </select>
                                </div>
                                <div className="form-text mt-3">
                                    <button type="button" className="mx-2 btn btn-grid" onClick={() => { value.changeView() }}
                                        disabled={value.grid ? true : false}>
                                        <i className="fa fa-th-large mx-1" /></button>
                                    <button type="button" className="btn btn-list" onClick={() => { value.changeView() }}
                                        disabled={value.grid ? false : true}>
                                        <i className="fa fa-bars mx-1" /></button>
                                </div>
                            </form>
                            <div className="row py-5 mb-5 product-list">
                                {items}
                            </div>
                            <div className="pagination">
                                <div className="pagination-controls">
                                    {value.createControls()}
                                </div>
                                <div className="form-text mt-2">
                                    <button type="button" className="mx-2 btn btn-grid" onClick={() => { value.changeView() }}
                                        disabled={value.grid ? true : false}>
                                        <i className="fa fa-th-large mx-1" /></button>
                                    <button type="button" className="btn btn-list" onClick={() => { value.changeView() }}
                                        disabled={value.grid ? false : true}>
                                        <i className="fa fa-bars mx-1" /></button>
                                </div>
                            </div>
                        </List>
                    )
                }}
            </ProductConsumer>
        )
    }
}
const List = styled.div`
    background: #f2f3f7;
    min-height: 1000px;
    .form-sort {
        background: #fff;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 25px;
        font-size: 12px;
        margin-top: 50px;
        padding: 20px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }
    .form-text {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text-form-sort {
        font-size: 12px;
    }
    .form-control {
        font-size: 14px;
        padding: 5px;
    }
    .page-control {
        max-width: 55px;
    }
    .btn {
        color: #fff;
        background: #1b222a;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
    }
    @media screen and (max-width: 768px) {
        .form-control {
            font-size: 12px;
        }
        .pagination {
            display: block;
            margin: 0 auto;
            text-align: center;
            padding: 2rem;
            .btn {
                margin-top: 10px;
            }
        }
        .form-text {
            margin: 0 auto;
        }
    }
`