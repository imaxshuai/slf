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
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

export class SwiperList extends Component {
    state = {
        isModalVisible: false
    };


    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => {
        this.setState({ isModalVisible: false });
    }

    render () {
        return (
            <View style={{ flex: 1}}>
                <TouchableOpacity onPress={this._showModal}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
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
