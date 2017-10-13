import * as actionTypes from '../constants/actionTypes';

import Mock from 'mockjs';

export const login = ()=>{
    return (dispatch) => {
        Http.get('http://rapapi.org/mockjsdata/26250/api/user/login', {
            username: 'xushuai',
            password: '123123',
        })
            .then((res) => {
                console.log(res);
                if(res.success){
                    console.log('用户数据读取成功');
                    storage.save({
                        key: 'user',
                        data: {
                            loginState: true,
                            userinfo: res.userinfo
                        },
                        expires: 1000*60*24,
                    });
                    currentUser.loginState = true;
                    currentUser.userinfo = res.userinfo;
                    currentUser.city = '南京';
                    dispatch({
                        type: actionTypes.USER_LOGIN,
                        data: res,
                    })
                }else{
                    console.log('用户数据读取成功');
                }

            });
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

export const getMyRepleaseShow = (replease)=>{
    return (dispatch)=> {
        Http.post('http://rapapi.org/mockjs/26250/api/house')
            .then((res) => {
                if (res.success) {
                    let c = Mock.mock(res).data;
                    if (replease != null) {
                        replease = replease.concat(c);
                    }
                    dispatch({
                        type: actionTypes.GET_MY_REPLEASE_SHOW,
                        data: replease
                    })

                } else {
                    alert('服务器繁忙！！！')
                }
            })
    }
};

export const getMyRepleaseAuditing = (message)=>{
    return (dispatch)=> {
        Http.post('http://rapapi.org/mockjs/26250/api/house')
            .then((res) => {
                if (res.success) {
                    let c = Mock.mock(res).data;
                    if (message != null) {
                        message = message.concat(c);
                    }
                    dispatch({
                        type: actionTypes.GET_MY_REPLEASE_AUDITING,
                        data: message
                    })

                } else {
                    alert('服务器繁忙！！！')
                }
            })
    }
};

export const getMyCollection = (message)=>{
    return (dispatch)=> {
        Http.post('http://rapapi.org/mockjs/26250/api/house')
            .then((res) => {
                if (res.success) {
                    let c = Mock.mock(res).data;
                    if (message != null) {
                        message = message.concat(c);
                    }
                    dispatch({
                        type: actionTypes.GET_MY_COLLECTION,
                        data: message
                    })

                } else {
                    alert('服务器繁忙！！！')
                }
            })
    }
};
