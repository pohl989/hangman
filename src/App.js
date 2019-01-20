import React, { Component } from 'react';
import './App.css';
import { Card, Cards } from './components/StyledComponents';

class App extends Component {


  state = {
    word: "Taco Bell", 
    correctLetters: [],
    guessedLetters: [],
    guessCount: 0
  }


  updateGuessCount = () => {
    this.setState(state => ({
      guessCount: state.guessCount++
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
    this.udateGuessedLetters(guess)
    this.updateGuessCount()
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          this.updateCorrectLetters(guess)
        } else {

        }
     }
  }





  render() {
    const { word, correctLetters } = this.state

    return (
      <>
      <h1>Hangman</h1>
      <p>Guesses: {this.state.guessedLetters}</p>
      <Cards>
        {word.split("").map( (single, index) => 
          <Card
            key={index}
            correct={index===correctLetters}
          >
          {single}</Card>
          )}
      </Cards>      </>
    );
  }
}

export default App;
