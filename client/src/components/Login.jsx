import React, {useState, useEffect} from 'react';
import '../styles/Login.css';
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';

export default function Login() {
    
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const logIn = (e) => {
        e.preventDefault();
        Axios.get("http://localhost:3001/login", { params: { userName: name, userPassword: password } })
        .then((request) => {

            if (Object.keys(request.data).length === 0) {
                alert("check your username or password")
            } else {
                localStorage.setItem("userId", request.data[0].userId)
                navigate("/Profile")
            }
        })
    }

    useEffect(() => {
        localStorage.removeItem("userId");
    }, []);

  return (
    <div>
        <section className='login-section'>
            <form className='login' onSubmit={(e) => {logIn(e)}}>
                <label htmlFor="username"  className='login-labels'>Name</label>
                <input onChange={(e) => {setName(e.target.value)}} type="text" className='login-inputs' required/>
                <label htmlFor="username" className='login-labels'>password</label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" className='login-inputs' required/>
                <button id='login-btn'>log in</button>
            </form>
        </section>
        <footer id='login-footer'>
            <div className='login-footer-rights'>
                <div className='login-footer-title-github'>
                    <h1>Code Box</h1>
                    <p>Github</p>
                </div>
                <span>© 2022 code.box. All rights reserved.</span>
            </div>
            <div className='login-footer-logo'>
                <img src={require("../images/logo-Pt2-white.png")} alt="" />
            </div>
            <div className='login-footer-links'>
                <ul>
                    <li>Legal</li>
                    <li>Privacy</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
