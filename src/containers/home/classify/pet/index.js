import React,{ Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
    Platform,
    Image,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

let { width, height } = Dimensions.get("window");
export class PetClassify extends Component{

    static navigationOptions = {
        header: null,
    };

    componentDidMount(){
        console.log(this.props.navigation)
    }

    render() {

        console.log(this.props)
        console.log(this.props.navigation.state.params.label)

        return (
            <View style={styles.container}>

                {/*分类产品头部搜索部分*/}
                <View style={styles.homeHeader}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.city} >
                        <Icon name="navigate-before" size={25} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Search')}>
                        <View style={styles.searchInput}>
                            <Icon name="search" size={22} color="#aaa" />
                            <Text style={styles.headerText}>请输入要查询的关键字</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.userIcon}>
                        <TouchableOpacity>
                            <Text style={{color: '#aaa'}}>发布信息</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <ScrollView>

                    {/*轮播广告位展示*/}
                    <View style={styles.ss}>
                        <Swiper
                            showsButtons={false}
                            autoplay={true}
                            autoplayTimeout={3}
                            paginationStyle={{ bottom: 5 }}
                            dotStyle={{backgroundColor:'#fff', width: 10, height: 10}}
                            activeDotStyle={{backgroundColor:'#fa0064', width: 10, height: 10}}
                        >
                            <Image source={require('../../../../images/carousel-01.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../../../images/carousel-02.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../../../images/carousel-03.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../../../images/carousel-04.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../../../images/carousel-05.jpg')} style={styles.carouselImg} />
                        </Swiper>
                    </View>

                    {/*分类产品子项目*/}
                    <View style={styles.navClass}>
                        <TouchableOpacity onPress={()=>alert('暂时没连接， 用来做广告位')}>
                            <View style={styles.navItem}>
                                <Icon name="location-city" size={35} color="#39a0f4" />
                                <Text style={styles.navItemText}>房屋出租</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>alert('暂时没连接， 用来做广告位')}>
                            <View style={styles.navItem}>
                                <Icon name="card-travel" size={35} color="#fe4a6c" />
                                <Text style={styles.navItemText} >人才招聘</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>alert('暂时没连接， 用来做广告位')}>
                            <View style={styles.navItem}>
                                <Icon name="business-center" size={35} color="#42ba7b" />
                                <Text style={styles.navItemText} >商业服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>alert('暂时没连接， 用来做广告位')}>
                            <View style={styles.navItem}>
                                <Icon name="shop" size={35} color="#f6552c" />
                                <Text style={styles.navItemText}>同城二手</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*分类列表*/}

                    <View  style={styles.listArea}>
                        <View style={styles.listTitle}>
                            <Text  style={styles.titleText}>{this.props.navigation.state.params['title']}</Text>
                        </View>
                        <View style={styles.listBody}>
                            {
                                this.props.navigation.state.params['label'].map((item)=>(
                                    <TouchableOpacity key={item.key} onPress={()=>this.props.navigation.navigate('PetList', item)}>
                                        <Text  style={styles.bodyText}>{item.key}</Text>
                                    </TouchableOpacity>)
                                )
                            }
                        </View>
                    </View>
                    <View style={{height: 100,}}></View>

                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    /*首页头部搜索区域样式*/
    homeHeader: {
        height: 70,
        width: width,
        flexDirection: 'row',
        paddingTop: Platform.OS=='ios'?25:20,
    },
    city: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
    },
    searchInput: {
        flex: 7,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 35,
        padding: 10,
        borderRadius: 2,
        alignItems: 'center',
    },
    userIcon: {
        flex: 2,
        paddingTop: 10,
        alignItems: 'center',
    },
    headerText: {
        color: '#aaa'
    },


    /*轮播图样式*/
    ss: {
        width: width,
        height: 100,
    },
    carouselImg: {
        width: width,
        height: 100,
        resizeMode: 'stretch',
    },
    carouselDot: {
        backgroundColor: '#fa0064',
    },

    /*分类子项目样式*/
    navClass: {
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 15,
        backgroundColor: '#fff',
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center",
        width: (width-30)/4,
        marginBottom: 10,
    },
    navItemText: {
        marginTop: 5,
    },
    systemNews: {
        width: width,
        resizeMode: 'stretch',
        height: width*0.16,
    },

    /*classify分类列表选择*/
    listArea: {
        marginTop: 10,
        width: width,
    },
    listTitle: {
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    titleText: {
        paddingLeft: 10,
        color: '#999'
    },
    listBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    bodyText: {
        width: width/3,
        height: 40,
        lineHeight: Platform.OS == 'ios'?40:30,
        borderWidth: 1,
        textAlign: 'center',
        borderColor: '#eee',
        color: '#333',
    }


});
