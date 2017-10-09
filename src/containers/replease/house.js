import React, { Component } from 'react'
import { Text,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
} from 'react-native'

let {width} = Dimensions.get('window');

export class RrepleaseHouse extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params,
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTintColor: '#333',
    })

    render () {

        console.log(this.props)
        return (
            <ScrollView style={{ flex: 1}}>

                {/*图片删除*/}
                <TouchableOpacity onPress={()=> alert('挑战拍照或相册界面')}>
                    <View style={styles.imgUploadBox}>
                        <Image source={require('../../images/imgUpload.png')} style={styles.imgUploadImg} />
                        <Text style={styles.imgUploadText}>选择要上传的照片</Text>
                    </View>
                </TouchableOpacity>
                {/*标题*/}
                <View style={styles.formGroup}>
                    <Text style={styles.formRequire}>*</Text>
                    <Text style={styles.formGroupText}>标题</Text>
                    <TextInput
                        placeholder="请输入标题"
                        autoCapitalize="none"
                        // secureTextEntry={true} //密码输入方式
                        style={styles.formGroupInput} />
                </View>
                {/*描述*/}
                <View style={styles.formGroup}>
                    <Text style={styles.formRequire}>*</Text>
                    <Text style={styles.formGroupText}>描述</Text>
                    <TextInput
                        placeholder="请对发布的信息进行描述..."
                        autoCapitalize="none"
                        multiline={true}
                        // secureTextEntry={true} //密码输入方式
                        style={styles.formGroupTextarea} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formRequire}>*</Text>
                    <Text style={styles.formGroupText}>发布人身份</Text>
                    <TextInput
                        placeholder="填写发布人身份"
                        autoCapitalize="none"
                        // secureTextEntry={true} //密码输入方式
                        style={styles.formGroupInput} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formRequire}>*</Text>
                    <Text style={styles.formGroupText}>价格(元)</Text>
                    <TextInput
                        placeholder="价格"
                        autoCapitalize="none"
                        // secureTextEntry={true} //密码输入方式
                        style={styles.formGroupInput} />
                </View>

                <Text style={styles.submitBtn} onPress={()=>alert('功能暂时未开放...')}>
                    立即发布
                </Text>



            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({

    //图片上传样式
    imgUploadBox:{
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 3,
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

    //form表单
    formRequire: {
        color: '#fa0064',
        width: 20,
        height: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    formGroup: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    formGroupText: {
        height: 20,
        lineHeight: 16,
        width: 85,
    },
    formGroupInput: {
        fontSize: 14,
        height: 20,
        lineHeight: 20,
        width: '80%'
    },
    formGroupTextarea: {
        height: 60,
        fontSize: 14,
        width: '80%'
    },

    //发布按钮
    submitBtn: {
        marginTop: 20,
        marginLeft: 20,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        width: width-40,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#fa0064',
        borderRadius: 3,
        overflow: 'hidden',
        fontWeight: '500',
    }

})