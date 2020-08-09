import React from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

class Speech extends React.Component {
  onSpeechClick = () => {
    recognition.start();
    recognition.onresult = (e) => {
      console.log(e.results);
    };
  };

  onEnd = () => {
    recognition.stop();
  };

  render() {
    return (
      <div>
        Speech
        <button style={{ cursor: "pointer" }} onClick={this.onSpeechClick}>
          microphone
          <i className="fas fa-microphone"></i>
        </button>
        <button onClick={this.onEnd}>End</button>
      </div>
    );
  }
}

export default Speech;
