import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class LoginComponent extends Component{

    constructor(...props){
        super(...props);
    }

    componentDidMount(){
    }

    changeUserInfo(){
        console.log(this.props.userinfoChange)
        this.props.userinfoChange.changeUserInfo({
            username: this.props.user.username,
            password: this.props.user.password
        });
    }

    render(){
        return (
            <View>
                <TouchableOpacity>
                    <TextInput placeholder="用户名" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextInput placeholder="密码" />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changeUserInfo.bind(this)}>
                    <Text>登录</Text>
                    <Icon name="user" size={25} color="red" />
                </TouchableOpacity>
            </View>
        )
    }

}