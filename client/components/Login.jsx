import React from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';



const Login = ({ setSSID }) => {

    const navigator = useNavigate()

    let loginHandler = () => {

        let username = document.querySelector('#loginUsername').value;
        let password = document.querySelector('#loginPassword').value;

        const userInfo = {
            username: username,
            password: password
        };

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(userInfo)
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.err) {
                    alert(res.err)
                }
                else {
                    setSSID(res)
                    navigator('/dashboard')
                }
            })
    };

    return (
        <div id='inputBox'>
            <div className='logo'>
                <img className='logoPic' src="https://drive.google.com/uc?export=view&id=1v0179NE5pCP1n3ZWIv51ij3ww4cEeBpV" width="200">
                </img>
                <text className='chicText'>HIC</text>
            </div>
            <input id='loginUsername' className='input' placeholder='USERNAME'></input>
            <input id='loginPassword' className='input' placeholder='PASSWORD'></input>
            <button id='signupLoginButton' onClick={loginHandler}>LOGIN</button>
            <Link id='userLink' to='/signup'>
                CLICK HERE TO SIGNUP
            </Link>
        </div>
    )
}

export default Login