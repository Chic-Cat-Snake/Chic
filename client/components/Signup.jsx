import React from 'react'
import styles from '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';

//Look into what useNavigate does in react router
//useNavigator seems like its making a redirection

// On line 49 fix that route the to sends to the wrong location

const Signup= ({ setSSID }) => {

    const navigator = useNavigate()

    let singupHandler = () => {

        let username =  document.querySelector('#loginUsername').value;
        let password = document.querySelector('#loginPassword').value;

        const userInfo = {
            username: username,
            password: password
        };

        fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-type' : 'Application/JSON'
            },
            body: JSON.stringify(userInfo)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.err){
                alert(res.err)
             }
             else{
             setSSID(res)
             navigator('/dashboard')
             }
        })
        .catch(err => console.log('error from fetch:', err));
    };

return (
    <>
    <div id='loginBox'>
        <img id='logo' src='https://www.wrkmode.com/images/id/logo_chic.gif'></img>
        <input id='loginUsername' placeholder='username'></input>
        <input id='loginPassword' placeholder='password'></input>
        <button id='loginButton' onClick= {singupHandler}>Sign Up</button>
        <Link id='signupLink' to='/dashboard' style= {{margin : 10}}>
            Click here to login
        </Link>
    </div>
    </>
    )
}
export default Signup;