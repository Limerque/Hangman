import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Status = ({ attempts, maxAttempts, word, guesses }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the game result popup if the maximum attempts have been reached or the word has been guessed
    if (
      attempts >= maxAttempts ||
      (word && word.split("").every((letter) => guesses.includes(letter)))
    ) {
      setShowPopup(true);
    }
  }, [attempts, maxAttempts, word, guesses]);

  // Render the game status message based on the game outcome
  const renderStatus = () => {
    if (attempts >= maxAttempts) {
      return (
        <div className="status-message">You lose! The word was {word}</div>
      );
    }
    if (word && word.split("").every((letter) => guesses.includes(letter))) {
      return <div className="status-message">You win!</div>;
    }
    return null;
  };

  // Filter the wrong guesses by comparing them to the letters in the word
  const wrongGuesses = guesses.filter((letter) => !word.includes(letter));

  // Handle the close button click event for the result popup
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="status-container">
      {showPopup && (
        <div className="popup">
          {renderStatus()}
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}

      <p className="attempts">Attempts: {attempts}</p>
      <p className="max-attempts">Max Attempts: {maxAttempts}</p>
      {wrongGuesses.length > 0 && (
        <p className="wrong-guesses">
          Wrong guesses: {wrongGuesses.join(", ")}
        </p>
      )}
    </div>
  );
};

// Map the relevant state properties to component props
const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses || [],
    attempts: state.attempts,
    maxAttempts: state.maxAttempts,
  };
};

export default connect(mapStateToProps)(Status);
