import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { TabRouter } from './tabNavgator';
import { LoginComponent } from '../components/user/login';
import { RegisterComponent } from '../components/user/register';

export const AppNavigator = StackNavigator({
    Main: {
        screen: TabRouter,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginComponent,
    },
    Register: {
        screen: RegisterComponent,
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);