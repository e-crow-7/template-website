import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

// Apply middleware
let middleware = applyMiddleware(promiseMiddleware(), thunkMiddleware);

// Combine Reducers
let reducers = combineReducers({});

// Compose with redux development tools if building in development.
if (process.env.NODE_ENV === "development") {
  middleware = require("redux-devtools-extension").composeWithDevTools(
    middleware
  );
}

// Create store.
export default createStore(reducers, middleware);
