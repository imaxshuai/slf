import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HeaderComponent} from "../../components/header";
import {Toast} from "../../components/toast";

var ImagePicker = NativeModules.ImageCropPicker;

export class SwiperList extends Component {

    static navigationOptions = {
        header: null,
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
            includeBase64: true
        }).then(images => {
            console.log(images);
            this.setState({
                image: null,
                images: images.map(i => {
                    return {uri: i.path, mime: i.mime, imgBase64: i.data};
                })
            });
        }).catch(e => alert('图片选择出错！'));
    }

    uploadImages =()=>{
        let params = {
            path:  this.state.images,    //本地文件地址
        };
        console.log(params);
        Http.post('http://localhost/upload/avatar', params ,{'Content-Type': 'application/json'},)
            .then( res=>{
                console.log(res);
            }).catch( err=>{
            //请求失败
            throw err;
        })

    };



    renderImage(image) {
        return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
    }

    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
    }

    render() {
        return (
            <View style={styles.container}>


                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>信息发布</Text>}
                    headerRight={<Text onPress={()=>this.setState({show: true})}>发布</Text>}
                />
                <TouchableOpacity onPress={this.uploadImages} style={styles.button}>
                    <Text style={styles.text}>上传图片</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.uploadImages} style={styles.button}>
                    <Text style={styles.text}>上传图片</Text>
                </TouchableOpacity>

                <Toast
                    show={this.state.show}
                    message='我终于充公了啊啊啊啊啊！'
                />

                <ScrollView style={{backgroundColor: '#fff'}}>
                    {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
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
