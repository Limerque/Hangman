import React from "react";
import hangman0 from "./hangman0.gif";
import hangman1 from "./hangman1.gif";
import hangman2 from "./hangman2.gif";
import hangman3 from "./hangman3.gif";
import hangman4 from "./hangman4.gif";
import hangman5 from "./hangman5.gif";
import hangman6 from "./hangman6.gif";

const HangmanImage = ({ wrongGuesses }) => {
  // Array of hangman images
  const hangmanImages = [
    hangman0,
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
  ];

  // Determine the index of the hangman image based on the number of wrong guesses
  const incorrectGuessCount = wrongGuesses.length;
  const hangmanImage =
    hangmanImages[incorrectGuessCount] ||
    hangmanImages[hangmanImages.length - 1];

  return (
    <img
      className="hangman-image"
      src={hangmanImage}
      alt={`Hangman - Incorrect Guesses: ${incorrectGuessCount}`}
    />
  );
};

export default HangmanImage;
