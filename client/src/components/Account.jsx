import React,{useState} from 'react';
import '../styles/Profile.css';
import '../styles/Account.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Account = () => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [confirmePassword,setConfirmePassword] = useState("")

    const EditMyAccount = (e) => {
        e.preventDefault();
        if (password !== confirmePassword){
            alert("passord is wrong, try again!");
        }else{
            Axios.post("http://localhost:3001/editaccount",{
            userId: localStorage.getItem("userId"),
            userEmail: email,
            userName: name,
            userPassword: password,
            }).then(() => {
            console.log("inserted successfuly");
        }   );
        }
    }

    return (
        <div>
            <header id='profile-header'>
                <div id='profile-header-container'>
                    <Link to='/'><img src={require("../images/logo-Pt2-white.png")} alt=''/></Link>
                    <ul id='profile-header-list'>
                        <Link to='/Profile' style={{ textDecoration: 'none', color: 'white' }}>Cards</Link>
                        <li>log out</li>
                    </ul>
                </div>
                <Link to='/Account' id='Myaccount-ref' style={{ textDecoration: 'none', color: 'white' }}>My account</Link>
            </header>
            <section id='profile-section'>
                <form className='account-container' onSubmit={(e) => {EditMyAccount(e)}}>
                    <h1>Profile</h1>
                    <div className='info'> <p>Email</p> <input type="email" onChange={(e) => {setEmail(e.target.value)}} required/> </div>
                    <div className='info'> <p>Name</p> <input type="text" onChange={(e) => {setName(e.target.value)}}  required/> </div>
                    <div className='info'> <p>Current password</p> <input type="password" required/> </div>
                    <div className='info'> <p>New password</p> <input type="password" onChange={(e) => {setPassword(e.target.value)}}  required/> </div>
                    <div className='info'> <p>Confirme new password</p> <input type="password" onChange={(e) => {setConfirmePassword(e.target.value)}}  required/> </div>
                    <button>UPDATE MY ACCOUNT</button>
                </form>
            </section>
            <footer id='profile-footer'>
                <div className='profile-footer-rights'>
                    <div className='profile-footer-title-github'>
                        <h1>Code Box</h1>
                        <p>Github</p>
                    </div>
                    <span>© 2022 code.box. All rights reserved.</span>
                </div>
                <div className='profile-footer-logo'>
                    <img src={require("../images/logo-Pt2-white.png")} alt="" />
                </div>
                <div className='profile-footer-links'>
                    <ul>
                        <li>Legal</li>
                        <li>Privacy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Account;