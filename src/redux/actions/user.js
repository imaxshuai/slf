import * as actionTypes from '../constants/actionTypes';

export const login = ()=>{
    return {
        type: actionTypes.USER_LOGIN,
        data: {
            username: 'xushuai',
            password: '123123'
        }
    }
};


export const getUserInfo = ()=>{
    return {
        type: actionTypes.GET_USER_INFO,
        data: {
            username: 'xushuai',
            password: '123123'
        }
    }
};
export const changeUserInfo = (data)=>{
    return {
        type: actionTypes.GET_USER_INFO,
        data: {
            username: data.username+'1',
            password: data.password+'6'
        }
    }
};