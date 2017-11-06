import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform,StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toast from 'react-native-easy-toast'

import {HeaderComponent} from "../../components/header";
import * as userActions from '../../redux/actions/user'

let { width, height } = Dimensions.get("window");
let timer;

class Register extends Component{

    static navigationOptions =({navigation})=>({
        header: null,
    });

    constructor(...props){
        super(...props);
        this.state = {
            canGetCheckCode: true,
            checkCodeTime: 0,
            canAlert: false,
        }
    }
    componentDidMount(){
        //获取倒计时所剩时间，继续倒计时
        if(typeof(checkTime)!='undefined'&&checkTime>1){
            this.setState({
                canGetCheckCode: false,
                checkCodeTime: checkTime,
                tel: '',
                checkCode: '',
                password: '',
            });
            this.downCountTime();
        }
    }

    componentWillUnmount(){
        //获取退出时倒计时剩下的时间
        global.checkTime = this.state.checkCodeTime;
        clearInterval(timer);
    }

    //获取短信验证码
    getCheckCode =()=>{
        let pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,5-9])|(18[0,5-9]))\d{8}$/;

        if(pattern.test(this.state.tel)){
            this.setState({
                canGetCheckCode: false,
                checkCodeTime: 15,
            });
            this.downCountTime();
            this.refs.toast.show('您的验证码是: 758866', 3000);
        }else{
            this.refs.toast.show('手机号输入有误！', 3000);
        }
    };

    //倒计时
    downCountTime = ()=>{

        timer = setInterval(()=>{
            if(this.state.checkCodeTime>1){
                this.state.checkCodeTime--;
                this.setState({
                    checkCodeTime: this.state.checkCodeTime--,
                });
            }else{
                this.setState({
                    canGetCheckCode: true,
                });
                clearInterval(timer);
            }
        }, 1000)

    };


    //进行用户数据注册
    doRegister(){
        let userinfo = {
            tel: this.state.tel,
            checkCode: this.state.checkCode,
            password: this.state.password,
        };
        console.log(userinfo);
        let telPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,5-9])|(18[0,5-9]))\d{8}$/;
        let passwordPattern = /^[a-zA-Z0-9,.?~!@#$%^&*]{6,16}$/;
        let checkCodePattern = /^[a-zA-Z0-9]{6}$/;

        if(telPattern.test(userinfo.tel)){
            if(passwordPattern.test(userinfo.password)&&typeof(userinfo.password)!='undefined'){
                if(checkCodePattern.test(userinfo.checkCode)){
                    Http.post(Ip+'api/user/register', userinfo, {'Content-Type': 'application/json'})
                        .then((res)=>{

                            console.log(res);

                            if(res.success){
                                storage.save({
                                    key: 'currentUser',
                                    data: {
                                        userinfo: res.data,
                                    }
                                });
                                currentUser.userinfo = res.data;
                                currentUser.loginState = true;
                                this.props.navigation.goBack(this.props.nav.routes[1].key)
                            }else{
                                this.refs.toast.show(res.message, 3000);
                            }
                        })
                        .catch((error)=>{
                            throw error;
                        })
                }else{
                    this.refs.toast.show('动态码未填写或格式有误', 3000);
                }
            }else{
                this.refs.toast.show('密码未填写或格式有误', 3000);
            }
        }else{
            this.refs.toast.show('手机号未填写或格式有误', 3000);
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
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Text style={{color: '#666', fontSize: 16, paddingRight: 3}}>登录</Text>
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
                            style={styles.loginInput}
                            autoCapitalize="none"
                            onChangeText={(text)=>this.setState({tel: text})}                        />
                    </TouchableOpacity>
                    <View style={styles.CheckCodeBox}>
                        <TextInput placeholder="动态码"
                                   style={styles.loginInput}
                                   password='true'
                                   autoCapitalize="none"
                                   onChangeText={(text)=>this.setState({checkCode: text})}
                        />
                        {this.state.canGetCheckCode?(<Text style={styles.CheckCode} onPress={this.getCheckCode}>获取动态码</Text>):(<Text style={[styles.CheckCode,styles.noCheckCode]}>{this.state.checkCodeTime}秒后可再次获取</Text>)}
                    </View>
                    <View>
                        <TextInput
                            placeholder="密码"
                            style={styles.loginInput}
                            password='true'
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(text)=>this.setState({password: text})}
                        />
                    </View>

                    <TouchableOpacity onPress={this.doRegister.bind(this)}>
                        <Text style={styles.loginBtn}>注册</Text>
                    </TouchableOpacity>
                    <Text style={styles.agreement}>注册即代表同意《搜来福使用协议》</Text>
                </View>

            </View>
        )
    }

}


const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)

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
    CheckCodeBox: {
        position: 'relative',
    },
    CheckCode: {
        borderWidth: 0.5,
        borderColor: '#fa0064',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        color: '#fa0064',
        fontWeight: '100',
        fontSize: 12,
        position: 'absolute',
        right: 0,
        top: 7,
    },
    noCheckCode: {
        borderColor: '#aaa',
        color: '#aaa',
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