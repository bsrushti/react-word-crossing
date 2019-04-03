import React, { Component } from "react";
import "./App.css";
import Letters from "./Letters";
import LetterHolders from "./LetterHolders";

class App extends Component {
  constructor(props) {
    super(props);
    this.collectionOfWords = ["BACK"];
    this.word = "";
  }

  drag(e) {
    e.dataTransfer.setData("Text", e.target.id);
  }

  drop(e) {
    let data = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
    if (this.isWordsPlaced() && this.checkWord()) {
      document.getElementById("status").innerText = "Correct Word!!";
    } else if (this.isWordsPlaced() && !this.checkWord()) {
      document.getElementById("status").innerText = "Oops Wrong Word!";
    }
  }

  checkWord() {
    let word = "";
    let wordContainer = document.getElementById("word-container");
    for (let i = 0; i < wordContainer.childNodes.length; i++) {
      word += wordContainer.childNodes[i].firstChild.innerText;
    }
    return this.collectionOfWords.includes(word);
  }

  isWordsPlaced() {
    let flag = false;
    let wordContainer = document.getElementById("word-container");
    for (let i = 0; i < wordContainer.childNodes.length; i++) {
      flag = wordContainer.childNodes[i].firstChild !== null;
    }
    return flag;
  }

  allowDrop(e) {
    e.preventDefault();
  }

  renderLetterHolders(numberOfBox) {
    return (
      <LetterHolders
        numberOfBox={numberOfBox}
        id="box"
        className="square"
        onDrop={this.drop.bind(this)}
        onDragOver={this.allowDrop.bind(this)}
      />
    );
  }

  renderLetters() {
    return <Letters word="KABC" drag={this.drag.bind(this)} />;
  }

  game() {
    return (
      <div className="Game">
        <div className="status" id="status" />
        <div id="">
          <div className="word-container" style={{ width: 300 }}>
            {this.renderLetters()}
          </div>
          <div className="box" id="word-container">
            {this.renderLetterHolders(4)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div> {this.game()}</div>;
  }
}

export default App;
