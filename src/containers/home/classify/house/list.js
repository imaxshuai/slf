import React,{ Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
    Platform,
    FlatList,
    Animated,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as sortActions from '../../../../redux/actions/sort';
import ListItemHouseComponent from '../../../../components/LisItemHouse'
import { AreaModel, PriceModel, TypeModel } from '../../../../components/model'
import OtherModel from '../../../../components/filter'

let { width, height } = Dimensions.get("window");

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
            showAreaModel: false,
            showPriceModel: false,
            showTypeModel: false,
            showOtherModel: false,
            area: null,
            price: null,
            type: null,
            other: null,
        }
    }

    componentDidMount(){
        let filters = this.props.filter;
        for(let filter in filters){
            filters[filter] = null;
        }

        filters.sort_name = this.props.navigation.state.params.key;
        filters.city = City.name;

        for(let filter in filters){
            if(filters[filter] == null){
                delete filters[filter]
            }
        }

        this.props.sortActions.getHouseList(filters, {data: []});
    }

    getHouseListByFilter = (key, value)=>{
        this.setState({
            [key]: value,
            showAreaModel: false,
            showPriceModel: false,
            showTypeModel: false,
            showOtherModel: false,
        })
        let filters = this.props.filter;
        filters[key] = value;
        for(let filter in filters){
            if(filters[filter] == null){
                delete filters[filter]
            }
        }
        this.props.sortActions.getHouseList(filters, {data: []});
    };

    //获取下拉加载更多数据
    _getMoreHouse = ()=>{
        console.log('无线加载');
        if(this.props.houseList.data.length>=10&&!this.props.houseList.isEnd){
            this.props.sortActions.getHouseList(this.props.filter, this.props.houseList);
        }
    };
    //上拉页面刷新
    _onRefresh = ()=>{
        console.log('下拉刷新页面');
        this.props.sortActions.getHouseList(this.props.filter, {data: []});
    };

    _footer =()=>{
        return (
            <View><Text style={{fontSize: 16, color: '#aaa', textAlign: 'center', padding:12,}}>{this.props.houseList.isEnd?'已经没有更多信息了':'正在加载更多数据...'}</Text></View>
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
                    <TouchableWithoutFeedback
                        onPress={()=>this.setState({
                            showAreaModel: !this.state.showAreaModel,
                            showPriceModel: false,
                            showTypeModel: false,
                            showOtherModel: false,
                        })}
                    >
                        <View style={styles.filterTextBox}>
                            <Text style={[styles.filterText,this.state.showAreaModel?{color: '#fa0064'}:null]} numberOfLines={1}>
                                {this.state.area?this.state.area:'全'+City.name}
                            </Text>
                            <Icon name="arrow-drop-down" size={18} color={this.state.showAreaModel?"#fa0064":"#999"} />
                        </View>
                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback
                        onPress={()=>this.setState({
                            showAreaModel: false,
                            showPriceModel: !this.state.showPriceModel,
                            showTypeModel: false,
                            showOtherModel: false,
                        })}
                    >
                        <View style={styles.filterTextBox}>
                            <View style={styles.filterTextBox}>
                                <Text style={[styles.filterText, this.state.showPriceModel?{color: '#fa0064'}:null]} numberOfLines={1}>
                                    {this.state.price?this.state.price:'租金'}
                                </Text>
                                <Icon name="arrow-drop-down" size={18} color={this.state.showPriceModel?"#fa0064":"#999"} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={()=>this.setState({
                            showAreaModel: false,
                            showPriceModel: false,
                            showTypeModel: !this.state.showTypeModel,
                            showOtherModel: false,
                        })}
                    >
                        <View style={styles.filterTextBox}>
                            <View style={styles.filterTextBox}>
                                <Text style={[styles.filterText, this.state.showTypeModel?{color: '#fa0064'}:null]} numberOfLines={1}>
                                    {this.state.type?this.state.type:'类型'}
                                </Text>
                                <Icon name="arrow-drop-down" size={18} color={this.state.showTypeModel?"#fa0064":"#999"} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={()=>this.setState({
                            showAreaModel: false,
                            showPriceModel: false,
                            showTypeModel: false,
                            showOtherModel: !this.state.showOtherModel,
                        })}
                    >
                        <View style={styles.filterTextBox}>
                            <View style={styles.filterTextBox}>
                                <Text style={[styles.filterText, this.state.showOtherModel?{color: '#fa0064'}:null]} numberOfLines={1}>
                                    {this.state.other?this.state.other:'筛选'}
                                </Text>
                                <Icon name="arrow-drop-down" size={18} color={this.state.showOtherModel?"#fa0064":"#999"} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </View>

                {/*区域筛选model*/}
                <AreaModel
                    showAreaModel={this.state.showAreaModel}
                    area={this.state.area}
                    chooseArea={(value)=>this.getHouseListByFilter('area', value)}
                    bgClickHideModel={()=>this.setState({showAreaModel: false})}
                />

                {/*价格筛选model*/}
                <PriceModel
                    showPriceModel={this.state.showPriceModel}
                    price={this.state.price}
                    data={['6000元/㎡ 以内','6000-10000元/㎡','10000-15000元/㎡','15000-30000元/㎡','30000元/㎡ 以上']}
                    choosePrice={(value)=>this.getHouseListByFilter('price', value)}
                    bgClickHideModel={()=>this.setState({showPriceModel: false})}
                />

                {/*类型筛选model*/}
                <TypeModel
                    showTypeModel={this.state.showTypeModel}
                    type={this.state.type}
                    data={['住宅','商铺','写字楼']}
                    chooseType={(value)=>this.getHouseListByFilter('type', value)}
                    bgClickHideModel={()=>this.setState({showTypeModel: false})}
                />

                {/*其他筛选条件model*/}
                <OtherModel
                    showOtherModel={this.state.showOtherModel}
                    other={this.state.other}
                    data={[
                        {
                            name: '身份',
                            keyName: 'agent',
                            data: ['不限', '个人',  '经纪人'],
                        },
                        {
                            name: '面积',
                            keyName: 'house_size',
                            data: ['不限', '< 50㎡',  '50-100㎡', '100-150㎡', '> 150㎡'],
                        },
                        {
                            name: '房型',
                            keyName: 'room_and_hall',
                            data: ['不限', '1室0厅0卫', '2室1厅1卫', '3室1厅1卫', '3室2厅1卫', '3室2厅2卫', '4室2厅2卫'],
                        },
                    ]}
                    bgClickHideModel={()=>this.setState({showOtherModel: false})}
                />


                {/*无限下拉*/}
                <FlatList
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
        houseList: state.houseList,
        filter: state.filter
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
