import * as actionTypes from '../constants/actionTypes';
import Mock from 'mockjs';


export const getHouse = () =>{
    return (dispatch)=> {
        Http.post('http://rapapi.org/mockjs/26250/api/house')
            .then((res)=>{
            console.log(res);
                dispatch({
                    type: actionTypes.HOUSE_CLASSIFY,
                    data: Mock.mock(res)
                })
            })
    }
};
