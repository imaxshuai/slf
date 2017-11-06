//用户登录数据  
let currentUser = {
   loginState: false,
   userinfo: '',
};
//刷新的时候重新获得用户数据    
storage.load({
    key: 'currentUser',
}).then(ret => {
    currentUser.loginState = true;
    currentUser.userinfo = ret.userinfo;
    global.currentUser = currentUser;
}).catch(err => {
    currentUser.loginState = false;
    currentUser.userinfo = '';
    global.currentUser = currentUser;
});

global.currentUser = currentUser;

let City = {
    name: '',
    area: '',
};

storage.load({
    key: 'City'
}).then(res=>{
    City=res;
    global.City = City;
}).catch(err=>{
    City={
        name: '北京',
        area: ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"]
    };
    global.City = City;
});

global.City = City;

let Ip = 'http://localhost/public/';

global.Ip = Ip;