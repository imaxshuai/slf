import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform,StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';

let { width, height } = Dimensions.get("window");
let timer;


export class Register extends Component{

    static navigationOptions =({navigation})=>({
        headerTitle: '',
        headerLeft: (
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name="navigate-before" size={25} color="#666" />
            </TouchableOpacity>
        ),
        headerRight: (
            <Text style={{color: '#333', paddingRight: 10, fontSize: 16}} onPress={()=>navigation.goBack()}>登录</Text>
        ),
        headerStyle: {
            backgroundColor: '#f9f9f9',
            borderBottomWidth: 0,
        }

    });

    constructor(...props){
        super(...props);
        this.state = {
            canGetCheckCode: true,
            checkCodeTime: 0,
        }
    }
    componentDidMount(){

        //注册消息提示
        MessageBarManager.registerMessageBar(this.refs.alert);

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
        //移除提示消息
        MessageBarManager.unregisterMessageBar();

        //获取退出时倒计时剩下的时间
        global.checkTime = this.state.checkCodeTime;
        clearInterval(timer);
    }

    changeUserInfo(){
        console.log(this.props)
    }

    goBack(){
        this.props.navigation.goBack();
    }

    getCheckCode =()=>{
        let pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,5-9])|(18[0,5-9]))\d{8}$/;
        console.log(pattern.test(this.state.tel));

        if(pattern.test(this.state.tel)){
            this.setState({
                canGetCheckCode: false,
                checkCodeTime: 15,
            });
            this.downCountTime();
        }else{
            MessageBarManager.showAlert({
                message: '手机号未填写或格式错误！',
                alertType: 'warning',
                animationType: 'SlideFromRight',
                avatar: (<Icon name="info" size={20} color="#fff" />)
            });
        }
    };

    downCountTime = ()=>{

        timer = setInterval(()=>{
            if(this.state.checkCodeTime>1){
                this.state.checkCodeTime--;
                this.setState({
                    checkCodeTime: this.state.checkCodeTime--,
                });
            }else{
                console.log('倒计时结束');
                this.setState({
                    canGetCheckCode: true,
                });
                clearInterval(timer);
            }
        }, 1000)

    };

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
                    fetch('http://localhost:3000/api/users/register', {
                        method: 'POST',
                        body: JSON.stringify(userinfo)
                    })
                        .then(res=>res.json())
                        .then((userinfo)=>{
                            if(userinfo.success){
                                MessageBarManager.showAlert({
                                    message: '注册成功！',
                                    alertType: 'info',
                                    animationType: 'SlideFromRight',
                                    avatar: (<Icon name="info" size={20} color="#fff" />)
                                });
                                setTimeout(()=>{
                                    this.props.navigation.navigate('User', userinfo);
                                },1500)
                            }else{
                                MessageBarManager.showAlert({
                                    message: '注册失败！手机号已存在。',
                                    alertType: 'error',
                                    animationType: 'SlideFromRight',
                                    avatar: (<Icon name="info" size={20} color="#fff" />)
                                });
                            }
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
                }else{
                    MessageBarManager.showAlert({
                        message: '动态码未填写或格式错误！',
                        alertType: 'warning',
                        animationType: 'SlideFromRight',
                        avatar: (<Icon name="info" size={20} color="#fff" />)
                    });
                }
            }else{
                MessageBarManager.showAlert({
                    message: '密码未填写或格式错误！',
                    alertType: 'warning',
                    animationType: 'SlideFromRight',
                    avatar: (<Icon name="info" size={20} color="#fff" />)
                });
            }
        }else{
            MessageBarManager.showAlert({
                message: '手机号未填写或格式错误！',
                alertType: 'warning',
                animationType: 'SlideFromRight',
                avatar: (<Icon name="info" size={20} color="#fff" />)
            });
        }

    }
    toLogin(){
        this.props.navigation.goBack();
    }

    render(){

        return (
            <View style={styles.container}>

                <MessageBar ref="alert" />
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