import * as actionTypes from '../constants/actionTypes';

export const sort = (state={}, action) =>{
    switch (action.type){
        case actionTypes.SORT:
            return action.data;
        default:
            return state;
    }
}
