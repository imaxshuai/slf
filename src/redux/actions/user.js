import * as actionTypes from '../constants/actionTypes';

export const login = ()=>{
    return {
        type: actionTypes.USER_LOGIN,
        data: {
            username: 'xushuai',
            password: '123123'
        }
    }
}