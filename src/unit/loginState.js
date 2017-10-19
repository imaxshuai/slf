//用户登录数据  
let currentUser = {
   loginState: false,
   userinfo: '',
};
//刷新的时候重新获得用户数据    
storage.load({
    key: 'currentUser',
}).then(ret => {
    currentUser = ret;
    console.log(currentUser);
    global.currentUser = currentUser;
}).catch(err => {
    currentUser.loginState = false;
    currentUser.userinfo = '';
});

global.currentUser = currentUser;


let City;

storage.load({
    key: 'City'
}).then(res=>{
    City=res;
    global.City = City;
}).catch(err=>{
    City='北京';
    global.City = City;
});

global.City = City;