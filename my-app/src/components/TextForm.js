import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
      };

    const handleClearClick = () => {
      let newText = '';
      setText(newText);
    };

    const handleSpeakClick = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
    };

    const hendleOnChange = (event) => {
      setText(event.target.value)
    };


    const [text, setText] = useState('');
    return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={hendleOnChange}
              id="myBox"
              rows="5"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear
          </button>

          <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>
            Speak It
          </button>

        </div>
        <div className="container my-2">
          <h4>Your text summery</h4>
          <p>
            {text.split(" ").length} words, and {text.length} characters
          </p>
          <p className="fw-lighter">
            {0.008 * text.split(" ").length} Minutes Read
          </p>
        </div>
      </>
    );
}
