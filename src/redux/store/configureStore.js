import { createStore } from 'redux';
import { appReducer } from "../reducers/index";

export const configureStore = (initialState)=>{

    const store = createStore(
        appReducer,
        initialState
    );

    return store;

};