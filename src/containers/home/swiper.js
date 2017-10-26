import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AlertIOS
} from 'react-native';

//图片选择器
var ImagePicker = require('react-native-image-picker');

//图片选择器参数设置
var options = {
    title: '请选择图片来源',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册图片',
    customButtons: [
        {name: 'hangge', title: 'hangge.com图片'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

//默认应用的容器组件
export class SwiperList extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }

    //渲染
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                <Image source={this.state.avatarSource} style={styles.image} />
                <Image source={this.state.avatarSource} style={styles.image} />
            </View>
        );
    }

    //选择照片按钮点击
    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('用户取消了选择！');
            }
            else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            }
            else if (response.customButton) {
                alert("自定义按钮点击：" + response.customButton);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }
}

//样式定义
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
    image:{
        height:198,
        width:300,
        alignSelf:'center',
    },
});