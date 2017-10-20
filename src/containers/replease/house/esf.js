import React, { Component } from 'react'
import { Text,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
    Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { NavbarTitleComponent } from '../../../components/NavbarTitle';

let {width} = Dimensions.get('window');

export class Replease1to2 extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null
    });

    //渲染头部navbar
    renderLeftItem(){
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name="navigate-before" size={25} />
            </TouchableOpacity>
        )
    }
    renderTitletem(){
        return (
            <Text style={{fontWeight: 'bold'}}>{this.props.navigation.state.params}</Text>
        )
    }

    render () {

        console.log(this.props);
        return (
            <View style={{ flex: 1}}>

                <NavbarTitleComponent
                    leftItem={this.renderLeftItem.bind(this)}
                    titleItem={this.renderTitletem.bind(this)}
                />
                <ScrollView>

                    {/*图片删除*/}
                    <TouchableOpacity onPress={()=> alert('挑战拍照或相册界面')}>
                        <View style={styles.imgUploadBox}>
                            <Image source={require('../../../images/imgUpload.png')} style={styles.imgUploadImg} />
                            <Text style={styles.imgUploadText}>选择要上传的照片</Text>
                        </View>
                    </TouchableOpacity>
                    {/*标题*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>选择区域</Text>
                        <TextInput
                            placeholder="请选择区域"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>标题</Text>
                        <TextInput
                            placeholder="请输入标题"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*小区名称*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>小区名称</Text>
                        <TextInput
                            placeholder="请输入小区名"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*小区地址*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>小区地址</Text>
                        <TextInput
                            placeholder="请输入小区地址"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*单价*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>单价(万元)</Text>
                        <TextInput
                            placeholder="单价"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*面积*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>面积</Text>
                        <TextInput
                            placeholder="面积"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*房型*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>房型</Text>
                        <TextInput
                            placeholder="房型"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*类型*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>类型</Text>
                        <TextInput
                            placeholder="类型"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*描述*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}></Text>
                        <Text style={styles.formGroupText}>内容详情</Text>
                        <TextInput
                            placeholder="请对发布的信息进行描述..."
                            autoCapitalize="none"
                            multiline={true}
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupTextarea} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>发布人身份</Text>
                        <TextInput
                            placeholder="填写发布人身份"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>

                    {/*联系人*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>联系人</Text>
                        <TextInput
                            placeholder="联系人"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>
                    {/*联系电话*/}
                    <View style={styles.formGroup}>
                        <Text style={styles.formRequire}>*</Text>
                        <Text style={styles.formGroupText}>联系电话</Text>
                        <TextInput
                            placeholder="联系电话"
                            autoCapitalize="none"
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            style={styles.formGroupInput} />
                    </View>

                    <Text style={styles.submitBtn} onPress={()=>alert('功能暂时未开放...')}>
                        立即发布
                    </Text>

                </ScrollView>

            </View>

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
        width: 85,
    },
    formGroupInput: {
        width: width-130,
        padding: 0,
        margin: 0,
        height: 20,
        fontSize: 13
    },
    formGroupTextarea: {
        height: 60,
        padding: 0,
        margin: 0,
        fontSize: 13,
        width: '80%'
    },

    //发布按钮
    submitBtn: {
        marginTop: 20,
        marginLeft: 20,
        height: 40,
        lineHeight: Platform.OS=='ios'?40:30,
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