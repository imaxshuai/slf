import * as actionTypes from '../constants/actionTypes';

export const changeFilter = (data)=>{
    return (dispatch)=>{
        dispatch({
            type: actionTypes.FILTER,
            data: data
        })
    }
};