import Button  from '@material-ui/core/Button'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className ="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                <h1>Sign in to Abhishek's Dev Community</h1>
                <p>abhishek.dev.slack.com</p>
                <Button onClick={signIn} >Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
