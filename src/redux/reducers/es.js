import * as actionTypes from '../constants/actionTypes';

export const esList = (state={params: {page: 0}, data: [], isEnd: false}, action) =>{
    switch (action.type){
        case actionTypes.GET_HOUSE_LIST:
            return action.data;
        default:
            return state;
    }
};

export const es = (state={}, action) => {

    switch (action.type){
        case actionTypes.GET_HOUSE:
            return action.data;
        default:
            return state
    }

};
