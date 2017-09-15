import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export const user = (state=initialState, action) => {

    switch (action.type){
        case actionTypes.USER_LOGIN:
            return action.data;
        case actionTypes.GET_USER_INFO:
            return action.data;
        default:
            return state
    }

};