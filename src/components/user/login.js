import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class LoginComponent extends Component{

    render(){
        return (
            <View>
                <TouchableOpacity>
                    <TextInput placeholder="用户名" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextInput placeholder="密码" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>登录</Text>
                    <Icon name="user" size={25} color="red" />
                </TouchableOpacity>
            </View>
        )
    }

}