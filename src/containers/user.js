import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import * as actionTypes from '../redux/constants/actionTypes';

import { LoginComponent } from '../components/user/login'


class User extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
    }

    addId(){
        this.props.addId({
            id: this.props.user.username,
            city: this.props.user.city
        })
    }

    render(){
        return(
            <View>
                <LoginComponent/>
            </View>
        )
    }

}