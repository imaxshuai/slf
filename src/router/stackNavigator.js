import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions, } from 'react-navigation';

//安卓push路由跳转效果
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


import { TabRouter, RepleaseTab } from './tabNavgator';
import Login from '../containers/user/login';
import { Register } from '../containers/user/register';
import { ClassifyList } from '../containers/replease/classifyList';
import { SwiperList } from '../containers/home/swiper';
import { Search } from '../containers/search/search';
import { Provnces } from '../containers/home/city/index';
import CityList from '../containers/home/city/cityList';

import { HouseClassify } from '../containers/home/classify/house/index';
import { JobClassify } from '../containers/home/classify/job';
import HouseList from '../containers/home/classify/house/list';
import JobList from '../containers/home/classify/job/list';
import { HouseDetail } from '../containers/home/classify/house/detail';
import { JobDetail } from '../containers/home/classify/job/detail';


import UserCollection from '../containers/user/collection';
import UserSetting from '../containers/user/setting';
import { RrepleaseHouse } from '../containers/replease/house';

export const AppNavigator = StackNavigator({
    Main: { screen: TabRouter, },
    Provnces: { screen: Provnces,},
    CityList: { screen: CityList,},
    Login: { screen: Login,},
    Register: { screen: Register,},
    ClassifyList: { screen: ClassifyList,},
    SwiperList: { screen: SwiperList,},
    Search: { screen: Search, },
    HouseClassify: { screen: HouseClassify,},
    JobClassify: {screen: JobClassify,},
    HouseList: {screen: HouseList,},
    JobList: {screen: JobList,},
    HouseDetail: {screen: HouseDetail,},
    JobDetail: {screen: JobDetail,},
    UserReplease: {
        screen: RepleaseTab,
        navigationOptions: {
            headerTitle: '我的发布',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleStyle: {
                fontSize: 16,
            },
            headerTintColor: '#333',
        }
    },
    UserCollection: {screen: UserCollection,},
    UserSetting: {screen: UserSetting,},
    RrepleaseHouse: {screen: RrepleaseHouse},
},{
    headerMode: 'screen',
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    })
});


const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);