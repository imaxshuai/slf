import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as userActions from '../../redux/actions/user';
import { UserComponent } from '../../components/user/user'


class User extends Component{

    static navigationOptions = {
        tabBarLabel: "个人中心",
        tabBarIcon: ({tintColor})=>((<Icon name="user-secret" size={25} color={tintColor}/>))
    };

    componentDidMount(){
        // this.props.userActions.getUserInfo();
    }

    render(){

        console.log(this.props);
        return(
            <View>
                <UserComponent />
            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);