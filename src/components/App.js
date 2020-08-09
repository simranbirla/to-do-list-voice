import React from "react";
import SearchBox from "./SearchBox";
import RenderItems from "./RenderItems";

class App extends React.Component {
  state = { thingsList: [] };

  onSubmitText = (e) => {
    this.setState({ thingsList: [...this.state.thingsList, e] });
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#efefef" }}>
          <h1 style={{ textAlign: "center", fontSize: "3em" }}>TO DO LIST</h1>
        </div>
        <SearchBox onSubmitText={this.onSubmitText} />
        <RenderItems thingsList={this.state.thingsList} />
      </>
    );
  }
}

export default App;
