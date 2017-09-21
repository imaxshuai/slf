import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { TabRouter } from './tabNavgator';
import Login from '../containers/user/login';
import { Register } from '../containers/user/register';
import { ClassifyListComponent } from '../components/ClassifyList';

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
        mode: 'modal',
        navigationOptions: {
            header: null,
        }
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);