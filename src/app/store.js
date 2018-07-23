import { createStore, combineReducers, applyMiddleware } from "redux";
import ticketsReducer from "./reducers/ticketsReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(combineReducers({ tickets: ticketsReducer}), {}, applyMiddleware(logger, thunk, promise()));