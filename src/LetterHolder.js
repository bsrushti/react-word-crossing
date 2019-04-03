import React, { Component } from "react";

class LetterHolder extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      />
    );
  }
}

export default LetterHolder;
