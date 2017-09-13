import { createStore } from 'redux';
import { rootReducer } from "../reducers/index";

export const configureStore = (initialState)=>{

    const store = createStore(
        rootReducer,
        initialState
    );

    return store;

}