import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions, } from 'react-navigation';

//安卓push路由跳转效果
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


import { TabRouter, RepleaseTab } from './tabNavgator';
import Login from '../containers/user/login';
import Register from '../containers/user/register';
import { ClassifyList } from '../containers/replease/classifyList';
import { SwiperList } from '../containers/home/swiper';
import { ModalList } from '../containers/home/modal';
import { Search } from '../containers/search/search';
import Provnces from '../containers/home/city/index';
import CityList from '../containers/home/city/cityList';

import { HouseClassify } from '../containers/home/classify/house/index';
import { JobClassify } from '../containers/home/classify/job';
import HouseList from '../containers/home/classify/house/list';
import JobList from '../containers/home/classify/job/list';
import HouseDetail from '../containers/home/classify/house/detail';
import { JobDetail } from '../containers/home/classify/job/detail';


import UserCollection from '../containers/user/collection';
import UserSetting from '../containers/user/setting';
import { RrepleaseHouse } from '../containers/replease/house/house';
import { Replease1to1 } from '../containers/replease/house/xflp';
import { Replease1to2 } from '../containers/replease/house/esf';
import { Replease1to3 } from '../containers/replease/house/fwcz';
import { Replease1to4 } from '../containers/replease/house/dzrz';
import { Replease1to5 } from '../containers/replease/house/spcz';
import { Replease1to6 } from '../containers/replease/house/spcs';
import { Replease1to7 } from '../containers/replease/house/spzr';
import { Replease1to8 } from '../containers/replease/house/xzlcz';
import { Replease1to9 } from '../containers/replease/house/xzlcs';
import { Replease1to10 } from '../containers/replease/house/cfck';
import { Replease1to11 } from '../containers/replease/house/tdnz';
import { Replease1to12 } from '../containers/replease/house/cw';




export const AppNavigator = StackNavigator({
    Main: { screen: TabRouter, },
    Provnces: { screen: Provnces,},
    CityList: { screen: CityList,},
    Login: { screen: Login,},
    Register: { screen: Register,},
    ClassifyList: { screen: ClassifyList,},
    SwiperList: { screen: SwiperList,},
    ModalList: { screen: ModalList,},
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
    Replease1to1: {screen: Replease1to1},
    Replease1to2: {screen: Replease1to2},
    Replease1to3: {screen: Replease1to3},
    Replease1to4: {screen: Replease1to4},
    Replease1to5: {screen: Replease1to5},
    Replease1to6: {screen: Replease1to6},
    Replease1to7: {screen: Replease1to7},
    Replease1to8: {screen: Replease1to8},
    Replease1to9: {screen: Replease1to9},
    Replease1to10: {screen: Replease1to10},
    Replease1to11: {screen: Replease1to11},
    Replease1to12: {screen: Replease1to12},
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