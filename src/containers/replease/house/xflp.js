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
    TouchableWithoutFeedback,
    Picker,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';

import { NavbarTitleComponent } from '../../../components/NavbarTitle';

let {width} = Dimensions.get('window');

export class Replease1to1 extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor(...props){
        super(...props);
        this.state = {
            visibleModal: null,
            rooms: '1室',
            halls: '0厅',
            guards: '0卫',
        }
    }

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
    //厅室改变调用
    pickerChange =(a, b)=>{
        console.log(a, b);
    }


    render () {

        console.log(this.props);
        let rooms = [1,2,3,4,5,6,7,8,9];
        let halls = [0,1,2,3,4,5,6,7,8,9];
        let guards = [0,1,2,3,4,5,6,7,8,9];
        return (
            <View style={{ flex: 1}}>

                <NavbarTitleComponent
                    leftItem={this.renderLeftItem.bind(this)}
                    titleItem={this.renderTitletem.bind(this)}
                />
                <ScrollView>

                    {/*提示消息*/}
                    <Text style={styles.system}>您今天还可免费发布5条信息!</Text>
                    {/*图片删除*/}
                    <TouchableOpacity onPress={()=> alert('挑战拍照或相册界面')}>
                        <View style={styles.imgUploadBox}>
                            <Image source={require('../../../images/imgUpload.png')} style={styles.imgUploadImg} />
                            <Text style={styles.imgUploadText}>选择要上传的照片</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>基本信息</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>小区</Text>
                            <TextInput autoCapitalize='none' placeholder="请填写小区名" style={styles.infoInput} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>具体地址</Text>
                            <TextInput autoCapitalize='none' placeholder="例：10栋3单元506室" style={styles.infoInput} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>面积(㎡)</Text>
                            <TextInput autoCapitalize='none' placeholder="请填写使用面积" style={styles.infoInput} />
                        </View>
                        <View style={styles.infoGroup}>
                            <TouchableWithoutFeedback onPress={()=>this.setState({visibleModal: 5})}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>厅室</Text>
                                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]}>请选择</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={()=>alert(11)}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>朝向</Text>
                                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]}>请选择</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={()=>alert(11)}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>楼层</Text>
                                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]}>请选择</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>


                    <Text style={styles.submitBtn} onPress={()=>{alert('请捎带...')}}>
                        立即发布
                    </Text>

                </ScrollView>


                <Modal
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                    isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    <View style={[styles.modalContent, {paddingRight:30,paddingLeft:30}]}>

                        <View style={styles.modalHeader}>
                            <View style={[styles.modalHeaderItem, styles.modalHeaderItemBorder]}>
                                <Text  style={styles.modalHeaderItemTitle}>厅室</Text>
                                <Text  style={styles.modalHeaderItemText}>{this.state.rooms+this.state.halls+this.state.guards}</Text>
                            </View>
                            <View style={styles.modalHeaderItemCenter}>
                                <Text  style={styles.modalHeaderItemTitle}>朝向</Text>
                                <Text  style={styles.modalHeaderItemText}>东南</Text>
                            </View>
                            <View style={styles.modalHeaderItem}>
                                <Text  style={styles.modalHeaderItemTitle}>楼层</Text>
                                <Text  style={styles.modalHeaderItemText}>4/13</Text>
                            </View>
                        </View>

                        {/*选择厅室的*/}
                        <View>
                            <View style={styles.centerBox}>
                                <Text style={styles.centerBoxInfo}>请选择厅室</Text>
                                <Text style={styles.centerBoxTrue} onPress={() => this.setState({ visibleModal: null })}>确定</Text>
                            </View>

                            <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30}}>
                                <Picker
                                    selectedValue={this.state.rooms}
                                    onValueChange={lang =>{
                                        this.setState({rooms:lang});
                                    }}
                                    style={{backgroundColor:'#fff',flex:1,}}
                                >
                                    {rooms.map((i)=>(<Picker.Item label={i+'室'} value={i+'室'} key={i} />))}
                                </Picker>
                                <Picker
                                    selectedValue={this.state.halls}
                                    onValueChange={lang =>{this.setState({halls:lang})}}
                                    style={{backgroundColor:'#fff',flex:1,}}
                                >
                                    {halls.map((i)=>(<Picker.Item label={i+'厅'} value={i+'厅'} key={i} />))}
                                </Picker>
                                <Picker
                                    selectedValue={this.state.guards}
                                    onValueChange={lang =>{this.setState({guards: lang})}}
                                    style={{backgroundColor:'#fff',flex:1,}}
                                >
                                    {guards.map((i)=>(<Picker.Item label={i+'卫'} value={i+'卫'} key={i} />))}
                                </Picker>
                            </View>
                        </View>

                    </View>
                </Modal>

            </View>

        )
    }

}

const styles = StyleSheet.create({

    //提示消息
    system: {
        backgroundColor: '#fa0064',
        color: '#fff',
        paddingLeft: 10,
        lineHeight: Platform.OS=='ios'?30:20,
    },
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

    //数据注入区域
    item:{
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        marginTop: 5,
    },
    itemTitle: {
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    itemTitleText: {
        lineHeight: Platform.OS=='ios'?30:20,
    },
    info:{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    infoGroup:{
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
    },
    infoTitle: {
        lineHeight: Platform.OS=='ios'?30:20,
        color: '#666'
    },
    infoInput: {
        marginTop: 10,
        marginBottom: 15,
        width: width,
        textAlign: 'center',
        fontSize: 18,
    },
    infoGroupInput: {
        marginTop: 10,
        marginBottom: 15,
        width: width*0.3,
        textAlign: 'center',
        fontSize: 14,
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
    },


    //模态框
    modalContent: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalHeader: {
        width: width,
        flexDirection: 'row',
    },
    modalHeaderItem: {
        paddingTop: 15,
        paddingBottom: 15,
        width: width/3,
        alignItems: 'center',
    },
    modalHeaderItemBorder: {
        borderTopWidth: 3,
        borderColor: '#fa0064',
    },
    modalHeaderItemCenter: {
        paddingTop: 15,
        width: width/3-2,
        alignItems: 'center',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#eee',
    },
    modalHeaderItemTitle: {
        color: '#666',
    },
    modalHeaderItemText: {
        fontSize: 18,
        paddingTop: 10,
        color: '#fa0064',
    },
    centerBox: {
        width: width,
        height: 38,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centerBoxInfo: {
        lineHeight: Platform.OS=='ios'?35:20,
        marginLeft: 20,
        color: '#666',
    },
    centerBoxTrue: {
        lineHeight: Platform.OS=='ios'?35:20,
        marginRight: 20,
        color: '#fa0064',
        fontSize: 16,
    }

});