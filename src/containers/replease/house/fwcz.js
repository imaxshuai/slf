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
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';
import Picker from 'react-native-picker';

import { NavbarTitleComponent } from '../../../components/NavbarTitle';

let {width} = Dimensions.get('window');

export class Replease1to3 extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params,
        headerLeft: (
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name="navigate-before" size={25} color="#666" />
            </TouchableOpacity>
        ),
        headerTitleStyle: {
            fontSize: 16,
        }
    });

    constructor(...props){
        super(...props);
        this.state = {
            visibleModal: null,
            house: null,
            direction: null,
            floors: null
        }
    }

    componentDidMount(){

    };
    componentWillUnmount(){
        Picker.hide();
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
    };

    //厅室选择器
    housePicker = ()=>{
        Picker.init({
            pickerData: [
                ['1室','2室','3室','4室','5室','6室','7室','8室','9室'],
                ['0厅','1厅','2厅','3厅','4厅','5厅','6厅','7厅','8厅','9厅'],
                ['0卫','1卫','2卫','3卫','4卫','5卫','6卫','7卫','8卫','9卫']
            ],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择厅室',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.house!=null?this.state.house:['3室','1厅','1卫'],
            onPickerConfirm: data => {
                console.log(data);
                this.setState({
                    house: data
                })
                console.log(this.state);
            },
        });
        Picker.show();
    };
    directionPicker = ()=>{
        Picker.init({
            pickerData: ['东','南','西','北','南北','东西','东南','西南','东北','西北'],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择厅室',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.direction!=null?this.state.direction:['西'],
            onPickerConfirm: data => {
                console.log(data);
                this.setState({
                    direction: data
                })
                console.log()
            },
        });
        Picker.show();
    };
    floorPicker = ()=>{
        let floors = [];
        for(let i=1;i<=99;i++){
            let data = [];
            let floor = {};
            for (let j=1;j<=99;j++){
                if(j>i){
                    data.push('共'+j+'层');
                }
            }
            floor[i+'层'] = data;
            floors.push(floor);
        }

        Picker.init({
            pickerData: floors,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择楼层',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.floors!=null?this.state.floors:['3层', '共6层'],
            onPickerConfirm: data => {
                this.setState({
                    floors: data
                })
                console.log(this.state)
            },
        });
        Picker.show();
    };


    render () {

        return (
            <View style={{ flex: 1}}>

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
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写小区名"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>具体地址</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="例：10栋3单元506室"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>面积(㎡)</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写使用面积"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            />
                        </View>
                        <View style={styles.infoGroup}>
                            <TouchableWithoutFeedback onPress={this.housePicker}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>厅室</Text>
                                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]}>
                                        {this.state.house!=null?<Text style={{color: '#333'}}>{this.state.house.join('')}</Text>:'请选择'}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={this.directionPicker}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>朝向</Text>
                                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]}>
                                        {this.state.direction!=null?<Text style={{color: '#333'}}>{this.state.direction.join('')}</Text>:'请选择'}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={this.floorPicker}>
                                <View style={styles.info}>
                                    <Text style={styles.infoTitle}>楼层</Text>
                                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]}>
                                        {this.state.floors!=null?<Text style={{color: '#333'}}>{this.state.floors.join('/')}</Text>:'请选择'}

                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>价格详情</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>单价(元/㎡)</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写每月租金"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            />
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>与我联系</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>联系人</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写联系人"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>手机号</Text>
                            <TextInput
                                autoCapitalize='none'
                                placeholder="请填写手机号"
                                placeholderTextColor="#ccc"
                                style={styles.infoInput}
                                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                            />
                        </View>

                    </View>

                    <Text style={styles.submitBtn} onPress={()=>{alert('请捎带...')}}>
                        立即发布
                    </Text>

                </ScrollView>


                {/*<Modal
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

                        选择厅室的
                        <View>
                            <View style={styles.centerBox}>
                                <Text style={styles.centerBoxInfo}>请选择厅室</Text>
                                <Text style={styles.centerBoxTrue} onPress={() => this.setState({ visibleModal: null })}>确定</Text>
                            </View>

                            <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30}}>
                                <Picker
                                    mode="dropdown"
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
                </Modal>*/}

            </View>

        )
    }

}

const styles = StyleSheet.create({

    //提示消息
    system: {
        backgroundColor: '#fa0064',
        color: '#fff',
        padding: 5,
        paddingLeft: 10,
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
        padding: 10,
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
        padding: 10,
        color: '#444',
        fontSize: 12,
    },
    infoInput: {
        width: width,
        textAlign: 'center',
        fontSize: 16,
        padding: 0,
        marginBottom: 10,
    },
    infoGroupInput: {
        marginBottom: 10,
        width: width*0.3,
        textAlign: 'center',
        fontSize: 16,
    },


    //发布按钮
    submitBtn: {
        marginTop: 20,
        height: 40,
        lineHeight: Platform.OS=='ios'?40:30,
        textAlign: 'center',
        width: width,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#fa0064',
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
        alignItems: 'center',
    },
    centerBoxInfo: {
        marginLeft: 20,
        color: '#666',
    },
    centerBoxTrue: {
        marginRight: 20,
        color: '#fa0064',
        fontSize: 16,
    }

});