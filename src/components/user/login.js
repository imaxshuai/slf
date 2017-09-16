import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button,StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class LoginComponent extends Component{

    static navigationOptions = {
        header: null
    }

    constructor(...props){
        super(...props);
    }
    changeUserInfo(){
        console.log(this.props)
    }

    goBack(){
        this.props.navigation.navigate('User');
    }

    doLogin(){
        this.props.navigation.navigate('User');
    }

    render(){
        return (
            <View style={styles.container}>

                {/*头部导航位置*/}
                <View style={styles.navTitle}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Icon name="close" size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>

                {/*Logo摆放位置*/}
                <Image source={require('../../images/logo.png')} style={styles.logo} />

                {/*登录FORM表单提交*/}
                <View style={styles.loginForm}>
                    <TouchableOpacity>
                        <TextInput placeholder="用户名" style={styles.loginInput} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="密码" style={styles.loginInput}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeUserInfo.bind(this)}>
                        <Button title="登录" color="#fa0064" onPress={this.doLogin.bind(this)} />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    navTitle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 20,
    },
    logo: {
        width: "20%",
        marginLeft: "40%",
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 30,

    },
    loginForm: {
        padding: 20,

    },
    loginInput: {
        marginBottom: 30
    }

});