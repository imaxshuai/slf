import React, { Component } from 'react'
import { Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    Dimensions,
    Platform,
    TouchableWithoutFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Picker from 'react-native-picker';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {HouseBaseInfoHouse} from "../../../components/houseBaseInfo";
import {UploadImages} from "../../../components/uploadImages";
import {AreaChoose} from "../../../components/areaChoose";
import {UserTimeYear} from "../../../components/userTimeYear";
import {Radio} from "../../../components/radio";

let {width} = Dimensions.get('window');

export class Replease1to1 extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params,
        headerLeft: (
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name="navigate-before" size={25} color="#666" />
            </TouchableOpacity>
        ),
        headerTitleStyle: {
            fontSize: 16,
        }
    });

    constructor(...props){
        super(...props);
        this.state = {
            house: null,                    //房型(厅室)
            direction: null,                //朝向
            floors: null,                   //楼层
            house_configure: [],            //房屋配置
            images: null,                   //图片
            agent: null,                    //身份(个人/经纪人)
            houseType: null,                //房屋类型(住宅/写字楼/商铺)
            propertyRight: null,            //产权
            renovation: null,               //装修
            userTimeYear: null,             //建筑年代
            area: null,                     //区域
        }
    }

    componentDidMount(){

    };
    componentWillUnmount(){
        Picker.hide();
    }


    //提交信息
    doSubmit = ()=>{
        let repleaseInfo = {

            //input输入框取出的值
            title: this.refs.title._lastNativeText,
            communityName: this.refs.communityName._lastNativeText,
            address: this.refs.address._lastNativeText,
            size: this.refs.size._lastNativeText,
            price: this.refs.price._lastNativeText,
            contacts: this.refs.contacts._lastNativeText,
            tel: this.refs.tel._lastNativeText,
            qq: this.refs.qq._lastNativeText,
            wechat: this.refs.wechat._lastNativeText,
            describe: this.refs.describe._lastNativeText,


            //picker选取的值
            area: this.state.area==null?undefined:this.state.area.join(''),
            house: this.state.house==null?undefined:this.state.house.join(''),

            //单选和复选选取的值
            houseType: this.state.houseType,

        }

        console.log(repleaseInfo);
        alert('暂时无法提交到后台。')
    };


    render () {
        return (
            <KeyboardAwareScrollView>
                <ScrollView>

                    {/*提示消息*/}
                    <Text style={styles.system}>您今天还可免费发布5条信息!</Text>

                    {/*图片上传*/}
                    <UploadImages
                        images={(data)=>this.setState({images: data})}
                    />

                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>基本信息</Text>
                        </View>
                        <AreaChoose
                            area={(data)=>this.setState({area: data})}
                        />
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>标题</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写信息标题"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                ref="title"
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>小区名</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写小区名"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                ref="communityName"
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>小区地址</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写小区地址"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                ref="address"
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>面积(㎡)</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写面积"
                                placeholderTextColor="#ccc"
                                keyboardType="numeric"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                ref="size"
                            />
                        </View>

                        {/*厅室、楼层、朝向选择器*/}
                        <HouseBaseInfoHouse
                            house={(data)=>this.setState({house: data})}
                        />

                    </View>

                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>价格详情</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>单价(元/㎡)</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写单价"
                                placeholderTextColor="#ccc"
                                keyboardType="numeric"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                ref="price"
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
                                <Text style={styles.infoTitle}>类型</Text>
                                <Radio data={['住宅','写字楼','商铺']} select={(data)=>this.setState({houseType: data})}/>
                            </View>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>内容描述</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="(选填)内容描述介意大大提高成功率哦！"
                                placeholderTextColor="#ccc"
                                multiline= { true }
                                style={styles.infoInputAeaa}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                                ref="describe"
                            />

                        </View>
                    </View>

                    <Text style={styles.submitBtn} onPress={this.doSubmit}>
                        立即发布
                    </Text>

                </ScrollView>

            </KeyboardAwareScrollView>

        )
    }

}

const styles = StyleSheet.create({

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