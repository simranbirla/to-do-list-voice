import React from "react";

class Speech extends React.Component {
  render() {
    return (
      <div>
        Speech
        <button style={{ cursor: "pointer" }}>
          microphone
          <i className="fas fa-microphone"></i>
        </button>
      </div>
    );
  }
}

export default Speech;
