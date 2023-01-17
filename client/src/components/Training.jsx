import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import '../styles/Training.css';
import {Link} from 'react-router-dom';
import TrainingSection from './Training-section';
//import Axios from 'axios';

const Training = () => {

    const [TrainText, setTrainText] = useState("");
    const [trainCardTitle, setTrainCardTitle] = useState("");
    const [trainCardLang, setTrainCardLang] = useState("");

    useEffect(() => {
        
        const getCards = async () => {
        const result = await fetch("http://localhost:3001/UserCards");
        const data = await result.json();
        const trainingCard = data.filter(item => item.cardId === localStorage.getItem("cardId"));
        setTrainCardTitle(trainingCard[0].cardTitle);
        setTrainText(trainingCard[0].cardText);
        setTrainCardLang(trainingCard[0].lang)
        }
      
        getCards();
    }, []);

    //console.log(TrainText);
    //console.log(TrainCard);
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

                <TrainingSection 
                    TrainText={TrainText} 
                    trainCardTitle={trainCardTitle} 
                    trainCardLang={trainCardLang}
                />
                
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

export default Training;