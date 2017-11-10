import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    TouchableWithoutFeedback,
    Platform,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import * as sortActions from '../../redux/actions/sort';
import ListItemHouseComponent from '../../components/LisItemHouse'


let { width, height } = Dimensions.get("window");
let lastBackPressed = new Date().getTime();
class Home extends PureComponent{

    static navigationOptions = {
        header: null,
        tabBarLabel: "主页",
        tabBarIcon: ({tintColor})=>((<Icon name="store" size={25} color={tintColor}/>))
    };

    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
        }
    }


    componentWillMount(){

        //安卓返回按键点击效果
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.props.nav) {
                let routes = this.props.nav.routes;
                let lastRoute = routes[routes.length - 1]; // 当前页面对应的route对象

                if (routes.length === 1) {// 在第一页了,2秒之内点击两次返回键，退出应用
                    if((lastBackPressed+2000) >= Date.now()){
                        return false;
                    }
                    // 此处可以根据情况实现 点2次就退出应用，或者弹出rn视图等
                    //记录点击返回键的时间
                    lastBackPressed = Date.now();
                    ToastAndroid.show('再按返回退出应用', ToastAndroid.SHORT);


                } else {
                    console.log(routes)
                    this.props.navigation.goBack(lastRoute.key);
                }
            }
            return true;
        });

        console.log(City);

        this._getMoreHouse();

    }
    componentDidMount(){
        this.props.sortActions.getHouseList({}, {data: []});
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',()=>{});
        }
    }


    //跳转登录页
    toLogin = ()=>{
        if(currentUser.loginState){
            this.props.navigation.navigate('User');
        }else{
            this.props.navigation.navigate("Login");
        }
    }
    //跳转HouseClassify页
    toClassifyList = (list)=>{
        this.props.navigation.navigate('HouseClassify', list);
    }
    //跳转搜索页面
    toSearch(){
        this.props.navigation.navigate('Search');
    }
    //跳转flatlist页面
    toFlatList(){
        this.props.navigation.navigate('SwiperList');
    }

    //获取下拉加载更多数据
    _getMoreHouse = ()=>{
        if(this.props.houseList.data.length>=10&&!this.props.houseList.isEnd){
            this.props.sortActions.getHouseList({}, this.props.houseList);
        }
    };
    //上拉页面刷新
    _onRefresh = ()=>{
        this.props.sortActions.getHouseList({}, {data: []});
    };

    _header = ()=>(
        <View>
            {/*一级标题分类*/}
            <View style={styles.navClass}>
                <TouchableOpacity onPress={this.toClassifyList.bind(this,this.props.sort.fczs)}>
                    <View style={styles.navItem}>
                        <Icon name="location-city" size={35} color="#39a0f4" />
                        <Text style={styles.navItemText}>房产租售</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('JobClassify')}>
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
                <TouchableOpacity onPress={this.toFlatList.bind(this)}>
                    <View style={styles.adItem}>
                        <View style={styles.adTextBox}>
                            <Text style={styles.adInfoTitle}>搜来福金融</Text>
                            <Text style={styles.adDescrib}>简单快速放贷</Text>
                        </View>
                        <Icon name="developer-board" size={40} color="#39a0f4" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ModalList')}>
                    <View style={styles.adItem}>
                        <View style={styles.adTextBox}>
                            <Text style={styles.adInfoTitle}>搜来福金融</Text>
                            <Text style={styles.adDescrib}>简单快速放贷</Text>
                        </View>
                        <Icon name="developer-board" size={40} color="#fe4a6c" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('RadioComponent')}>
                    <View style={styles.adItem}>
                        <View style={styles.adTextBox}>
                            <Text style={styles.adInfoTitle}>搜来福金融</Text>
                            <Text style={styles.adDescrib}>简单快速放贷</Text>
                        </View>
                        <Icon name="developer-board" size={40} color="#42ba7b" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toFlatList.bind(this)}>
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
        </View>
    );

    _footer =()=>(
        <View>
            <Text style={{fontSize: 16, color: '#aaa', textAlign: 'center', padding:12,}}>
                {this.props.houseList.isEnd?'已经没有更多信息了':'正在加载更多数据...'}
            </Text>
        </View>
    )

    render(){

        return(

            <View style={styles.container}>
                {/*首页头部搜索部分*/}
                <View style={styles.homeHeader}>
                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Provnces')}>
                        <View style={styles.city}>
                            <Text style={styles.headerText}>{City.name}</Text>
                            <Icon name="arrow-drop-down" size={22} color="#f8f8f8" />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.toSearch.bind(this)}>
                        <View style={styles.searchInput}>
                            <Icon name="search" size={22} color="#f8f8f8" />
                            <Text style={styles.headerText}>找房子、找工作、找服务</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.userIcon}>
                        <TouchableOpacity onPress={this.toLogin}>
                            <Icon name="person" size={22} color="#f8f8f8" />
                        </TouchableOpacity>
                    </View>
                </View>


                {/*无限下拉*/}
                <FlatList
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    renderItem={({item})=><ListItemHouseComponent info={item} navigation={this.props.navigation} />}
                    // ListEmptyComponent={this.createEmptyView()}
                    data={this.props.houseList['data']}
                    keyExtractor={(item)=>item.id}

                    initialNumToRender={5}

                    refreshing={this.props.houseList['data'].length<=0}
                    onEndReachedThreshold={0.3}
                    onRefresh={this._onRefresh.bind(this)}
                    onEndReached={this._getMoreHouse.bind(this)}
                    getItemLayout={(data, index) => ( {length: 130, offset: 130 * index, index} )}
                />

            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        nav: state.nav,
        sort: state.sort,
        houseList: state.houseList,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        sortActions: bindActionCreators(sortActions, dispatch)
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
        marginLeft: 5,
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
        alignItems: 'center',
        paddingTop: 6.5
    },
    headerText: {
        color: '#f8f8f8',
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