import React,{ Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';



import { TabRouter, RepleaseTab } from './tabNavgator';
import Login from '../containers/user/login';
import { Register } from '../containers/user/register';
import { ClassifyList } from '../containers/replease/classifyList';
import { FlatListExample } from '../components/flatlistComponent';
import { SwiperList } from '../containers/home/swiper';
import { Search } from '../containers/search/search';

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
    Main: {
        screen: TabRouter,
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    ClassifyList: {
        screen: ClassifyList,
        navigationOptions: {
            header: null,
        }
    },
    SwiperList: {
        screen: SwiperList,
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },
    HouseClassify: {
        screen: HouseClassify,
        navigationOptions: {
            header: null,
        }
    },
    JobClassify: {
        screen: JobClassify,
        navigationOptions: {
            header: null,
        }
    },
    FlatListExample: {
        screen: FlatListExample,
        navigationOptions: {
            header: null,
        }
    },
    HouseList: {
        screen: HouseList,
        navigationOptions: {
            header: null,
        }
    },
    JobList: {
        screen: JobList,
        navigationOptions: {
            header: null,
        }
    },
    HouseDetail: {
        screen: HouseDetail,
        navigationOptions: {
            header: null,
        }
    },
    JobDetail: {
        screen: JobDetail,
        navigationOptions: {
            header: null,
        }
    },
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
    UserCollection: {
        screen: UserCollection,
    },
    UserSetting: {
        screen: UserSetting,
    },
    RrepleaseHouse: {
        screen: RrepleaseHouse
    },
},{
    headerMode: 'screen',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);