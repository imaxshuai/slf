import React,{ Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../redux/store/configureStore';
import AppWithNavigationState from '../router/stackNavigator';
import Http from '../unit/http';
import storage from '../unit/storage';
import User from '../unit/loginState';



const store = configureStore();

export class Root extends Component{

    render(){
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}