import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Platform,StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class Login extends Component{

    static navigationOptions = {
        header: null
    }

    constructor(...props){
        super(...props);
    }

    goBack(){
        this.props.navigation.goBack();
    }

    doLogin(){
        this.props.navigation.navigate('User');
    }
    toRegister(){
        this.props.navigation.navigate('Register');
    }

    render(){

        return (
            <View style={styles.container}>

                {/*头部导航位置*/}
                <View style={styles.navTitle}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Icon name="close" size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toRegister.bind(this)}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>

                {/*Logo摆放位置*/}
                <Image source={require('../../images/logo.png')} style={styles.logo} />

                {/*登录FORM表单提交*/}
                <View style={styles.loginForm}>
                    <TouchableOpacity>
                        <TextInput placeholder="用户名" style={styles.loginInput}  autoCapitalize="none" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="密码" style={styles.loginInput} password='true' autoCapitalize="none"  secureTextEntry={true} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.doLogin.bind(this)}>
                        <Text style={styles.loginBtn}> 登录</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    navTitle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 20,
        marginTop: Platform.OS==='ios' ? 15: 0
    },
    logo: {
        width: "26%",
        marginLeft: "37%",
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 30,

    },
    loginForm: {
        padding: 20,

    },
    loginInput: {
        marginBottom: 30,
        borderBottomWidth: Platform.OS==='ios' ? 1:0,
        borderColor: '#ccc',
        fontSize: 14,
        lineHeight: 30,

    },
    loginBtn: {
        backgroundColor: '#fa0064',
        color: '#fff',
        fontSize: 16,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    }

});