import React, { useState } from 'react'
import CartData from './CartData'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Dashboard.css'
function Cart() {
    let [qty, setQty] = useState(0)

    function add(id) {
        // console.log(id)
        setQty(prev => {
            return prev + 1
        })
    }
    function remove() {
        setQty(prev => {
            return prev - 1
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-md-6'>
                        {CartData.map((value, index) => {
                            return (
                                <div id={value.id} key={index}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={value.imgUrl} alt="" width="80" />
                                        </div>
                                        <div className="col-md-2">
                                            <p>{value.title}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{value.price}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <button className="btn btn-primary" onClick={(e) => {
                                                        add(index)
                                                    }}>+</button>
                                                </div>
                                                <div className="col-md-4 ">
                                                    <span className="ml-3">{qty}</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="btn btn-primary" onClick={remove}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 ml-3">
                                            <button className="btn btn-primary">Add to Cart</button>
                                        </div>
                                    </div><br />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-6 addToCart">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart