import React, { Component } from "react";
import "./Style.css";

class RenderItems extends Component {
  deleteItem = (index) => {
    this.props.deleteItem(index);
  };

  renderList = () => {
    return this.props.thingsList.map((thing, index) => {
      return (
        <div className="thing-container" key={index}>
          <p className="thing">
            <span className="span">{index + 1}.</span> {thing}
            <button
              onClick={() => this.deleteItem(index)}
              className="delete-btn"
            >
              X
            </button>
          </p>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default RenderItems;
