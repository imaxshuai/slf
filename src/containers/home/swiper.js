import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';

var ImagePicker = NativeModules.ImageCropPicker;

export class SwiperList extends Component {

    constructor() {
        super();
        this.state = {
            image: null,
            images: null
        };
    }

    pickSingleWithCamera() {
        ImagePicker.openPicker({
            multiple: true,
        }).then(images => {
            console.log(images);
            this.setState({
                image: null,
                images: images.map(i => {
                    return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
            });
        }).catch(e => alert('图片选择出错！'));
    }

    uploadImages =()=>{
        console.log(this.state.images);

        let params = {
            path:  this.state.images[0].uri,    //本地文件地址
        };
        console.log(params);
        Http.uploadImage('/api/replease/house', params)
            .then( res=>{
                console.log('success');
            }).catch( err=>{
            //请求失败
            console.log('flied');
        })

    }



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
        return (<View style={styles.container}>
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
        alignItems: 'center'
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
