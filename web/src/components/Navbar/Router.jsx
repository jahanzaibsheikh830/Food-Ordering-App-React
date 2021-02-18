import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './../home/Home.jsx'
import Login from './../login/Login.jsx'
import Signup from './../signup/Signup.jsx'
import Dashboard from './../dashboard/Dashboard.jsx'
 function RoutesConfig(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Signup" component={Signup}/>
                    <Route path="/Dashboard" component={Dashboard}/>
                    <Route path="*" component={()=><h1>404 Page Not Found</h1>}/>
                </Switch>
            </Router>
        </div>
    );
}
export default RoutesConfig