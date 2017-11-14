import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Animated, StyleSheet, Picker, PickerIOS,Dimensions, Platform } from 'react-native'
import Modal from 'react-native-modal';
import {HeaderComponent} from "../../components/header";
import Icon from 'react-native-vector-icons/MaterialIcons';

let { width } = Dimensions.get('window');

export class ModalList extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(...props){
        super(...props);
        this.state = {
            visibleModal: null,
            slideHeight: new Animated.Value(0),
        };
    }


    componentDidMount(){

    }

    show = ()=>{
        Animated.spring(
            this.state.slideHeight,
            {
                toValue: 60,
                friction: 10,// 摩擦力，默认为7.
                tension: 40,// 张力，默认40。
            }
        ).start();

        setTimeout(()=>{
            Animated.timing(
                this.state.slideHeight,
                {
                    toValue: 0,
                    friction: 30,// 摩擦力，默认为7.
                }
            ).start();
        }, 5000)

    };



    render () {

        console.log(this.props);

        if(this.props.show==true){
            this.show();
        }

        return (
            <View style={styles.container}>


                <Animated.View style={[styles.toast, {height: this.state.slideHeight}]}>
                    <Text style={styles.toastImg}><Icon name='info' color='#3176cd' size={20} /></Text>
                    <Text style={styles.toastMessage}>我是提示信息</Text>
                </Animated.View>

                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>信息发布</Text>}
                    headerRight={<Text onPress={this.show}>发布</Text>}
                />

                <TouchableOpacity onPress={() => this.setState({ visibleModal: 5 })}>
                    <View style={styles.button}>
                        <Text>底部显示</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                    isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    <View style={styles.modalContent}>
                        <Text>Hello!</Text>
                    </View>
                </Modal>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    toast:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#5d8',
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    toastImg:{
        paddingTop: Platform.OS=='ios'?20: 0,
        paddingRight: 10,
        paddingLeft: 10,
    },
    toastMessage:{
        paddingTop: Platform.OS=='ios'?20: 0,
    },


});
