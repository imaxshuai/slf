import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    NativeModules,
    Image
} from 'react-native';
import PropTypes from 'prop-types';


const {width} = Dimensions.get('window');
var ImagePicker = NativeModules.ImageCropPicker;

export class UploadImages extends Component{

    static PropTypes = {
        images: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            images: null,
        }
    };

    //选择图片
    pickSingleWithCamera = async()=>{
        ImagePicker.openPicker({
            multiple: true,
            includeBase64: true
        }).then(images => {
            this.props.images(images);

            this.setState({
                images: images.map(i => {
                    return {uri: i.path, mime: i.mime, imgBase64: i.data};
                })
            });
        }).catch(e => alert('图片选择出错！'));

    };


    render(){
        return (
            <View style={styles.infoGroup}>
                {/*图片上传*/}
                <TouchableOpacity onPress={this.pickSingleWithCamera} style={styles.imgUploadBox}>
                    <View style={styles.imagesBox}>
                        {this.state.images==null?<Image source={require('../images/imgUpload.png')} style={styles.imgUploadImg} />:this.state.images.map((image)=>(
                            <Image key={image.uri} source={{uri: image.uri}} style={styles.imagesItem}/>
                        ))}
                    </View>
                    <Text style={styles.imgUploadText}>选择要上传的照片</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({

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

});
