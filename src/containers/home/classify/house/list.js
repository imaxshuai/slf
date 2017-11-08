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
    FlatList,
    Animated,
    ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as userActions from '../../../../redux/actions/user';
import * as sortActions from '../../../../redux/actions/sort';
import ListItemHouseComponent from '../../../../components/LisItemHouse'

let { width, height } = Dimensions.get("window");
let price = ['6000元/㎡ 以内','6000-10000元/㎡','10000-15000元/㎡','15000-30000元/㎡','30000元/㎡ 以上'];


class HouseList extends Component{


    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            isEnd: false,
            cityModelHeight: new Animated.Value(0),
            priceModelHeight: new Animated.Value(0),
            modelIsShow01: false,
            modelIsShow02: false,
            modelIsShow03: false,
            modelIsShow04: false,
            area: null,
            price: null,
        }
    }

    componentDidMount(){

    }

    alertFilterCity = ()=>{
        alert('南京');
    };

    //区域筛选条件
    showAreaModel = ()=>{
        if(this.state.modelIsShow01){
            Animated.spring(
                this.state.cityModelHeight,
                {
                    toValue: 0,
                    friction: 30,// 摩擦力，默认为7.
                    tension: 300,// 张力，默认40。
                }
            ).start();
            this.setState({modelIsShow01: false});
        }else{
            Animated.spring(
                this.state.cityModelHeight,
                {
                    toValue: height-111,
                    friction: 10,// 摩擦力，默认为7.
                    tension: 400,// 张力，默认40。
                }
            ).start();
            this.setState({modelIsShow01: true});
        }
    };

    chooseArea = (data)=>{
        this.setState({area: data});
        this.showAreaModel();
    };

    //租金筛选条件
    showPriceModel = ()=>{
        if(this.state.modelIsShow02){
            Animated.spring(
                this.state.priceModelHeight,
                {
                    toValue: 0,
                    friction: 30,// 摩擦力，默认为7.
                    tension: 400,// 张力，默认40。
                }
            ).start();
            this.setState({modelIsShow02: false});
        }else{
            Animated.spring(
                this.state.priceModelHeight,
                {
                    toValue: height-111,
                    friction: 10,// 摩擦力，默认为7.
                    tension: 400,// 张力，默认40。
                }
            ).start();
            this.setState({modelIsShow02: true});
        }
    };

    choosePrice = (data)=>{
        this.setState({price: data});
        this.showPriceModel();
    };


    //获取下拉加载更多数据
    _getMoreHouse = ()=>{
        let houseList = this.props.houseList;
        let page = parseInt(houseList.length/10)+1;
        if(houseList.length%10==0){
            let params = {page: page, sort_name: this.props.navigation.state.params.key, city: City.name};
            this.props.sortActions.getHouseList(params, houseList);
        }else{
            this.setState({
                isEnd: true,
            })
        }
    };
    //上拉页面刷新
    _onRefresh = ()=>{
        let params = {page: 1, sort_name: this.props.navigation.state.params.key, city: City.name};
        this.setState({
            isEnd: false
        });
        this.props.sortActions.getHouseList(params, []);
    };

    _footer =()=>{
        return (
            <View><Text style={{fontSize: 16, color: '#aaa', textAlign: 'center', padding:12,}}>{this.state.isEnd?'已经没有更多信息了':'正在加载更多数据...'}</Text></View>
        )
    };


    render() {
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
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Replease')}>
                            <Text style={{color: '#aaa'}}>发布信息</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.filterArea}>
                    <TouchableWithoutFeedback onPress={this.showAreaModel}>
                        {this.state.modelIsShow01
                            ?
                            (<View style={styles.filterTextBox}>
                                <Text style={[styles.filterText, {color: '#fa0064'}]} numberOfLines={1}>
                                    {this.state.area==null?('全'+City.name):this.state.area}
                                </Text>
                                <Icon name="arrow-drop-up" size={18} color="#fa0064" />
                            </View>)
                            :
                            (<View style={styles.filterTextBox}>
                                <Text style={styles.filterText} numberOfLines={1}>
                                    {this.state.area==null?('全'+City.name):this.state.area}
                                </Text>
                                <Icon name="arrow-drop-down" size={18} color="#999" />
                            </View>)
                        }
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={this.showPriceModel}>
                        <View style={styles.filterTextBox}>
                            {this.state.modelIsShow02
                                ?
                                (<View style={styles.filterTextBox}>
                                    <Text style={[styles.filterText, {color: '#fa0064'}]} numberOfLines={1}>
                                        {this.state.price==null?'租金':this.state.price}
                                    </Text>
                                    <Icon name="arrow-drop-up" size={18} color="#fa0064" />
                                </View>)
                                :
                                (<View style={styles.filterTextBox}>
                                    <Text style={styles.filterText} numberOfLines={1}>
                                        {this.state.price==null?'租金':this.state.price}
                                    </Text>
                                    <Icon name="arrow-drop-down" size={18} color="#999" />
                                </View>)
                            }
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

                {/*城市筛选model*/}
                <Animated.View
                    style={[styles.model, {height: this.state.cityModelHeight}]}
                >
                    <View style={styles.modelContent}>
                        <ScrollView>

                            <TouchableOpacity onPress={this.chooseArea.bind(this, null)}>
                                <View style={styles.area}>
                                    <Text
                                        style={this.state.area?styles.areaText:styles.areaTextActive}>
                                        {'全'+City.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {City.area.map((area)=>(
                                <TouchableOpacity key={area} onPress={this.chooseArea.bind(this, area)}>
                                    <View style={styles.area}>
                                        <Text
                                            style={area==this.state.area?styles.areaTextActive:styles.areaText}>
                                            {area}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <TouchableWithoutFeedback onPress={this.showAreaModel}>
                        <View style={{height: '35%'}} />
                    </TouchableWithoutFeedback>
                </Animated.View>

                {/*价格筛选model*/}
                <Animated.View
                    style={[styles.model, {height: this.state.priceModelHeight}]}
                >
                    <View style={styles.modelContent}>
                        <ScrollView>

                            <TouchableOpacity onPress={this.choosePrice.bind(this, null)}>
                                <View style={styles.price}>
                                    <Text
                                        style={this.state.area?styles.priceText:styles.priceTextActive}>
                                        不限
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {price.map((price)=>(
                                <TouchableOpacity key={price} onPress={this.choosePrice.bind(this, price)}>
                                    <View style={styles.price}>
                                        <Text
                                            style={price==this.state.price?styles.priceTextActive:styles.priceText}>
                                            {price}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <TouchableWithoutFeedback onPress={this.showPriceModel}>
                        <View style={{height: '35%'}} />
                    </TouchableWithoutFeedback>
                </Animated.View>

                {/*无限下拉*/}
                <FlatList
                    ListFooterComponent={this._footer}
                    renderItem={({item})=><ListItemHouseComponent info={item} navigation={this.props.navigation} />}
                    // ListEmptyComponent={this.createEmptyView()}
                    data={this.props.houseList}
                    keyExtractor={(item)=>item.id}

                    initialNumToRender={5}

                    refreshing={this.props.houseList.length<=0}
                    onEndReachedThreshold={0}
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

    /*筛选区model样式*/
    model: {
        width: '100%',
        position: 'absolute',
        top: 111,
        backgroundColor: 'rgba(1,1,1,0.5)',
        overflow: 'hidden',
        zIndex: 99,
    },
    modelContent: {
        width: '100%',
        height: '65%',
        backgroundColor: '#fff'
    },
    area: {
        height: 30,
        paddingLeft: 15,
        justifyContent: 'center',
        borderBottomWidth: 0.3,
        borderColor: '#ccc',
    },
    areaTextActive: {
        color: '#fa0064',
    },
    areaText: {
        color: '#666',
    },
    price: {
        height: 50,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
    },
    priceTextActive: {
        fontSize: 15,
        color: '#fa0064',
    },
    priceText: {
        fontSize: 15,
        color: '#000',
    },
});
