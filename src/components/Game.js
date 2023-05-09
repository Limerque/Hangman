import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { startGame, makeGuess, resetGame } from "../store/actions";
import Letters from "./Letters";
import Status from "./Status";
import Word from "./Word";

const Game = ({
  word,
  guesses,
  attempts,
  maxAttempts,
  startGame,
  makeGuess,
  resetGame,
}) => {
  // State for showing/hiding the help content
  const [showHelp, setShowHelp] = useState(false);

  // Fetch a random word when the component mounts
  useEffect(() => {
    fetchRandomWord();
  }, []);

  const fetchRandomWord = async () => {
    // Fetch a random word from an API
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      if (response.ok) {
        const data = await response.json();
        const randomWord = data[0];
        startGame(randomWord);
      } else {
        throw new Error("Failed to fetch random word");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuess = (letter) => {
    // Dispatch the makeGuess action when a letter is clicked
    makeGuess(letter);
  };

  const handleReset = () => {
    // Reset the game and fetch a new random word
    resetGame();
    fetchRandomWord();
  };

  const toggleHelp = () => {
    // Toggle the visibility of the help content
    setShowHelp(!showHelp);
  };

  return (
    <div>
      {/* Render components: Word, Letters, Status */}
      <Word />
      <Letters />
      <Status />

      {/* Help and Reset buttons */}
      <button onClick={toggleHelp}>Help</button>
      <button onClick={handleReset}>Reset</button>

      {/* Help content */}
      {showHelp && (
        <div className="help-popup">
          <div className="help-content">
            <h3>Game Rules</h3>
            <p>
              Hangman is a word-guessing game where you try to guess the secret
              word letter by letter. Here are the rules:
            </p>
            <ul>
              <li>A random word will be selected for you to guess.</li>
              <li>
                Guess one letter at a time by clicking on the available letters.
              </li>
              <li>
                If the letter is correct, it will be revealed in the word. If
                it's incorrect, part of the hangman will be drawn.
              </li>
              <li>
                You have a limited number of attempts to guess the word before
                the hangman is completed.
              </li>
              <li>If you guess the word correctly, you win the game!</li>
              <li>
                If you run out of attempts, the hangman is completed and you
                lose.
              </li>
            </ul>
            {/* Close button */}
            <button onClick={toggleHelp}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // Map the relevant state properties to component props
  return {
    word: state.word,
    guesses: state.guesses,
    attempts: state.attempts,
    maxAttempts: state.maxAttempts,
  };
};

export default connect(mapStateToProps, { startGame, makeGuess, resetGame })(
  Game
);
