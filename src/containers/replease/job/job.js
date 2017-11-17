import React, { Component } from 'react'
import { Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    Dimensions,
    Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Picker from 'react-native-picker';
import Spinner from 'react-native-spinkit';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Education, Experience, JobType, Salary} from "../../../components/picker";
import {AreaChoose} from "../../../components/areaChoose";
import {Radio} from "../../../components/radio";
import {HeaderComponent} from "../../../components/header";
import {Toast} from "../../../components/toast";
import {Checkbox} from "../../../components/checkbox";

let {width, height} = Dimensions.get('window');
let message = [];

export class Replease2to1 extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor(...props){
        super(...props);
        this.state = {
            showToast: false,
            showLoad: false,
            describe: null,                 //描述
            type: null,                     //类型
            salary: null,                   //薪资
            education: null,                //学历
            experience: null,               //经验
            work_time: null,                //工作时间
        }
    }

    componentWillMount(){
        if(!currentUser.userinfo){
            this.props.navigation.navigate('Login', '确认登陆之后，才可以免费发布消息哦！');
        }
    };
    componentWillUnmount(){
        Picker.hide();
    }


    //提交信息
    doSubmit = ()=>{
        message = [];
        let repleaseInfo = {

            //input输入框取出的值
            title: this.refs.title._lastNativeText,
            address: this.refs.address._lastNativeText,
            contacts: this.refs.contacts._lastNativeText,
            tel: this.refs.tel._lastNativeText,
            qq: this.refs.qq._lastNativeText,
            wechat: this.refs.wechat._lastNativeText,
            describe: this.refs.describe._lastNativeText,

            //picker选取的值
            area: this.state.area==null?undefined:this.state.area.join(''),
            type: this.state.type==null?undefined:this.state.type.join(''),
            experience: this.state.experience==null?undefined:this.state.experience.join(''),
            education: this.state.education==null?undefined:this.state.education.join(''),
            salary: this.state.salary==null?undefined:this.state.salary.join(''),

            city: City.name,                     //城市
            user_id: currentUser.userinfo.id,
            sort_name: this.props.navigation.state.params[0],

            //单选和复选选取的值
            work_time: this.state.work_time,


        };

        let telPattern = /^1[3|4|5|7|8][0-9]{9}$/;
        let qqPattern = /^[1-9][0-9]{5,10}$/;

        (repleaseInfo.title==null)||(repleaseInfo.title=='')?message.push('请填写信息标题!'):null;
        (repleaseInfo.address==null)||(repleaseInfo.address=='')?message.push('请填写地址!'):null;
        (repleaseInfo.contacts==null)||(repleaseInfo.contacts=='')?message.push('请填写联系人!'):null;


        !telPattern.test(repleaseInfo.tel)||(repleaseInfo.tel==null)||(repleaseInfo.tel=='')?message.push('请填写正确的手机号!'):null;

        repleaseInfo.area==null?message.push('请选择所属区域!'):null;
        repleaseInfo.type==null?message.push('请选择职位!'):null;
        repleaseInfo.experience==null?message.push('请选择工作经验!'):null;
        repleaseInfo.education==null?message.push('请选择学历!'):null;
        repleaseInfo.salary==null?message.push('请选择薪水!'):null;

        if(repleaseInfo.qq){
            !qqPattern.test(repleaseInfo.qq)?message.push('QQ号输入有误!'):null;
        }


        if(message.length>0){
            this.setState({
                showToast: true
            });
            setTimeout(()=>{
                this.setState({
                    showToast: false
                });
            },200)
        }else{

            this.setState({
                showLoad: false
            });

            console.log(repleaseInfo);

            Http.post(Ip+'api/job/create', repleaseInfo ,{'Content-Type': 'application/json'},)
                .then( res=>{
                    if(res.success){
                        this.setState({
                            showLoad: false
                        });
                        alert(res.message);
                    }else{
                        alert(res.message)
                    }
                })
        }



    };


    render () {

        return (

            <View>
                <Toast
                    message={message[0]}
                    show={this.state.showToast}
                />

                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>{this.props.navigation.state.params[0]}</Text>}
                />

                {this.state.showLoad?(
                    <View style={styles.coverLoad}>
                        <View style={styles.spinner}>
                            <Spinner
                                size={80}
                                type='Pulse'
                                color='#fa0064'
                                style={styles.spinner}
                            />
                            <Text style={styles.loadText}>传输中...</Text>
                        </View>
                    </View>
                ):null}

                <KeyboardAwareScrollView>

                    <ScrollView>

                        {/*提示消息*/}
                        <Text style={styles.system}>您今天还可免费发布5条信息!</Text>


                        <View style={styles.item}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>基本信息</Text>
                            </View>

                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>标题</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="请填写信息标题"
                                    placeholderTextColor="#ccc"
                                    maxLength={25}
                                    style={styles.infoInput}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="title"
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>地址</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="请填写地址"
                                    placeholderTextColor="#ccc"
                                    maxLength={10}
                                    style={styles.infoInput}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="address"
                                />
                            </View>

                            {/*选择器*/}
                            <View style={styles.pickerGroup}>
                                <AreaChoose
                                    area={(data)=>this.setState({area: data})}
                                />
                                <JobType
                                    brand={(data)=>this.setState({type: data})}
                                    data={this.props.navigation.state.params[1]}
                                />
                            </View>
                            <View style={styles.pickerGroup}>
                                <Experience
                                    experience={(data)=>this.setState({experience: data})}
                                />
                                <Education
                                    education={(data)=>this.setState({education: data})}
                                />
                                <Salary
                                    salary={(data)=>this.setState({salary: data})}
                                />
                            </View>

                        </View>

                        <View style={styles.item}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>与我联系</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>联系人</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="请填写联系人"
                                    placeholderTextColor="#ccc"
                                    maxLength={10}
                                    style={styles.infoInput}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="contacts"
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>手机号</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="请填写手机号"
                                    placeholderTextColor="#ccc"
                                    keyboardType="numeric"
                                    style={styles.infoInput}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="tel"
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>QQ</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="请填写QQ号"
                                    placeholderTextColor="#ccc"
                                    keyboardType="numeric"
                                    maxLength={11}
                                    style={styles.infoInput}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="qq"
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>微信</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="请填写微信号"
                                    placeholderTextColor="#ccc"
                                    maxLength={25}
                                    style={styles.infoInput}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="wechat"
                                />
                            </View>

                        </View>

                        <View style={styles.item}>
                            <View style={styles.itemTitle}>
                                <Text style={styles.itemTitleText}>其他</Text>
                            </View>

                            <View style={styles.info}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>工作时间</Text>
                                    <Radio data={['双休','单休']} select={(data)=>this.setState({work_time: data})}/>
                                </View>
                            </View>

                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>房屋配置</Text>
                                <Checkbox
                                    data={["五险一金", "包吃", "包住", "饭补", "话补", "房补", "年底双薪", "周末双休", "交通补助", "加班补助", "免费班车", "员工旅游", "专业培训", "出国机会"]}
                                    value={[]}
                                    select={(data)=>this.setState({welfare: data})}
                                />
                            </View>

                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>职位描述</Text>
                                <TextInput
                                    autoCapitalize='none'
                                    placeholder="(选填)职位描述介意大大提高成功率哦！"
                                    placeholderTextColor="#ccc"
                                    multiline= { true }
                                    maxLength={5000}
                                    style={styles.infoInputAeaa}
                                    underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                    ref="describe"
                                />

                            </View>
                        </View>

                        <TouchableOpacity onPress={this.doSubmit}>
                            <Text style={styles.submitBtn}>
                                立即发布
                            </Text>
                        </TouchableOpacity>

                        <View style={{height: 60}} />

                    </ScrollView>

                </KeyboardAwareScrollView>

            </View>

        )
    }

}

