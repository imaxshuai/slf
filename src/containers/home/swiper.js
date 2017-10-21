
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Animated, StyleSheet, Picker, PickerIOS, Dimensions } from 'react-native'
import Modal from 'react-native-modal';
import {MessageBar, MessageBarManager} from 'react-native-message-bar';

const {width} = Dimensions.get('window')
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

                <View style={{flexDirection: 'row'}}>
                    <PickerIOS
                        prompt='请选择操作语言' //带标题的弹出框
                        selectedValue={this.state.language}
                        onValueChange={lang =>{this.setState({language:lang})}}
                        mode='dialog'
                        style={{backgroundColor:'#fff',width:width*0.5,}}
                    >
                        <Picker.Item label='java' value='java'/>
                        <Picker.Item label='javaScript' value='javaScript'/>
                        <Picker.Item label='Php' value='Php'/>
                        <Picker.Item label='Android' value='Android'/>
                        <Picker.Item label='React-native' value='React-native'/>
                    </PickerIOS>
                    <PickerIOS
                        prompt='请选择操作语言' //带标题的弹出框
                        selectedValue={this.state.language}
                        onValueChange={lang =>{this.setState({language:lang})}}
                        mode='dialog'
                        style={{backgroundColor:'#fff',width:150,}}
                    >
                        <Picker.Item label='java' value='java'/>
                        <Picker.Item label='javaScript' value='javaScript'/>
                        <Picker.Item label='Php' value='Php'/>
                        <Picker.Item label='Android' value='Android'/>
                        <Picker.Item label='React-native' value='React-native'/>
                    </PickerIOS>
                </View>
                <Text>您选择的是:{this.state.language}</Text>

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
/*
var React = require('react');
var ReactNative = require('react-native');
var {
    PickerIOS,
    Text,
    View,
} = ReactNative;

var PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
    amc: {
        name: 'AMC',
        models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
    },
    alfa: {
        name: 'Alfa-Romeo',
        models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
    },
    aston: {
        name: 'Aston Martin',
        models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
    },
    audi: {
        name: 'Audi',
        models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
    },
    austin: {
        name: 'Austin',
        models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
    },
    borgward: {
        name: 'Borgward',
        models: ['Hansa', 'Isabella', 'P100'],
    },
    buick: {
        name: 'Buick',
        models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
            'Roadmaster', 'Skylark'],
    },
    cadillac: {
        name: 'Cadillac',
        models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
    },
    chevrolet: {
        name: 'Chevrolet',
        models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
            'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
    },
};

export class SwiperList extends React.Component{
    constructor(){
        super();
        this.state = {
            carMake: 'cadillac',
            modelIndex: 3,
        }
    }

    render(){
        var make = CAR_MAKES_AND_MODELS[this.state.carMake];
        var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
        return (
            <View>
                <Text>Please choose a make for your car:</Text>
                <PickerIOS
                    selectedValue={this.state.carMake}
                    onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
                    {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                        <PickerItemIOS
                            key={carMake}
                            value={carMake}
                            label={CAR_MAKES_AND_MODELS[carMake].name}
                        />
                    ))}
                </PickerIOS>
                <Text>Please choose a model of {make.name}:</Text>
                <PickerIOS
                    selectedValue={this.state.modelIndex}
                    key={this.state.carMake}
                    onValueChange={(modelIndex) => this.setState({modelIndex})}>
                    {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
                        <PickerItemIOS
                            key={this.state.carMake + '_' + modelIndex}
                            value={modelIndex}
                            label={modelName}
                        />
                    ))}
                </PickerIOS>
                <Text>You selected: {selectionString}</Text>
            </View>
        );
    }
};

var PickerStyleExample = React.createClass({
    getInitialState: function() {
        return {
            carMake: 'cadillac',
            modelIndex: 0,
        };
    },

    render: function() {
        var make = CAR_MAKES_AND_MODELS[this.state.carMake];
        var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
        return (
            <PickerIOS
                itemStyle={{fontSize: 25, color: 'red', textAlign: 'left', fontWeight: 'bold'}}
                selectedValue={this.state.carMake}
                onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
                {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                    <PickerItemIOS
                        key={carMake}
                        value={carMake}
                        label={CAR_MAKES_AND_MODELS[carMake].name}
                    />
                ))}
            </PickerIOS>
        );
    },
});

exports.displayName = (undefined: ?string);
exports.title = '<PickerIOS>';
exports.description = 'Render lists of selectable options with UIPickerView.';
exports.examples = [
    {
        title: '<PickerIOS>',
        render: function(): ReactElement<any> {
            return <PickerExample />;
        },
    },
    {
        title: '<PickerIOS> with custom styling',
        render: function(): ReactElement<any> {
            return <PickerStyleExample />;
        },
    }];*/
