import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
function Login() {
    let url = 'http://localhost:5000'
    let [userData, setUserData] = useState([])

    function login(event) {
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
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-5 form'>
                        <h1 className="text-center">Login</h1>
                        <form onSubmit={login}>
                            <div className="form-col">
                                <div className="col">
                                    <input type="email" className="form-control"
                                        placeholder="Email" required />
                                </div><br />
                                <div className="col">
                                    <input type="password" className="form-control" placeholder="Password" />
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