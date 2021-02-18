import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
function Home(){
    return(
        <div>
            <Navbar/>
            <h1 className="text-center">Welcome To Launch Break Food Ordering</h1>
        </div>
    )
}

export default Home