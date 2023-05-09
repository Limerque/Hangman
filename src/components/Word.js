import React from "react";
import { connect } from "react-redux";
import HangmanImage from "./Hangman";

const Word = ({ word, guesses }) => {
  // Function to render the word with correct guesses revealed
  const renderWord = () => {
    return word.split("").map((letter, index) => (
      <span key={index} className="letter">
        {guesses.includes(letter) ? letter : " _ "}
      </span>
    ));
  };

  return (
    <div className="word-container">
      {/* Render the word and the HangmanImage component */}
      <div className="word">{renderWord()}</div>
      <HangmanImage wrongGuesses={getWrongGuesses(word, guesses)} />
    </div>
  );
};

const getWrongGuesses = (word, guesses) => {
  // Helper function to get the wrong guesses
  return guesses.filter((letter) => !word.includes(letter));
};

const mapStateToProps = (state) => {
  // Map the relevant state properties to component props
  return {
    word: state.word,
    guesses: state.guesses || [],
  };
};

export default connect(mapStateToProps)(Word);
