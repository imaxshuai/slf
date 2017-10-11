//用户登录数据  
let currentUser = {
   loginState: false,
   userinfo: '',
};
//刷新的时候重新获得用户数据    
storage.load({
    key: 'loginState',
}).then(ret => {
    console.log('------------------------用户数据读取成功-------------------------');
    currentUser.loginState = true;
    currentUser.userinfo = ret;
}).catch(err => {
    console.log('------------------------用户数据读取出错-------------------------');
    currentUser.loginState = false;
    currentUser.userinfo = '';
});

global.currentUser = currentUser;