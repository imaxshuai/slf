import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';



import { TabRouter } from './tabNavgator';
import Login from '../containers/user/login';
import { Register } from '../containers/user/register';
import { ClassifyListComponent } from '../components/ClassifyList';
import { FlatListExample } from '../components/flatlistComponent';
import { SwiperList } from '../containers/home/swiper';
import { Search } from '../containers/search/search';
import { HouseClassify } from '../containers/classify/house';
import HouseList from '../containers/classify/houseList';
import { HouseDetail } from '../containers/classify/houseDetail';

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
},{

});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);