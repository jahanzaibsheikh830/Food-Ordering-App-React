import React from "react";
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Food</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Dashboard">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success " >
                        <Link className="nav-link" to="/Login">Login<span className="sr-only">(current)</span></Link>
                    </button>
                    <button className="btn btn-outline-success ml-4" > <Link className="nav-link" to="/Signup">Signup <span className="sr-only">(current)</span></Link>
                    </button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar