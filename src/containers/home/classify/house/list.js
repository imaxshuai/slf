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
    FlatList
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import * as userActions from '../../../../redux/actions/user';
import * as sortActions from '../../../../redux/actions/sort';
import ListItemHouseComponent from '../../../../components/LisItemHouse'

let { width, height } = Dimensions.get("window");
class HouseList extends Component{


    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
            page: 1,
        }
    }

    componentDidMount(){

    }

    alertFilterCity = ()=>{
        alert('南京');
    };

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

    //获取下拉加载更多数据
    _getMoreHouse(){
        let params = {page: this.state.page, sort_name: this.props.navigation.state.params.key, city: City.name};
        this.props.sortActions.getHouseList(params);
        this.setState({
            page: Math.ceil(this.props.houseList.length/10),
        })
        console.log(this.state);
    }
    //上拉页面刷新
    _onRefresh() {
        this.setState({
            refreshing: true
        });
        this.props.classifyActions.getHouse([]);
        setTimeout(()=> {
            this.setState({
                refreshing: false
            });
        },1000)
    }

    //头部广告轮播
    _header = ()=>{
        return (

            <View>

                {/*轮播图*/}
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
            </View>

        )
    }


    render() {
        return (

            <View style={styles.container}>

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

                <View style={styles.filterArea}>
                    <TouchableWithoutFeedback onPress={this.alertFilterCity}>
                        <View style={styles.filterTextBox}>
                            <Text style={styles.filterText}>全南京</Text>
                            <Icon name="arrow-drop-down" size={18} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.alertFilterCity}>
                        <View style={styles.filterTextBox}>
                            <Text style={styles.filterText}>租金</Text>
                            <Icon name="arrow-drop-down" size={18} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.alertFilterCity}>
                        <View style={styles.filterTextBox}>
                            <Text style={styles.filterText}>户型</Text>
                            <Icon name="arrow-drop-down" size={18} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.alertFilterCity}>
                        <View style={styles.filterTextBox}>
                            <Text style={styles.filterText}>筛选</Text>
                            <Icon name="arrow-drop-down" size={18} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>

                </View>

                {/*无限下拉*/}
                <FlatList
                    ListHeaderComponent={this._header.bind(this)}
                    renderItem={({item})=><ListItemHouseComponent info={item} navigation={this.props.navigation} />}
                    // ListEmptyComponent={this.createEmptyView()}
                    data={this.props.houseList}
                    keyExtractor={(item)=>item.id}

                    initialNumToRender={5}

                    refreshing={this.props.houseList.length<=0}
                    onEndReachedThreshold={0.2}
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
        user: state.user,
        nav: state.nav,
        classify: state.classify,
        classifyMore: state.classifyMore,
        houseList: state.houseList,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch),
        sortActions: bindActionCreators(sortActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HouseList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    /*首页头部搜索区域样式*/
    homeHeader: {
        height: 70,
        width: width,
        flexDirection: 'row',
        paddingTop: Platform.OS=='ios'?25:20,
        backgroundColor: '#e9e9ef',
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
        color: '#aaa',
    },

    /*头部条件筛选区域*/
    filterArea:{
        width: width,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    filterTextBox: {
        flexDirection: 'row',
        width: width/4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterText: {
        color: '#333'
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

});
