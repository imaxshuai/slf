//用户登录数据  
let currentUser = {
   loginState: false,
   userinfo: '',
   city: '',
};
//刷新的时候重新获得用户数据    
storage.load({
    key: 'currentUser',

}).then(ret => {
    console.log('------------------------用户数据读取成功-------------------------');
    currentUser = ret
    console.log(currentUser);
    global.currentUser = currentUser;
}).catch(err => {
    console.log('------------------------用户数据读取出错-------------------------');
    currentUser.loginState = false;
    currentUser.userinfo = '';
    currentUser.city = '北京';
});

global.currentUser = currentUser;