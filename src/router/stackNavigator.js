import React,{ Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';



import { TabRouter, RepleaseTab } from './tabNavgator';
import Login from '../containers/user/login';
import { Register } from '../containers/user/register';
import { ClassifyListComponent } from '../components/ClassifyList';
import { FlatListExample } from '../components/flatlistComponent';
import { SwiperList } from '../containers/home/swiper';
import { Search } from '../containers/search/search';
import { HouseClassify } from '../containers/home/classify/house';
import HouseList from '../containers/home/classify/houseList';
import { HouseDetail } from '../containers/home/classify/houseDetail';
import UserCollection from '../containers/user/collection';
import UserSetting from '../containers/user/setting';

export const AppNavigator = StackNavigator({
    Main: {
        screen: TabRouter,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    ClassifyList: {
        screen: ClassifyListComponent,
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
    HouseDetail: {
        screen: HouseDetail,
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