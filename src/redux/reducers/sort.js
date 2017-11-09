import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export const sort = (state={}, action) =>{
    switch (action.type){
        case actionTypes.SORT:
            return action.data;
        default:
            return state;
    }
}

export const filter = (state={
    params: {},
    showAreaModel: false,
    showPriceModel: false,
    ShowSortModel: false,
    showOtherModel: false,
}, action) =>{
    switch (action.type){
        case actionTypes.FILTER:
            return action.data;
        default:
            return state;
    }
};

export const houseList = (state={params: {page: 0}, data: [], isEnd: false}, action) =>{
    switch (action.type){
        case actionTypes.GET_HOUSE_LIST:
            return action.data;
        default:
            return state;
    }
};

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
};