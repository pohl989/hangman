import React, { Component } from 'react';
import './App.css';
import { Card, Cards } from './components/StyledComponents';

class App extends Component {


  state = {
    word: "Taco Bell", 
    correctLetters: [1,3],
    guessedLetters: ["a", "o"],
    guessCount: 0,
    currentGuess: ""
  }

  updateGuessCount = () => {
    this.setState(state => ({
      guessCount: state.guessCount + 1
    }))
  }

  updateGuessedLetters = (letter) => {
    this.setState(state => ({
      guessedLetters: [...state.guessedLetters, letter]
    }))
  }

  updateCorrectLetters = (index) => {
    this.setState(state => ({
      correctLetters: [...state.correctLetters, index]
    }))
  }

  guess = (guess) => {
    const { word } = this.state
    this.updateGuessedLetters(guess)
    this.updateGuessCount()
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          this.updateCorrectLetters(i)
        } else {

        }
     }
  }


  handleGuess = (e) => {
    this.guess(e.target.value)
  }


  render() {
    const { word, correctLetters } = this.state

    return (
      <>
      <h1>Hangman</h1>
      <p>Count: {this.state.guessCount}</p>
      <p>Guesses: {this.state.guessedLetters.map( single => single)}</p>
      <input 
              id="bestInputEver"
              autoFocus
              value={""}
              onChange={this.handleGuess}
            />
      <Cards>
        {word.split("").map( (single, index) => 
          <Card
            key={index}
            correct={index===correctLetters}
          >
          <p>{(correctLetters.includes(index)) ? single : "?"}</p>
          </Card>
          )}
      </Cards>      </>
    );
  }
}

export default App;
