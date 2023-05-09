// Importing the action types
import { START_GAME, MAKE_GUESS, RESET_GAME } from "./actions";

// Initial state of the Hangman game
const initialState = {
  word: "",
  guesses: [],
  attempts: 0,
  maxAttempts: 6,
};

// Reducer function for managing the state
const hangmanReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      // When starting the game, update the state with the provided word
      return {
        ...state,
        word: action.payload.word,
        guesses: [],
        attempts: 0,
      };
    case MAKE_GUESS:
      const { letter } = action.payload;
      const { word, guesses, attempts, maxAttempts } = state;

      // Check if the guessed letter is correct
      const isCorrectGuess = word.includes(letter);

      // Update the guesses array with the new letter
      const updatedGuesses = [...guesses, letter];

      // Update the state with the new guesses and attempts
      return {
        ...state,
        guesses: updatedGuesses,
        attempts: isCorrectGuess ? attempts : attempts + 1,
      };
    case RESET_GAME:
      // Reset the state to the initial state
      return {
        ...initialState,
      };
    default:
      // If the action type doesn't match any case, return the current state
      return state;
  }
};

// Exporting the Hangman reducer as the default export
export default hangmanReducer;
