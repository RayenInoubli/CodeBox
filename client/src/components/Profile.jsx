import React, {useEffect, useState} from 'react';
import '../styles/Profile.css';
import Empty from './Empty';
import Card from './Card';
import Logout from './Logout';
import {Link, useNavigate} from 'react-router-dom';
import Axios  from 'axios';

export default function Profile() {

  const navigate = useNavigate();
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/Login",  {replace: true })
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/Cards", { params: { userId: localStorage.getItem("userId") } })
    .then((request) => {
      if (Object.keys(request.data).length !== 0) {
        setEmpty(false);
      }
    })
  }, []);

  return (
    <div>
      <header id='profile-header'>
        <div id='profile-header-container'>
          <Link to='/'><img src={require("../images/logo-Pt2-white.png")} alt=''/></Link>
          <ul id='profile-header-list'>
            <Link to='/Profile' style={{ textDecoration: 'none', color: 'white' }}>Cards</Link>
            <Logout />
          </ul>
        </div>
        <Link to='/Account' id='Myaccount-ref' style={{ textDecoration: 'none', color: 'white' }}>My account</Link>
      </header>
      <section id='profile-section'>
        {
          empty ? <Empty /> : <Card />

        }
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
  )
}
