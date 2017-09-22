//用户登录数据  
let currentUser = {
   loginState: false,
   userinfo: '',
};
//刷新的时候重新获得用户数据    
storage.load({
    key: 'loginState',
}).then(ret => {
    currentUser.loginState = true;
    currentUser.userinfo = ret;
}).catch(err => {
    currentUser.loginState = false;
    currentUser.userinfo = '';
});

global.currentUser = currentUser;