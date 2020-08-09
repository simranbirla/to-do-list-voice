import React, { Component } from "react";
import "./SearchBox.css";

class RenderItems extends Component {
  renderList = () => {
    return this.props.thingsList.map((thing, index) => {
      return (
        <div className="thing-container" key={index}>
          <p className="thing">
            <span className="span">{index + 1}.</span> {thing}
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
