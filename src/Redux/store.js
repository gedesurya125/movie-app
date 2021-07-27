import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import movieReducer from "./Reducers/movieReducer";
import rootSaga from "./Saga/rootSaga";

const rootReducer = combineReducers({
  movies: movieReducer
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
export default store;