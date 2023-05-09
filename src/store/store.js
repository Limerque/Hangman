// Importing the createStore function from the "redux" library
import { createStore } from "redux";
// Importing the hangmanReducer
import hangmanReducer from "./reducer";

// Creating the Redux store
const store = createStore(hangmanReducer);

// Exporting the Redux store as the default export of the "store.js" module
export default store;
