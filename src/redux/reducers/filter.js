import * as actionTypes from '../constants/actionTypes';

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

export const filter = (state=initialSortState, action) =>{
    switch (action.type){
        case actionTypes.FILTER:
            return action.data;
        default:
            return state;
    }
};