import React from "react";

class SearchBox extends React.Component {
  state = { things: "" };

  onSubmitText = (e) => {
    e.preventDefault();
    if (this.state.things) {
      this.props.onSubmitText(this.state.things);
    }
  };

  inputChange = (e) => {
    this.setState({ things: e.target.value });
  };

  render() {
    console.log(this.state.thingsList);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <form onSubmit={this.onSubmitText}>
          <input
            onChange={this.inputChange}
            type="text"
            placeholder="Enter things to do"
            style={{
              height: "30px",
              width: "200px",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              height: "50px",
              width: "90px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#fef333",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBox;
