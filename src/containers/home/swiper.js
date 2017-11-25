import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';

import {Toast} from "../../components/toast";

var ImagePicker = NativeModules.ImageCropPicker;

export class SwiperList extends Component {

    static navigationOptions = {
        headerTitle: '头像上传',
    }

    constructor() {
        super();
        this.state = {
            image: null,
            images: null,
            show: false,
        };
    }

    pickSingleWithCamera() {
        ImagePicker.openPicker({
            multiple: true,
            includeBase64: false,
        }).then(images => {
            console.log(images);
            this.setState({
                images: images
            });
        }).catch(e => alert('图片选择出错！'));
    }

    uploadImages =()=>{

        let data = new FormData();
        data.append("imgFile", this.state.images[0]);

        console.log(data);
        Http.post('http://localhost/public/api/user/update', data ,{'Content-Type': 'application/json'},)
            .then( res=>{
                console.log(res);
            }).catch( err=>{
            //请求失败
            throw err;
        })

    };

    render() {
        return (
            <View style={styles.container}>

                <Toast
                    show={this.state.show}
                    message='我终于充公了啊啊啊啊啊！'
                />

                <ScrollView style={{backgroundColor: '#fff'}}>
                    {this.state.images ? this.state.images.map((i) => (
                        <View key={i.path}>
                            <Image  style={{width: 300, height: 300, resizeMode: 'contain'}} source={{uri:i.path}}/>
                        </View>
                    )) : null}
                </ScrollView>

                <TouchableOpacity onPress={() => this.pickSingleWithCamera(false)} style={styles.button}>
                    <Text style={styles.text}>选择照片</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.uploadImages} style={styles.button}>
                    <Text style={styles.text}>上传图片</Text>
                </TouchableOpacity>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    button: {
        backgroundColor: '#fa0064',
        padding: 10,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});
