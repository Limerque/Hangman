import React from "react";
import { connect } from "react-redux";
import { makeGuess } from "../store/actions";

const Letters = ({
  availableLetters,
  makeGuess,
  guesses,
  attempts,
  maxAttempts,
}) => {
  // Event handler for guessing a letter
  const handleGuess = (letter) => {
    makeGuess(letter);
  };

  // Render the letter buttons
  const renderLetters = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").map((letter) => (
      <button
        key={letter}
        onClick={() => handleGuess(letter)}
        disabled={guesses.includes(letter) || attempts >= maxAttempts}
      >
        {letter}
      </button>
    ));
  };

  return <div>{renderLetters()}</div>;
};

// Map the relevant state properties to component props
const mapStateToProps = (state) => {
  return {
    availableLetters: getAvailableLetters(state.word, state.guesses),
    guesses: state.guesses,
    attempts: state.attempts,
    maxAttempts: state.maxAttempts,
  };
};

// Helper function to compute the available letters that haven't been guessed yet
const getAvailableLetters = (word, guesses) => {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  const guessedLetters = guesses.join("");
  return allLetters
    .split("")
    .filter((letter) => !guessedLetters.includes(letter));
};

// Connect the component to the Redux store, providing mapStateToProps and makeGuess action
export default connect(mapStateToProps, { makeGuess })(Letters);
