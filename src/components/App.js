import React from "react";
import SearchBox from "./SearchBox";
import RenderItems from "./RenderItems";
import Speech from "./Speech";

class App extends React.Component {
  state = { thingsList: [] };

  onSubmitText = (e) => {
    this.setState({ thingsList: [...this.state.thingsList, e] });
  };

  onSpeechText = (e) => {
    this.setState({ thingsList: [...this.state.thingsList, e] });
  };

  deleteItem = (i) => {
    console.log(i);
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#efefef" }}>
          <h1 style={{ textAlign: "center", fontSize: "3em" }}>TO DO LIST</h1>
        </div>
        <Speech onSpeech={this.onSpeechText} />
        <SearchBox onSubmitText={this.onSubmitText} />
        <RenderItems
          thingsList={this.state.thingsList}
          deleteItem={this.deleteItem}
        />
      </>
    );
  }
}

export default App;
