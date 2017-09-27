import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform,StyleSheet,Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

let { width, height } = Dimensions.get("window");
export class Register extends Component{

    static navigationOptions = {
        header: null
    }
    constructor(...props){
        super(...props);
    }
    componentDidMount(){
        console.log(currentUser);
    }

    changeUserInfo(){
        console.log(this.props)
    }

    goBack(){
        this.props.navigation.goBack();
    }

    doRegister(){
        fetch('http://rapapi.org/mockjsdata/26250/api/user/verify', {
            method: 'POST',
            body: 'honeNummber=15366123031&password=123123&verifyCode=941231'
        })
            .then(res=>res.json())
            .then((userinfo)=>{
                console.log(userinfo);
                this.props.navigation.navigate('User', userinfo);
                return userinfo;
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    toLogin(){
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View style={styles.container}>

                {/*头部导航位置*/}
                <View style={styles.navTitle}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Icon name="close" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toLogin.bind(this)}>
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableOpacity>
                </View>

                {/*Logo摆放位置*/}
                <Image source={require('../../images/logo.png')} style={styles.logo} />

                {/*登录FORM表单提交*/}
                <View style={styles.loginForm}>
                    <TouchableOpacity>
                        <TextInput placeholder="手机号" style={styles.loginInput}  autoCapitalize="none" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="动态码"
                                   style={styles.loginInput}
                                   password='true'
                                   autoCapitalize="none"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput placeholder="密码" style={styles.loginInput} password='true' autoCapitalize="none"  secureTextEntry={true} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeUserInfo.bind(this)}>
                        <Text style={styles.loginBtn} onPress={this.doRegister.bind(this)}>注册</Text>
                    </TouchableOpacity>
                    <Text style={styles.agreement}>注册即代表同意《搜来福使用协议》</Text>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    loginText: {
        fontSize: 18,
    },
    navTitle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 20,
        marginTop: Platform.OS==='ios' ? 15: 0,
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
        marginBottom: 10,
        borderBottomWidth: Platform.OS==='ios' ? 1:0,
        borderColor: '#eee',
        fontSize: 16,
        lineHeight: 30,
        paddingTop: 10,
        paddingBottom: 10,

    },
    loginBtn: {
        backgroundColor: '#fa0064',
        color: '#fff',
        fontSize: 16,
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center',
        marginTop: 20,
        borderRadius: 3,
        overflow: 'hidden',
    },
    agreement: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 12,
        margin: 20,
    },

});