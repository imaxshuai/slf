import * as actionTypes from '../constants/actionTypes';

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
                        expires: null,
                    });
                    currentUser.loginState = true;
                    currentUser.userinfo = res.userinfo;
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