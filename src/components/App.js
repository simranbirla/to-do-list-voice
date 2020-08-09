import React from "react";
import SearchBox from "./SearchBox";

class App extends React.Component {
  state = { thingsList: [] };

  onSubmitText = (e) => {
    console.log(e);
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#efefef" }}>
          <h1 style={{ textAlign: "center", fontSize: "3em" }}>TO DO LIST</h1>
        </div>
        <SearchBox onSubmitText={this.onSubmitText} />
      </>
    );
  }
}

export default App;
