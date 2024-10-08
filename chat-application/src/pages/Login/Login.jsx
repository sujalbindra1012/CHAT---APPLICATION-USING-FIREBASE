import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login ,logout} from '../../config/firebase'

const Login = () => {

    const [currState, setCurrState] = useState("Sign up");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === "Sign up") {
            signup(userName, email, password);
        }
        else {
            login(email, password)
        }
    }

    return (
        <div className='login'>
            <img src={assets.logo_big} alt="" className='logo' />
            <form onSubmit={onSubmitHandler} className='login-form'>
                <h2>{currState}</h2>
                {currState === "Sign up" ? <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" className='form-input' placeholder='username' required /> : ""}
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='form-input' placeholder='Email Address' required />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='form-input' placeholder='password' />
                <button type='submit'>{currState === "Sign up" ? "Create Account" : "Login Now"}</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy .</p>
                </div>
                <div className="login-forgot">
                    {currState === "Sign up"
                        ? <p className="login-toggle">Already have an account <span onClick={() => setCurrState("Login")}>Login here</span></p> :
                        <p className="login-toggle">Create an account <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
                    }


                </div>
            </form>

        </div>
    )
}


export default Login
