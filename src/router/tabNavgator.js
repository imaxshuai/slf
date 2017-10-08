import { TabNavigator } from 'react-navigation';

import Home from '../containers/home';
import Replease from '../containers/replease';
import User from '../containers/user';

import UserReplease from '../containers/user/replease/index';
import AuditindReplease from '../containers/user/replease/auditing';
import DeleteReplease from '../containers/user/replease/delect';

export const TabRouter = TabNavigator({
    Home: {
        screen: Home,
    },
    Replease: {
        screen: Replease,
    },
    User: {
        screen: User,
    },

},{
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#fa0064', // 文字和图片选中颜色
        inactiveTintColor: '#666', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#f9f9f9', // TabBar 背景色
            height: 55,
            borderTopWidth: 1,
            borderColor: '#e3e3e3'
        },
        labelStyle: {
            fontSize: 12, // 文字大小
            marginTop: 0,
            paddingBottom: 5,
        },
        iconStyle: {
            marginBottom: 0,
        }
    },
});

export const RepleaseTab = TabNavigator({
    UserReplease: {
        screen: UserReplease,
    },
    AuditindReplease: {
        screen: AuditindReplease,
    },
    DeleteReplease: {
        screen: DeleteReplease
    }
},{
    tabBarPosition: 'top',
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    animationEnabled: true,
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#fa0064',
        showIcon: false,
        style: {
            marginTop: 2,
            backgroundColor: '#fff', // TabBar 背景色
            borderBottomWidth: 1,
            borderColor: '#e3e3e3',
        },
        labelStyle: {
            fontSize: 16, // 文字大小
        },
    },

})