const styles = StyleSheet.create({

    //提交加载动画效果
    coverLoad: {
        width: width,
        height: height,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
    },
    spinner: {
        alignItems: 'center',
    },
    loadText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#fa0064',
        fontSize: 18,
    },

    //提示消息
    system: {
        backgroundColor: '#fa0064',
        color: '#fff',
        padding: 5,
        paddingLeft: 10,
    },
    //图片上传样式
    imgUploadBox:{
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 15,
        paddingTop: 15,
    },
    imgUploadImg: {
        width: 70,
        height: 70,
    },
    imgUploadText: {
        fontSize: 16,
        marginTop: 15,
        color: '#999',
    },
    imagesBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagesItem: {
        width: width/3-20,
        height: width/3-20,
        margin: 10,
    },

    //数据注入区域
    item:{
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        marginTop: 5,
    },
    itemTitle: {
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    itemTitleText: {
        padding: 10,
    },
    info:{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    infoTitle: {
        padding: 10,
        color: '#444',
        fontSize: 12,
    },
    infoInput: {
        width: width,
        textAlign: 'center',
        fontSize: 16,
        padding: 0,
        marginBottom: 10,
    },
    infoInputAeaa: {
        width: width*0.9,
        fontSize: 14,
        padding: 10,
        marginBottom: 10,
        height: 100,
        backgroundColor: '#f0f0f0',
        textAlignVertical: 'top',
    },

    //picker选择区
    pickerGroup: {
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
    },

    //发布按钮
    submitBtn: {
        marginTop: 20,
        height: 40,
        lineHeight: Platform.OS=='ios'?40:30,
        textAlign: 'center',
        width: width,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#fa0064',
        overflow: 'hidden',
        fontWeight: '500',
    },


});