import * as actionTypes from '../constants/actionTypes';

export const homeList = (state={params: {page: 0}, data: [], isEnd: false}, action) =>{
    switch (action.type){
        case actionTypes.GET_HOME_LIST:
            return action.data;
        default:
            return state;
    }
};

export const home = (state={}, action) => {

    switch (action.type){
        case actionTypes.GET_HOME:
            return action.data;
        default:
            return state
    }

};
