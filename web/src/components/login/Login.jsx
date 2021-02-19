import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Login.css'
import {
    useHistory
} from "react-router-dom";
function Login() {
    let url = 'http://localhost:5000'

    let history = useHistory()
    function handleClick() {
        history.push("/Dashboard");
    }
    function login(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: url + '/login',
            data: {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            },
            withCredentials: true
        }).then((response) => {
            // alert(response.data.message)
            handleClick()
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-5 form'>
                        <h1 className="text-center">Login</h1>
                        <form onSubmit={login}>
                            <div className="form-col">
                                <div className="col">
                                    <input type="email" className="form-control"
                                        placeholder="Email" required id="email" />
                                </div><br />
                                <div className="col">
                                    <input type="password" className="form-control"
                                        placeholder="Password" required id="password" />
                                </div><br />
                                <div className="col">
                                    <button className='btn btn-primary' type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login