import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import * as userActions from '../../redux/actions/user';
import { ListItemHouseComponent } from '../../components/LisItemHouse'


let { width, height } = Dimensions.get("window");
class Home extends Component{

    static navigationOptions = {
        tabBarLabel: "主页",
        tabBarIcon: ({tintColor})=>((<Icon name="store" size={25} color={tintColor}/>))
    };

    componentWillMount(){
        console.log(currentUser);
    }

    constructor(...props){
        super(...props);
    }


    //跳转登录页
    toLogin(){
        this.props.navigation.navigate('Login');
    }
    //跳转列表页
    toClassifyList(){
        this.props.navigation.navigate('HouseClassify');
    }
    //跳转搜索页面
    toSearch(){
        this.props.navigation.navigate('Search');
    }



    render(){

        return(
            <View style={styles.container}>
                {/*首页头部搜索部分*/}
                <View style={styles.homeHeader}>
                    <View style={styles.city}>
                        <Text style={styles.headerText}>南京</Text>
                        <Icon name="arrow-drop-down" size={22} color="#f8f8f8" />
                    </View>
                    <TouchableWithoutFeedback onPress={this.toSearch.bind(this)}>
                        <View style={styles.searchInput}>
                            <Icon name="search" size={22} color="#f8f8f8" />
                            <Text style={styles.headerText}>找房子、找工作、找服务</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.userIcon}>
                        <TouchableOpacity onPress={this.toLogin.bind(this)}>
                            <Icon name="person" size={22} color="#f8f8f8" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    {/*一级标题分类*/}
                    <View style={styles.navClass}>
                        <TouchableOpacity onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="location-city" size={35} color="#39a0f4" />
                                <Text style={styles.navItemText}>房屋出租</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="card-travel" size={35} color="#fe4a6c" />
                                <Text style={styles.navItemText} >人才招聘</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="business-center" size={35} color="#42ba7b" />
                                <Text style={styles.navItemText} >商业服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="shop" size={35} color="#f6552c" />
                                <Text style={styles.navItemText}>同城二手</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="directions-car" size={35} color="#0bbaac" />
                                <Text style={styles.navItemText}>二手车</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="card-giftcard" size={35} color="#ffb300" />
                                <Text style={styles.navItemText}>生活服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="school" size={35} color="#42ba7b" />
                                <Text style={styles.navItemText}>教育培训</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="pets" size={35} color="#39a0f4" />
                                <Text style={styles.navItemText}>宠物</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="local-car-wash" size={35} color="#fa0064" />
                                <Text style={styles.navItemText}>汽车服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="picture-in-picture" size={35} color="#39a0f4" />
                                <Text style={styles.navItemText}>票卡</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="loop" size={35} color="#ffb300" />
                                <Text style={styles.navItemText}>旧物回收</Text>
                            </View>
                        </TouchableOpacity>
                        {/*<TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                        <View style={styles.navItem}>
                            <Icon name="wc" size={35} color="#42ba7b" />
                            <Text style={styles.navItemText}>交友</Text>
                        </View>
                    </TouchableOpacity>*/}

                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="stars" size={35} color="#f6552c" />
                                <Text style={styles.navItemText}>连锁加盟</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*系统消息，主要显示系统推广的*/}
                    <View>
                        <Image source={require('../../images/ad-001.jpg')} style={styles.systemNews} />
                    </View>

                    <View style={styles.adInfo}>
                        <View style={styles.adTitle}>
                            <Text style={styles.adTitleText}>搜来福精选服务</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.adItem}>
                                <View style={styles.adTextBox}>
                                    <Text style={styles.adInfoTitle}>搜来福金融</Text>
                                    <Text style={styles.adDescrib}>简单快速放贷</Text>
                                </View>
                                <Icon name="developer-board" size={40} color="#39a0f4" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.adItem}>
                                <View style={styles.adTextBox}>
                                    <Text style={styles.adInfoTitle}>搜来福金融</Text>
                                    <Text style={styles.adDescrib}>简单快速放贷</Text>
                                </View>
                                <Icon name="developer-board" size={40} color="#fe4a6c" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.adItem}>
                                <View style={styles.adTextBox}>
                                    <Text style={styles.adInfoTitle}>搜来福金融</Text>
                                    <Text style={styles.adDescrib}>简单快速放贷</Text>
                                </View>
                                <Icon name="developer-board" size={40} color="#42ba7b" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.adItem}>
                                <View style={styles.adTextBox}>
                                    <Text style={styles.adInfoTitle}>搜来福金融</Text>
                                    <Text style={styles.adDescrib}>简单快速放贷</Text>
                                </View>
                                <Icon name="developer-board" size={40} color="#39a0f4" />
                            </View>
                        </TouchableOpacity>
                    </View>

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
                            <Image source={require('../../images/carousel-01.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../images/carousel-02.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../images/carousel-03.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../images/carousel-04.jpg')} style={styles.carouselImg} />
                            <Image source={require('../../images/carousel-05.jpg')} style={styles.carouselImg} />
                        </Swiper>
                    </View>

                    <View>
                        <View style={styles.flatListTitle}>
                            <Text style={{fontSize: 16,color: '#000'}}>猜你喜欢</Text>
                            <Text style={{fontSize: 12, color: '#aaa', marginTop:10,}}>猜你喜欢</Text>
                        </View>
                    </View>

                    {/*无限下拉推广处*/}
                    {/*<FlatList*/}
                        {/*data={[{title: 'dsfafdafad',name: '哈哈哈哈'},{title: '1111',name: '2222'}]}*/}
                        {/*renderItem={({item})=><ListItemHouseComponent info={item} />}*/}
                    {/*/>*/}



                </ScrollView>

            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    /*首页头部搜索区域样式*/
    homeHeader: {
        height: 70,
        width: width,
        backgroundColor: '#fa0064',
        flexDirection: 'row',
        paddingTop: Platform.OS=='ios'?25:20,
    },
    city: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
    },

    searchInput: {
        flex: 15,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.6)',
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
        color: '#f8f8f8'
    },

    /*分类样式*/
    navClass: {
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 15,
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center",
        width: (width-30)/4,
        marginBottom: 20,
    },
    navItemText: {
        marginTop: 5,
    },
    systemNews: {
        width: width,
        resizeMode: 'stretch',
        height: width*0.16,
    },

    /*广告信息样式*/
    adInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    adTitle: {
        width: width,
        height: 60,
        alignItems: 'center',
        padding: 20,
    },
    adTitleText: {
        fontSize: 18,
        color: '#333',

    },
    adItem: {
        width: width*0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 20,
        borderWidth: 1,
        borderColor: '#eee'
    },
    adTextBox: {
        justifyContent: 'space-between',
    },
    adInfoTitle: {
        fontSize: 18,
        color: '#555'
    },
    adDescrib: {
        fontSize: 12,
        color: '#999',
    },

    /*轮播图样式*/
    ss: {
        width: width,
        height: 70,
    },
    carouselImg: {
        width: width,
        height: 70,
        resizeMode: 'stretch',
    },
    carouselDot: {
        backgroundColor: '#fa0064',
    },
    /*flatlist列表*/
    flatListTitle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0'
    }

});