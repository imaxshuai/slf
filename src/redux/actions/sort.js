import * as actionTypes from '../constants/actionTypes';

export const getSort = ()=>{

    return (dispatch)=>{
        Http.get(Ip+'api/sort')
            .then((res)=>{
                dispatch({
                    type: actionTypes.SORT,
                    data: res
                })
            })
    }

};