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


export const classifyMore = (state=initialState, action)=>{
    switch (action.type){
        case actionTypes.GET_HOUSE_MORE:
            return action.data;
        default:
            return state
    }
}