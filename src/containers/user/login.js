import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Platform,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Toast from 'react-native-easy-toast'

import * as userActions from '../../redux/actions/user';
import {HeaderComponent} from "../../components/header";

class Login extends Component{

    static navigationOptions ={
        header: null
    };

    constructor(...props){
        super(...props);
        this.state={
            tel: '',
            password: '',
        }
    }

    componentDidMount(){
        //其他页面跳转登录页面的信息提示
        if(this.props.navigation.state.params){
            setTimeout(()=>{
                this.refs.toast.show(this.props.navigation.state.params, 3000);
            },500)
        }
    }


    goBack(){
        this.props.navigation.goBack();
    }

    //进行用户数据注册
    doLogin(){
        let userinfo = {
            tel: this.state.tel,
            password: this.state.password,
        };
        console.log(userinfo);
        let telPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,5-9])|(18[0,5-9]))\d{8}$/;
        let passwordPattern = /^[a-zA-Z0-9,.?~!@#$%^&*]{6,16}$/;

        if(telPattern.test(userinfo.tel)){
            if(passwordPattern.test(userinfo.password)&&typeof(userinfo.password)!='undefined'){
                Http.post(Ip+'api/user/login', userinfo)
                    .then((res)=>{
                    console.log(res);
                        if(res.success){
                            storage.save({
                                key: 'currentUser',
                                data: {
                                    userinfo: res.data,
                                },
                                expires: null,
                            });
                            currentUser.userinfo = res.data;
                            currentUser.loginState = true;
                            this.props.navigation.goBack()
                        }else{
                            this.refs.toast.show(res.message, 3000);
                        }
                    })
                    .catch((error)=>{
                        throw error;
                    })
            }else{
                this.refs.toast.show('密码未填写或格式错误', 3000);
            }
        }else{
            this.refs.toast.show('手机号输入有误', 3000);
        }

    }

    render(){
        return (
            <View style={styles.container}>

                <Toast
                    ref="toast"
                    style={{backgroundColor:'red', width: '100%', alignItems: 'center'}}
                    position='top'
                    positionValue={60}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff', fontSize: 16}}
                />

                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                   headerRight={
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                            <Text style={{color: '#666', fontSize: 16, paddingRight: 3}}>注册</Text>
                        </TouchableOpacity>
                    }
                    style={{borderBottomWidth: 0}}
                />

                {/*Logo摆放位置*/}
                <Image source={require('../../images/logo.png')} style={styles.logo} />

                {/*登录FORM表单提交*/}
                <View style={styles.loginForm}>
                    <TouchableOpacity>
                        <TextInput
                            placeholder="手机号"
                            autoCapitalize="none"
                            style={styles.loginInput}
                            onChangeText={(text)=>this.setState({tel: text})}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput
                            placeholder="密码"
                            style={styles.loginInput}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(text)=>this.setState({password: text})}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.doLogin.bind(this)}>
                        <Text style={styles.loginBtn}> 登录</Text>
                    </TouchableOpacity>

                </View>

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
)(Login);

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

});