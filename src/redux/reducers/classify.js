import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export const classify = (state=initialState, action) => {

    switch (action.type){
        case actionTypes.HOUSE_CLASSIFY:
            return action.data;
        default:
            return state
    }

};