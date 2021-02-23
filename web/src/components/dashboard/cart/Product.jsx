import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Dashboard.css'
import { CartItem } from './CartItem'
function Product() {

    var data = [
        {
            id: "0",
            title: "Gulab Jamun",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIzPG7QVNADMArbIbX4OhffyBsKH62OOxbw&usqp=CAU",
            price: "500"
        },
        {
            id: "1",
            title: "Chamcham",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIzPG7QVNADMArbIbX4OhffyBsKH62OOxbw&usqp=CAU",
            price: "500"
        },
        {
            id: "2",
            title: "Rabri",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIzPG7QVNADMArbIbX4OhffyBsKH62OOxbw&usqp=CAU",
            price: "800"
        }
    ]

    return (
        <div>
            <div className='row'>
                {
                    data.map(item => {
                        return (
                            <div className='col-md-3 cart ml-5 mr-4' key={item.id}>
                                <CartItem title={item.title} price={item.price}
                                    imgUrl={item.imgUrl} key={item.id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product