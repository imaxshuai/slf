//请求IP

// let Ip = 'http://www.hotcc.cn/public/index.php/';
// let ImageIp = 'http://www.hotcc.cn/public/upload/images/';

let Ip = 'http://localhost/public/';
let ImageIp = 'http://localhost/public/upload/images/';
global.Ip = Ip;
global.ImageIp = ImageIp;

//主题色彩
let Theme = {
    color: '',
};
storage.load({
    key: 'Theme'
}).then(res=>{
    Theme=res;
    global.Theme = Theme;
}).catch(err=>{
    Theme='#fa0064';
    global.Theme = Theme;
});
global.Theme = Theme;

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

