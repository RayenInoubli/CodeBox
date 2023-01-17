import React, {useRef} from 'react';
import '../styles/Home.css';
import {Link, useNavigate} from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    const right = useRef()

    const handleOnMove = (e) => {   
        const p = e.clientX / window.innerWidth * 100;
        right.current.style.width = `${p}%`;
    }
  
  return (
    <div>
        <section className='landing-page' onMouseMove={(e) => {handleOnMove(e)}}>
            <div id='right-side' className='side' ref={right}>
                <div className='nav-bar'>
                    <div className='header-title'>
                        <img src={require("../images/logo-Pt2.png")} alt=''/>
                        <h2>CODE BOX</h2>
                    </div>
                    <ul>
                        <Link to='/Login' style={{ textDecoration: 'none', color: 'white' }}>Log in</Link>
                        <Link to='/Signup' style={{ textDecoration: 'none', color: 'white' }}>Sign up</Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                    </ul>
                </div>
                <h1>Save your Time while you <span className='fancy' id='right-fancy'>Work</span></h1>
                <button id='right-btn' onClick={() => {navigate("/Signup")}}>Register now</button>
            </div>
            <div id='left-side' className='side'>
              <div className='nav-bar'>
                    <div className='header-title'>
                        <img src={require("../images/Logo-3D.png")} alt=''/>
                        <h2>CODE BOX</h2>
                    </div>
                    <ul>
                        <Link to='/Login' style={{ textDecoration: 'none', color: 'white' }}>Log in</Link>
                        <Link to='/Signup' style={{ textDecoration: 'none', color: 'white' }}>Sign up</Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                    </ul>
                </div>
                <h1>Save your Time while you <span className='fancy' id='left-fancy'>learn</span></h1>
                <button id='left-btn' onClick={() => {navigate("/Signup")}}>Register now</button>
            </div>
        </section>


    </div>
  )
}