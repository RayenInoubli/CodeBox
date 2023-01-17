import React, {useState} from 'react';
import '../styles/Signup.css';
import Axios from 'axios';
import uuid from 'react-uuid';
import {useNavigate} from 'react-router-dom';


export default function Signup() {
    
    const [username, setUsername] = useState();
    const [usermail, setUsermail] = useState();
    const [userpassword, setUserpassword] = useState();

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/signup",{
            userId: uuid(),
            userName: username,
            userPassword: userpassword,
            userEmail: usermail
        }).then(() => {
            console.log("inserted successfuly");
        });
        navigate("/Login");
    }

  return (
    <div>
        <section className='signup-section'>
            <form className='signup' onSubmit={(e) => {signUp(e)}}>
                <label htmlFor="username" className='signup-labels'>username</label>
                <input onChange={(e) => {setUsername(e.target.value)}} type="text" className='signup-inputs' required/>
                <label htmlFor="email" className='signup-labels'>e-mail</label>
                <input onChange={(e) => {setUsermail(e.target.value)}} type="email" className='signup-inputs' required/>
                <label htmlFor="password" className='signup-labels'>password</label>
                <input onChange={(e) => {setUserpassword(e.target.value)}} type="password" className='signup-inputs' required/>
                <button id='signup-btn'>sign up</button>
                <p>forgot pasword ?</p>
            </form>
        </section>
        <footer id='signup-footer'>
           <div className='signup-footer-rights'>
                <div className='signup-footer-title-github'>
                    <h1>Code Box</h1>
                    <p>Github</p>
                </div>
                <span>© 2022 code.box. All rights reserved.</span>
            </div>
            <div className='signup-footer-logo'>
                <img src={require("../images/logo-Pt2-white.png")} alt="" />
            </div>
            <div className='signup-footer-links'>
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
