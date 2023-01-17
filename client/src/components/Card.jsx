import React, {useState, useEffect} from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { githubLight } from '@uiw/codemirror-theme-github';
import {useNavigate} from 'react-router-dom';
import '../styles/Card.css';
import Axios from 'axios';

export default function Card() {
    
    const [search, setSearch] = useState();
    const [textCode, setTextcode] = useState();
    const [cards, setCards] = useState([]);
    const [newText, setNewText] = useState();
    const [CardId,setCardId] = useState();
    const [snippetTitle,setSnippetTitle] = useState("snippet title");
    const [lang, setLang] = useState("");

    const extension = {
      "py": python(),
      "cpp": cpp(),
      "js": javascript({ jsx: true })
    }

     const navigate = useNavigate();
    
    useEffect(() => {
      
      const getCards = async () => {
        const result = await fetch("http://localhost:3001/UserCards");
        const data = await result.json();
        setCards(data);
      }
      
      getCards();
    }, []); 

    const filterSearch = () => {
      const result = cards.filter(card => card.cardTitle.toLowerCase().includes(search.toLowerCase()));
      setCards(result);
    }

    const Edit = async () => {
        await Axios.post("http://localhost:3001/Edit",{
            Id: CardId,
            NewText: newText,
        }).then(() => {
            console.log("updated successfuly");
        });
    }

    const Delete = async () => {
      await Axios.post("http://localhost:3001/Delete",{
            Id: CardId
        }).then(() => {
            console.log("deleted successfuly");
        });
    }

  return (
        <div className='snippet-card'>
          <div id='snippets-list'>
            <div id='search-section'>
              <input type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search..." />
              <button onClick={() => {filterSearch()}}><img src={require("../images/search.png")} alt="" /></button>
            </div>
            <div id='create-card'>
              <button onClick={() => {navigate("/New")}}>+ create new card</button>
            </div>
            <div id='snippets'>
              <div id='list'>
                {
                  cards.filter(
                    card => card.userId === localStorage.getItem("userId")
                    ).map((item) => (
                      <div 
                        key={item.cardId} 
                        className='card' 
                        onClick={() => {
                          setTextcode(item.cardText);
                          setCardId(item.cardId);
                          setSnippetTitle(item.cardTitle);
                          setLang(item.lang);
                          localStorage.setItem("cardId", item.cardId)
                        }}>
                        {item.cardTitle} 
                      </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div id='snippet-content'>
            <div id='snippet-title'> {snippetTitle} </div>
            <div id='snippet-body'>
              <CodeMirror
                className='CodeMirror'
                value={textCode}
                height="460px"
                width="100%"
                theme={githubLight}
                onChange={setNewText}
                extensions={extension[lang]}
              />
            </div>
            <div id='btn-container'>
              <button onClick={() => {Edit()}}>Edit</button>
              <div id='delete-train'>
                <button onClick={() => {navigate("/Training")}}>Train Now</button>
                <button onClick={() => {Delete()}}>Delete</button>
              </div>
            </div>
          </div>
        </div>
  )
}