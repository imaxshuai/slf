/*
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
let { width, height } = Dimensions.get("window");

export  class SwiperList extends Component {
    render() {
        return (
            <View style={styles.ss}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /!*轮播图样式*!/
    ss: {
        width: width,
        height: 100,
    },
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});*/

import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Animated, StyleSheet, Picker, PickerIOS } from 'react-native'
import Modal from 'react-native-modal';
import {MessageBar, MessageBarManager} from 'react-native-message-bar';

export class SwiperList extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            isModalVisible: false,
            left1: new Animated.Value(0),
            rotation2: new Animated.Value(0),
            language:null,
        };
    }

    componentDidMount(){
        MessageBarManager.registerMessageBar(this.refs.alert);
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    alert = ()=>{
        MessageBarManager.showAlert({
            title: '系统提示',
            message: '登陆成功拉！',
            alertType: 'info',
            stylesheetInfo: {backgroundColor: 'black', strokeColor: 'gray' }, //默认是蓝色，与info
            animationType: 'SlideFromRight'
        });
    }

    _showModal = () => this.setState({ isModalVisible: true });

    _hideModal = () => {
        this.setState({ isModalVisible: false });
    };

    //动画效果
    ani01 = ()=>{
        Animated.spring(this.state.left1, {
            toValue: 150,        //属性目标值
            friction: 2,        //摩擦力 （越小 振幅越大）
            tension: 100,        //拉力
        }).start();
    }
    ani02 = ()=>{
        Animated.timing(this.state.rotation2, {
            toValue: 1,        //属性目标值
            duration: 3000    //动画执行时间
        }).start();    //执行动画
    }

    render () {
        return (
            <View style={{ flex: 1}}>
                <TouchableOpacity onPress={this._showModal}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>

                <Text onPress={this.alert}>点我</Text>

                <Text onPress={this.ani01}>让我跳吧</Text>
                <Text onPress={this.ani02}>让我转吧</Text>

                <MessageBar ref="alert" />

                <Animated.Image
                    style={[styles.image,{left: this.state.left1}]}
                    source={require('../../images/header-img-login.png')}
                />
                <Animated.Image
                    style={[styles.image,{
                        transform:[
                            {
                                rotateX: this.state.rotation2.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['0deg','360deg']
                                })
                            }
                        ]
                    }]}
                    source={require('../../images/header-img-login.png')}
                />

                <PickerIOS
                    prompt='请选择操作语言' //带标题的弹出框
                    selectedValue={this.state.language}
                    onValueChange={lang =>{this.setState({language:lang})}}
                    mode='dialog'>
                    <Picker.Item label='java' value='java'/>
                    <Picker.Item label='javaScript' value='javaScript'/>
                    <Picker.Item label='Php' value='Php'/>
                    <Picker.Item label='Android' value='Android'/>
                    <Picker.Item label='React-native' value='React-native'/>
                </PickerIOS>
                <Text>您选择的是:{this.state.language}</Text>




                <Modal
                    isVisible={this.state.isModalVisible}
                    animationIn='fadeIn'
                    animationOut='fadeOut'
                    backdropColor="#fff"
                    backdropOpacity={1}
                    animationInTiming={2500}
                    style={{backgroundColor: '#fff',flex: 1, }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text onPress={this._hideModal.bind(this)}>Hello!</Text>
                    </View>
                </Modal>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
});
