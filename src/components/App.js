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
    const filtered_list = this.state.thingsList.filter((thing, index) => {
      return index !== i;
    });
    this.setState({ thingsList: filtered_list });
  };

  localStores = () => {
    localStorage.setItem("thingsList", JSON.stringify(this.state.thingsList));
  };

  componentDidUpdate() {
    this.localStores();
  }

  componentDidMount() {
    this.setState({
      thingsList: JSON.parse(localStorage.getItem("thingsList")),
    });
  }

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#ffc1f3" }}>
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
