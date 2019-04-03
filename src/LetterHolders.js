import React, { Component } from "react";
import LetterHolder from "./LetterHolder";

class LetterHolders extends Component {
  render() {
    let container = [];
    for (let i = 0; i < this.props.numberOfBox; i++) {
      let div = (
        <LetterHolder
          key={i}
          id={i}
          className={this.props.className}
          onDrop={this.props.onDrop}
          onDragOver={this.props.onDragOver}
        />
      );
      container.push(div);
    }
    return container;
  }
}

export default LetterHolders;
