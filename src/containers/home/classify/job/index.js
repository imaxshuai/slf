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
export class JobClassify extends Component{

    //跳转登录页
    toLogin(){
        this.props.navigation.navigate('Replease');
    }
    //跳转搜索页面
    toSearch(){
        this.props.navigation.navigate('Search');
    }
    //返回上一界面
    _goBack(){
        this.props.navigation.goBack();
    }

    //跳转列表页
    toClassifyList(){
        this.props.navigation.navigate('JobList');
    }

    render() {
        return (
            <View>

                {/*分类产品头部搜索部分*/}
                <View style={styles.homeHeader}>
                    <TouchableOpacity onPress={this._goBack.bind(this)} style={styles.city} >
                        <Icon name="navigate-before" size={25} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={this.toSearch.bind(this)}>
                        <View style={styles.searchInput}>
                            <Icon name="search" size={22} color="#aaa" />
                            <Text style={styles.headerText}>请输入要查询的关键字</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.userIcon}>
                        <TouchableOpacity onPress={this.toLogin.bind(this)}>
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
                        <TouchableOpacity onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="location-city" size={35} color="#39a0f4" />
                                <Text style={styles.navItemText}>全职职位</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="card-travel" size={35} color="#fe4a6c" />
                                <Text style={styles.navItemText} >兼职职位</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="business-center" size={35} color="#42ba7b" />
                                <Text style={styles.navItemText} >热门职位</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: 'xixi'})}>
                            <View style={styles.navItem}>
                                <Icon name="shop" size={35} color="#f6552c" />
                                <Text style={styles.navItemText}>推荐职位</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*分类列表*/}

                    <View  style={styles.listArea}>
                        <View style={styles.listTitle}>
                            <Text  style={styles.titleText}>福利专区</Text>
                        </View>
                        <View style={styles.listBody}>
                            <TouchableOpacity><Text  style={styles.bodyText}>五险一金</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>包吃</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>包住</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>交通补助</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>年底双薪</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>房补</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>员工体检</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>带薪年假</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>双休</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>话补</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.listArea}>
                        <View style={styles.listTitle}>
                            <Text  style={styles.titleText}>热门职位</Text>
                        </View>
                        <View style={styles.listBody}>
                            <TouchableOpacity><Text  style={styles.bodyText}>货运司机</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>商务司机</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>出租车司机</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>普工</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>装卸/搬运工</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>电工</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>保安</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>快递员</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>厨师</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>餐厅服务员</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>收银员</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>钟点工</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>保姆</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>营业员</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>销售专员</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>文员</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>其他</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.listArea}>
                        <View style={styles.listTitle}>
                            <TouchableOpacity><Text  style={styles.titleText}>商铺   写字楼</Text></TouchableOpacity>
                        </View>
                        <View style={styles.listBody}>
                            <TouchableOpacity><Text  style={styles.bodyText}>商铺出租</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>商铺出售</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>商铺转让</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>写字楼出租</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>写字楼出售</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View  style={styles.listArea}>
                        <View style={styles.listTitle}>
                            <Text  style={styles.titleText}>厂房   仓库</Text>
                        </View>
                        <View style={styles.listBody}>
                            <TouchableOpacity><Text  style={styles.bodyText}>厂房出租</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>厂房出售</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>仓库出租</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>仓库出售</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>土地出租</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>土地出售</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>车库出租</Text></TouchableOpacity>
                            <TouchableOpacity><Text  style={styles.bodyText}>车库出售</Text></TouchableOpacity>
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
        lineHeight: 40,
        borderWidth: 1,
        textAlign: 'center',
        borderColor: '#eee',
        color: '#333',
    }


});
