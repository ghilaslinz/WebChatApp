import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
import webchat from './webchat.png'
function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src={webchat} alt="" />
                <div className="login_text">
                    <h1>Sign in to WebChat</h1>
                </div>
                <Button variant="contained"  type="submit" onClick={signIn} >Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
