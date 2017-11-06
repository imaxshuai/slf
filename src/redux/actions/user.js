import * as actionTypes from '../constants/actionTypes';

import Mock from 'mockjs';

export const getCitys = ()=>{
    return (dispatch)=>{
        Http.get(Ip+'api/city')
            .then((res)=>{

                let hotCitys = [
                    res[0].city[0],
                    res[1].city[0],
                    res[8].city[0],
                    res[9].city[0],
                    res[10].city[0],
                    res[16].city[0],
                    res[18].city[0],
                    res[18].city[1],
                    res[21].city[0],
                ]
                dispatch({
                    type: actionTypes.CITY,
                    data: {
                        citys: res,
                        hotCitys: hotCitys,
                    },
                })
            })
    }
};


export const login = ()=>{
    return (dispatch) => {
        Http.get('http://rapapi.org/mockjsdata/26250/api/user/login')
            .then((res) => {
                console.log(res);
                if(res.success){
                    console.log('用户数据读取成功');
                    storage.save({
                        key: 'currentUser',
                        data: {
                            loginState: true,
                            userinfo: res.userinfo,
                            city: '徐州'
                        },
                        expires: 1000*60*24*30,
                    });
                    currentUser.loginState = true;
                    currentUser.userinfo = res.userinfo;
                    currentUser.city = '徐州';
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
