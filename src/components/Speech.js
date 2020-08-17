import React from "react";
import "../Style/Style.css";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

class Speech extends React.Component {
  state = { speech: "" };
  onSpeechClick = () => {
    recognition.start();
    recognition.onresult = (e) => {
      console.log(e.results[0][0].transcript);
      this.setState({ speech: e.results[0][0].transcript });
      this.props.onSpeech(this.state.speech);
    };
  };

  render() {
    return (
      <div className="microphone">
        <button style={{ cursor: "pointer" }} onClick={this.onSpeechClick}>
          <i className="fas fa-microphone"></i>
        </button>
      </div>
    );
  }
}

export default Speech;
