import React from 'react';
import '../styles/Empty.css';
import { useNavigate } from 'react-router-dom';

export default function Empty() {

  const navigate = useNavigate();

  return (
    <div className='empty-profile'>
        <img src={require("../images/dropbox.png")} alt="" />
        <h1>You have no cards.</h1>
        <p>to get started, make some!</p>
        <button onClick={() => {navigate("/New")}}>CREATE A CARD</button>
    </div>
  )
}
