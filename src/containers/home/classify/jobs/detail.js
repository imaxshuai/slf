import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import { NavbarTitleComponent } from '../../../../components/NavbarTitle';


let { width, height } = Dimensions.get("window");
export class JobsDetail extends Component{

    static navigationOptions = {
        header: null,
    };
    componentDidMount(){
        console.log(this.props);
        console.log(currentUser);
    }

    _goBack = ()=>{
        this.props.navigation.goBack();
    }


    render(){

        let info = this.props.navigation.state.params;
        console.log(info);

        return (
            <View style={styles.container}>

                <ScrollView>

                    <View style={styles.headerInfo}>
                        <Text style={styles.headerInfoTitle} >的撒的撒的撒的撒</Text>
                        <View style={styles.extensionBox}>
                            <Text style={styles.extensionText}>顶</Text>
                            <Text style={styles.extensionText}>火</Text>
                            <Text style={styles.extensionText}>折</Text>
                            <Text style={styles.extensionText}>新</Text>
                        </View>
                        <View style={styles.headerInfoBody}>
                            <Text style={styles.headerInfoBodyTextPrice}>2000-4000 元/月</Text>
                            <View style={styles.headerInfoBodyText}>
                                <Text style={styles.headerInfoBodyTextTime}>2017/12/8</Text>
                                <View style={{backgroundColor: '#ccc', height: 16, width: 1, marginLeft: 10,marginRight: 10}} />
                                <Text style={styles.headerInfoBodyTextSeeCount}>浏览：5人</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bodyInfo}>
                        <TouchableOpacity>
                            <View style={styles.companyArea}>
                                <View>
                                    <Text style={{fontSize: 15,}}>南京农纷期电子商务有限公司</Text>
                                    <View style={styles.companyInfo}>
                                        <View style={styles.companyInfoTextBox}>
                                            <Icon name="person" size={14} color="#fa0064"/>
                                            <Text style={{marginLeft: 7}}>民营公司</Text>
                                        </View>
                                        <View style={styles.companyInfoTextBox}>
                                            <Icon name="person" size={14} color="#fa0064"/>
                                            <Text style={{marginLeft: 7}}>500-1000人</Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="navigate-next" size={25} color="#333" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bodyInfoHeader}>
                            <View  style={styles.bodyInfoHeaderText}>
                                <Text style={styles.topText}>人数</Text>
                                <Text style={styles.BottomText}>2人</Text>
                            </View>
                            <View  style={styles.bodyInfoHeaderText}>
                                <Text style={styles.topText}>学历</Text>
                                <Text style={styles.BottomText}>本科</Text>
                            </View>
                            <View  style={styles.bodyInfoHeaderText}>
                                <Text style={styles.topText}>工作经验</Text>
                                <Text style={styles.BottomText}>3年</Text>
                            </View>
                        </View>
                        <View style={styles.bodyInfoBody}>
                            <View style={styles.infoCity}>
                                <Text  style={styles.infoCityTab}>公司位置 ：</Text>
                                <Text  style={styles.infoCityText}>南京市浦口区泰山新村</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bodyInfoDescribe}>
                        <Text style={styles.bodyInfoDescribeTitle}>职位描述</Text>
                        <View>
                            <Text style={styles.bodyInfoDescribeContent}>大少时诵诗书</Text>
                        </View>
                    </View>

                </ScrollView>

                <View style={{height: 40, backgroundColor: '#fa0064', alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>申请职位</Text>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    /*具体信息头部信息介绍*/
    headerInfo: {
        padding: 10,
        backgroundColor: '#fff',
    },
    headerInfoTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        paddingTop: 5,
        paddingBottom: 10,
        fontFamily: 'Helvetica',
    },
    extensionBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    extensionText: {
        padding: 3,
        color: '#fff',
        backgroundColor: '#fa0064',
        borderRadius: 3,
        marginLeft: 10,
        overflow: 'hidden',
        fontSize:12,
    },
    headerInfoBody: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    headerInfoBodyText: {
        flexDirection: 'row',
        height: 20,
        alignItems: 'center',
    },
    headerInfoBodyTextPrice: {
        color: '#fa0064',
        fontSize: 16,
        lineHeight: 20,
    },
    headerInfoBodyTextTime: {
        color: '#aaa',
        fontSize:12,
    },
    headerInfoBodyTextSeeCount: {
        color: '#aaa',
        fontSize:12,
    },

    /*底部具体信息介绍*/
    bodyInfo: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
    },

    //公司信息那一块样式
    companyArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderColor: '#333',
        paddingBottom: 8,
        marginBottom: 15,
    },
    companyInfo: {
        flexDirection: 'row',
    },
    companyInfoTextBox: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        alignItems: 'center',
    },


    //职位要求那一部分的样式
    bodyInfoHeader: {
        flexDirection: 'row',
    },
    bodyInfoHeaderText: {
        width: (width-20)/3,
        alignItems: 'center',
    },
    topText: {
        color: '#999',
        paddingBottom: 10,
        fontSize: 16,
    },
    BottomText: {
        fontSize: 12,
    },
    bodyInfoBody: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        marginTop: 10,
        paddingTop: 10,
    },
    infoCity: {
        flexDirection: 'row',
    },
    infoCityTab: {
        color: '#999',
        fontSize: 12,
        lineHeight: 20,
        paddingLeft: 20,
    },
    infoCityText: {
        color: '#333',
        fontSize: 14,
        lineHeight: 20,
        paddingLeft: 10,
    },

    /*房子描述*/
    bodyInfoDescribe: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    bodyInfoDescribeTitle: {
        fontSize: 18,
        fontWeight: '500',
        paddingTop: 5,
    },
    bodyInfoDescribeContent: {
        fontSize: 14,
        color: '#999',
        lineHeight: 30,
    }

});