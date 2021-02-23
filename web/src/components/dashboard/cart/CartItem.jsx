import React from 'react'
import { useGlobalState, useGlobalStateUpdate } from '../../../context/globalContext'

export function CartItem(props) {
    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()
    console.log(globalState)
    // var a = { ...globalState, cart: ["hello", "world"] }
    // console.log("New", a)
    function addToCart() {
        const product = { title: props.title, price: props.price }
        setGlobalState(curr => ({
            ...curr,
            cart: [...curr.cart, product]
        }))
        // console
    }
    // console.log(props)
    return (
        <div>
            <div className="container">
                <div key={props.id}>
                    <img src={props.imgUrl} alt="" />
                    <h3>{props.title}</h3>
                    <h3>{props.price}</h3>
                    <button className="btn btn-primary" onClick={addToCart} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}