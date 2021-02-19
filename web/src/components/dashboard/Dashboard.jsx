import React ,{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function Dashboard(){
    let url = 'http://localhost:5000'
    let [userData,setUserData] = useState()
    useEffect(()=>{
        axios({
            method: 'get',
            url: url + '/profile',
            withCredentials: true
        }).then((response) => {
            // alert(response.data.message)
            console.log(response.data.profile)
            setUserData(response.data.profile)
        }).catch((error) => {
            console.log(error);
        });
    },[])
    console.log(userData)
    return(
        <div>
            <h1>Dashboard</h1>
            {userData? 
            <div>
            <h2>{userData.name}</h2>
            <h2>{userData.email}</h2>
            <h2>{userData.phone}</h2>
            </div> : null}
        </div>
    )
}

export default Dashboard