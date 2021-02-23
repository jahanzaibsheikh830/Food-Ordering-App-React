import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './../home/Home.jsx'
import Login from './../login/Login.jsx'
import Signup from './../signup/Signup.jsx'
import Dashboard from './../dashboard/Dashboard.jsx'
import ForgetPw from './../forgetPw/ForgetPassS1'
import { useGlobalState, useGlobalStateUpdate } from '../../context/globalContext'
function RoutesConfig() {
    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()

    return (
        <div>
            <Router>
                {/* <Switch> */}
                    {globalState.loginStatus === false ?
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/forgetpw" component={ForgetPw} /> </div> : null}

                    {globalState.loginStatus === true ?
                        <Route exact path="/dashboard" component={Dashboard} /> :
                        <Route path="/dashboard" component={Login} />}
                {/* </Switch> */}
            </Router>
        </div>
    );
}
export default RoutesConfig