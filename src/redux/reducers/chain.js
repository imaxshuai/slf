import * as actionTypes from '../constants/actionTypes';

export const chainList = (state={params: {page: 0}, data: [], isEnd: false}, action) =>{
    switch (action.type){
        case actionTypes.GET_HOUSE_LIST:
            return action.data;
        default:
            return state;
    }
};

export const chain = (state={}, action) => {

    switch (action.type){
        case actionTypes.GET_HOUSE:
            return action.data;
        default:
            return state
    }

};
