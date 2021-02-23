import React, { useState } from 'react'
import '../Dashboard.css'
import { useGlobalState, useGlobalStateUpdate } from '../../../context/globalContext'
function Cart() {
    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()
    const [qty,setQty] = useState(0)
    function add(){
        setQty(prev => prev +1)
    }
    function remove(){
        setQty(prev => prev -1)
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 bucket">
                    {
                        globalState.cart.map((value, index) => {
                            return (
                                <div key={index}>
                                    <div className='row'>
                                        <div className="col-md-4">
                                            <span>Product Name: {value.title}</span>
                                        </div>
                                        <div className="col-md-4">
                                            <span>
                                            <button className="btn btn-primary" onClick={()=> add(index)}>+</button>
                                            <span>{qty}</span>
                                            <button className="btn btn-primary" onClick={()=> remove(index)}>-</button>
                                            </span>
                                        </div>
                                        <div className="col-md-4">
                                            <span>Price: {value.price}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart