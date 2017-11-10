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
export class HouseDetail extends Component{

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

    renderLeftItem = ()=>{
        return (
            <TouchableOpacity onPress={this._goBack}>
                <Icon name="navigate-before" size={25} color="#aaa" />
            </TouchableOpacity>
        )
    };
    renderTitleItem = ()=>{
        return (
                <Text>详情</Text>
        )
    };
    renderRightItem = ()=>{
        return (
            this.props.navigation.state.params.is_delete==1
                ?
                (<Icon name="favorite" color="#fa0064" size={20} />)
                :
                (<Icon name="favorite-border" color="#fa0064" size={20} />)
        )
    };

    render(){

        let info = this.props.navigation.state.params;
        console.log(info);

        return (
            <View style={styles.container}>

                {/*头部Navbar部分*/}
                <NavbarTitleComponent
                    leftItem={this.renderLeftItem}
                    titleItem={this.renderTitleItem}
                    rightItem={this.renderRightItem}  />
                <ScrollView>

                    {/*轮播部分*/}
                    <View style={styles.ss}>
                        <Swiper
                            showsButtons={false}
                            autoplay={false}
                            autoplayTimeout={3}
                            paginationStyle={{ bottom: 5 }}
                            dotStyle={{backgroundColor:'#fff', width: 10, height: 10}}
                            activeDotStyle={{backgroundColor:'#fa0064', width: 10, height: 10}}
                        >
                            {info.images.map((image)=><Image source={{uri: 'http://www.hotcc.cn/public/upload/images/'+image}} key={image} style={styles.carouselImg}/>)}
                        </Swiper>
                    </View>

                    <View style={styles.headerInfo}>
                        <Text style={styles.headerInfoTitle} >{info.title}</Text>
                        <View style={styles.extensionBox}>
                            <Text style={styles.extensionText}>顶</Text>
                            <Text style={styles.extensionText}>火</Text>
                            <Text style={styles.extensionText}>折</Text>
                            <Text style={styles.extensionText}>新</Text>
                        </View>
                        <View style={styles.headerInfoBody}>
                            <Text style={styles.headerInfoBodyTextPrice}>{info.price} 元/月</Text>
                            <View style={styles.headerInfoBodyText}>
                                <Text style={styles.headerInfoBodyTextTime}>{info.create_time}小时前</Text>
                                <View style={{backgroundColor: '#ccc', height: 16, width: 1, marginLeft: 10,marginRight: 10}}></View>
                                <Text style={styles.headerInfoBodyTextSeeCount}>浏览：{info.sort_id}人</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bodyInfo}>
                        <View style={styles.bodyInfoHeader}>
                            <View  style={styles.bodyInfoHeaderText}>
                                <Text style={styles.topText}>户型</Text>
                                <Text style={styles.BottomText}>{info.house_type}</Text>
                            </View>
                            <View  style={styles.bodyInfoHeaderText}>
                                <Text style={styles.topText}>面积</Text>
                                <Text style={styles.BottomText}>{info.house_size}㎡</Text>
                            </View>
                            <View  style={styles.bodyInfoHeaderText}>
                                <Text style={styles.topText}>方式</Text>
                                <Text style={styles.BottomText}>{info.rental_form}</Text>
                            </View>
                        </View>
                        <View style={styles.bodyInfoBody}>
                            <View style={styles.infoCity}>
                                <Text  style={styles.infoCityTab}>交易地点 ：</Text>
                                <Text  style={styles.infoCityText}>{info.address}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bodyInfoDescribe}>
                        <Text style={styles.bodyInfoDescribeTitle}>房源详情</Text>
                        <View>
                            <Text style={styles.bodyInfoDescribeContent}>{info.house_describe}</Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    /*轮播样式*/
    ss: {
        width: width,
        height: width*.65,
    },
    carouselImg: {
        height: width*.65,
        resizeMode: 'cover',
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