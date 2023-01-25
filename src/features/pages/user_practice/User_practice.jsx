import React, { useState, useEffect } from 'react';
import './User_practice.css';
// 0. import depdendencies






const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
let simple = ["موز", "طالبی","خیار","گوجه","توت","توت فرنگی","پیاز","هندوانه","خربزه"];


mic.continuous = true;
mic.interimResults = true;
mic.lang = 'fa-IR';


const User_practice = () => {
  // 1.Create model and action states
  // const [model, setModel] = useState(null);
  // const [action, setAction] = useState(null);
  // const [labels, setLabels] = useState(null);

  // 2. create Recognizer Done
  // const loadModel = async () => {
  //   const recognizer = await speech.create("BROWSER_FFT");
  //   console.log("Model Loaded");
  //   await recognizer.ensureModelLoaded();
  //   console.log(recognizer.wordLabels());
  //   setModel(recognizer);
  //   setLabels(recognizer.wordLabels());
  // }

  // useEffect(() => {loadModel()}, []);


  // 3. Listen for Action
  // function argMax(arr){
  //   return arr.map((x,i)=>[x,i]).reduce((r,a)=>(a[0] > r[0] ? a:r))[1];
  // }

  // const recognizeCommands = async () => {
  //   console.log('Listaning for commands');
  //   model.listen(result => {
  //     console.log(result)
  //     setAction(labels[argMax(Object.values(result.scores))])
  //     console.log(action)
  //   }, {includesSpectrogram:true, probabilityThreshold:0.9})
  //   setTimeout(()=>model.stopListening(), 10e3)
  // }

  // 








  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen()
  }, [isListening])
  

  const handleListen = () => {
    if(isListening) {
      mic.start()
      mic.oned = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.oned = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mic on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }

    }

  }


  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')

  }



  return (

    <div className="practice__container">
        <div className="box__center">
          <h1>تبدیل صدا به متن</h1>
        </div>
      <div className="container container__box">
        <div className="box box__right">
          <h2>current Note</h2>
          {isListening ? <span>🎙️</span> :<span> 🛑🎙️ </span>}
          <button onClick={() => setIsListening(prevState => !prevState)} className="btn-p">
            شروع یا توقف
          </button>
          <button onClick={handleSaveNote} disabled={!note} className="btn-p">ذخیره متن</button>
          {/* // 4.Display command to the screen  */}
          {/* <button onClick={recognizeCommands} className="btn-p">Command</button> */}
          <p>{note}</p>
        </div>
        <div className="box box__left">
          <h2>Note</h2>
          {savedNotes.map(n => (
            <p key={n}>{n} ? ==</p>
          ))}
          {/* {action ? <div>{action}</div> : <div>No Action Detected</div>} */}

        </div>
        
      </div>
 

    </div>
  )
}

export default User_practice