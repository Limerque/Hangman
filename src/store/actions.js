// Action types
export const START_GAME = "START_GAME";
export const MAKE_GUESS = "MAKE_GUESS";
export const RESET_GAME = "RESET_GAME";

// Action creators
export const startGame = (word) => {
  // Action creator for starting the game
  return {
    type: START_GAME,
    payload: {
      word,
    },
  };
};

export const makeGuess = (letter) => {
  // Action creator for making a guess
  return {
    type: MAKE_GUESS,
    payload: {
      letter,
    },
  };
};

export const resetGame = () => {
  // Action creator for resetting the game
  return {
    type: RESET_GAME,
  };
};
