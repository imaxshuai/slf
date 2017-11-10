import * as actionTypes from '../constants/actionTypes';

const initialState = [];

const initialSortState = {
    house_size: null,
    shops_type: null,
    pay_type: null,
    house_type: null,
    agent: null,
    price: null,
    sort_name: null,
    area: null,
    house_orientation: null,
    room_and_hall: null,
    floors: null,
    city: null,
};

export const sort = (state={}, action) =>{
    switch (action.type){
        case actionTypes.SORT:
            return action.data;
        default:
            return state;
    }
}

export const filter = (state=initialSortState, action) =>{
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