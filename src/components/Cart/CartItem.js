import React from 'react'

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="container">
            <div className="row text-capitalize my-3 text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{ width: '8rem', height: '5.5rem' }}
                        className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-lg-2 mt-2">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2 mt-2">
                    <span className="d-lg-none">price : </span>
                    $ {price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center mt-2">
                        <div>
                            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-
                    </span>
                            <span className="btn mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+
                    </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 mt-2">
                    <div className="btn btn-danger remove-icon" onClick={() => removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 mt-2">
                    <strong>$ {total.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</strong>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    )
}
