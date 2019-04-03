import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
  render() {
    let letters = [];
    for (let i = 0; i < this.props.word.length; i++) {
      let character = this.props.word[i];
      let letter = (
        <Letter key={i} value={character} drag={this.props.drag} id={i} />
      );
      letters.push(letter);
    }
    return letters;
  }
}

export default Letters;
