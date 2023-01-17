import React from 'react';
import '../styles/Modal.css';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { githubLight } from '@uiw/codemirror-theme-github';
import { useNavigate } from 'react-router-dom';

export default function Modal({closeModal, result, text, trainCardLang}) {

  const navigate = useNavigate();

  const extention = {
    "py": python(),
    "js": javascript({ jsx: true }),
    "cpp": cpp()
  }

  return (
    <div className='modal-bg'>
      <div className={result ? "modal-cont-true" : "modal-cont-false"}>
      <div className="close-btn">
        <button onClick={() => {closeModal(false); navigate("/Training")}}> X </button>
      </div>
       {
          result
          ? <div className='correct'><h1>Correct! 👏</h1></div>
          : <div className='not-correct'>
              <h1>right answer:</h1> <br />
              <div>
                <CodeMirror
                  className='CodeMirror'
                  value={text}
                  height="150px"
                  width="100%"
                  theme={githubLight}
                  extensions={extention[trainCardLang]}
                />
              </div>
            </div>
        }
      <div className='btn-sect'>
        <button id='try-another-time' onClick={() => {navigate("/Profile")}}>try another time</button>
        <button onClick={() => {navigate("/Profile")}}>easy</button>
        <button onClick={() => {closeModal(false); window.location.reload(false)}}>try again</button>
      </div>
      </div>
    </div>
  )
}
