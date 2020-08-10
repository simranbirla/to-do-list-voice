import React from "react";
import "./Style.css";

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
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmitText}>
          <input
            onChange={this.inputChange}
            type="text"
            placeholder="Enter things to do"
            className="input"
          />
          <button type="submit" className="submit btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBox;
