import React from 'react';
import '../styles/Profile.css';
import CreateCard from './CreateCard';
import {Link} from 'react-router-dom';

export default function Profile() {

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
        <span id='Myaccount-ref'>My account</span>
      </header>
      <section id='profile-section'>

        <CreateCard />
        
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