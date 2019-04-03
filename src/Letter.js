import React, { Component } from "react";

class Letter extends Component {
  render() {
    return (
      <div
        className="square"
        draggable="true"
        onDragStart={this.props.drag}
        id={this.props.id}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Letter;
