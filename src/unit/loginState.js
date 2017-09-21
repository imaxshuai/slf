//用户登录数据  
global.currentUser = {
    loginState:'',//登录状态  
    userinfo:'',//用户数据
};
//刷新的时候重新获得用户数据    
storage.load({
    key: 'loginState',
}).then(ret => {
    global.user.loginState = true;
    global.user.userinfo = ret;
}).catch(err => {
    global.user.loginState = false;
    global.user.userinfo = '';
})  