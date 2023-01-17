import React from 'react';
import '../styles/Training.css';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { githubLight } from '@uiw/codemirror-theme-github';
import Modal from './Modal';

const TrainingSection = ({TrainText, trainCardTitle, trainCardLang}) => {

  const [TestText, setTestText] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [isEqual, setIsEqual] = React.useState(false);
  const extention = {
    "py": python(),
    "js": javascript({ jsx: true }),
    "cpp": cpp()
  }

  const Test = () => {
    if (TestText && TrainText.trim() === TestText.trim()) {
      setIsEqual(true);
    }
    setOpenModal(true);
  }
    return (
        <div id="training-section">
            <div id='training-card-title'>
                <h1>{trainCardTitle}</h1>
            </div>
            <div id='training-card-body'>
              <CodeMirror
                className='CodeMirror'
                value='test your knowledge'
                height="434px"
                width="100%"
                theme={githubLight}
                onChange={setTestText}
                extensions={extention[trainCardLang]}
              />
            </div>
            <div id='training-card-btn'>
                <button onClick={Test}>SUBMIT</button>
            </div>
            {openModal && <Modal closeModal={setOpenModal} result={isEqual} text={TrainText} trainCardLang={trainCardLang} />}
        </div>
    );
}

export default TrainingSection;