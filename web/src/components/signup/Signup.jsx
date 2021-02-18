import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function Signup() {
    let url ='http://localhost:5000'
    let [userData, setUserData] = useState([])

    function signup(event) {
        event.preventDefault();

        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let password = document.getElementById('password').value
        let newData = {
            name: name,
            email: email,
            password: password,
            phone: phone
        }
        setUserData(previousValue => {
            return previousValue.concat([newData]);
        })
        axios({
            method: 'post',
            url: url + '/signup',
            data: newData,
            withCredentials: true
        }).then((response) => {
                // alert(response.data.message)
                console.log(response.data.message)
        }).catch((error) => {
            console.log(error);
        });
    }



    return (
        <div>
            <div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5 form'>
                            <h1 className="text-center">Signup</h1>
                            <form onSubmit={signup}>
                                <div className="form-col">
                                    <div className="col">
                                        <input type="text" className="form-control"
                                            placeholder="Name" required id='name' />
                                    </div><br />
                                    <div className="col">
                                        <input type="email" className="form-control"
                                            placeholder="Email" required id="email" />
                                    </div><br />
                                    <div className="col">
                                        <input type="text" className="form-control"
                                            placeholder="Phone" required id='phone' />
                                    </div><br />
                                    <div className="col">
                                        <input type="password" className="form-control"
                                            placeholder="Password" required id="password" />
                                    </div><br />
                                    <div className="col">
                                        <button className='btn btn-primary'>Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup