import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Cart from './cart/Cart'
import {
    useHistory
} from "react-router-dom";
import { useGlobalState, useGlobalStateUpdate } from '../../context/globalContext'
function Dashboard(prpos) {
    let url = 'http://localhost:5000'
    // let [userData,setUserData] = useState()
    let history = useHistory()

    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()
    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: url + '/profile',
    //         withCredentials: true
    //     }).then((response) => {
    //         console.log(response.data.profile)
    //         // setUserData(response.data.profile)
    //     }).catch((error) => {
    //         console.log(error);
    //         // history.push("/Login");
    //     });
    // }, [])
    function logout() {
        axios({
            method: 'post',
            url: url + '/logout',
        }).then((response) => {
            console.log(response)
            // history.push("/Login");
        }, (error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <h1>Dashboard</h1>
            {globalState.user ?
                <div>
                    <h2>{globalState.user.name}</h2>
                    <h2>{globalState.user.email}</h2>
                    <h2>{globalState.user.phone}</h2>
                </div> : null}
            <Cart />
        </div>
    )
}

export default Dashboard