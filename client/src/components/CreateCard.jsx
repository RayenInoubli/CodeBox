import React, {useState} from 'react';
import '../styles/CreateCard.css';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { githubLight } from '@uiw/codemirror-theme-github';
import Axios from 'axios';
import uuid from 'react-uuid';
import {useNavigate} from 'react-router-dom';

export default function CreateCard() {

  const [cardTitle, setCardtitle] = useState();
  const [cardText, setCardtext] = useState();
  const [cardDescription, setCarddescription] = useState();
  const [language,setLanguage] = useState("");
  console.log(language);

  const extention = {
    "": javascript(),
    "py": python(),
    "js": javascript({ jsx: true }),
    "cpp": cpp()
  }

  const navigate = useNavigate();
  
  const addNewCard = () => {
    
    if (cardTitle && cardText && cardDescription) {
      Axios.post("http://localhost:3001/newCard",{
            cardId: uuid(),
            cardTitle: cardTitle,
            cardText: cardText,
            cardDescription: cardDescription,
            userId: localStorage.getItem("userId")
        }).then(() => {
            console.log("created successfuly");
        });
      navigate("/Profile");
    }
  }

  return (
    <div className='createCard-section'>
        <div className='createCard-header'>
          <input type="text" placeholder='Title' id='CardTitle' onChange={(e) => {setCardtitle(e.target.value)}} />
          <select name="syntax" id="syntax" defaultValue={'none'} onChange={e=>setLanguage(e.target.value)}>
            <option value="none" selected disabled hidden>Choose a language</option>
            <option value="js">JavaScript</option>
            <option value="py">Python</option>
            <option value="cpp">C++</option>
          </select>
        </div>
        <div id="create-code">
          <CodeMirror
            className='CodeMirror'
            value={"paste or type a code snippet you'd like to remember..."}
            height="231px"
            width="100%"
            theme={githubLight}
            onChange={setCardtext}
            extensions={extention[language]}
          />
        </div>
        <input className='description' type="text" placeholder='this card is about …………' onChange={(e) => {setCarddescription(e.target.value)}} /> 
        <button id='save-button' onClick={() => {addNewCard()}}>save</button>
    </div>
  )
}