import * as actionTypes from '../constants/actionTypes';

const initialState = {};
const initialState2 = [];

export const user = (state=initialState, action) => {

    switch (action.type){
        case actionTypes.USER_LOGIN:
            return action.data;
        case actionTypes.GET_USER_INFO:
            console.log(action.data);
            return action.data;
        default:
            return state
    }

};

export const myReplease = (state=initialState2, action)=>{

    switch (action.type){
        case actionTypes.GET_MY_REPLEASE_SHOW:
            return action.data;
        default:
            return state
    }

};

export const myRepleaseAuditing = (state=initialState2, action)=>{

    switch (action.type){
        case actionTypes.GET_MY_REPLEASE_AUDITING:
            return action.data;
        default:
            return state
    }

};

export const myCollection= (state=initialState2, action)=>{

    switch (action.type){
        case actionTypes.GET_MY_COLLECTION:
            return action.data;
        default:
            return state
    }

};
