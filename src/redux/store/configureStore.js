import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { appReducer } from "../reducers/index";

export const configureStore = (initialState)=>{

    const store = createStore(
        appReducer,
        initialState,
        compose (
            // applyMiddleware(thunk),
            applyMiddleware(thunk, createLogger),
        )
    );

    return store;

};