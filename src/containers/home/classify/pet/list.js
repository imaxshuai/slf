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
import Spinner from 'react-native-spinkit';

import * as sortActions from '../../../../redux/actions/sort';
import * as petActions from '../../../../redux/actions/pet';
import * as filterActions from '../../../../redux/actions/filter';
import ListItemPetComponent from '../../../../components/LisItemHouse'
import { AreaModel, TypeModel } from '../../../../components/model'
import OtherModel from '../../../../components/filter'

let { width, height } = Dimensions.get("window");

class PetList extends Component{


    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            isEnd: false,
            showLoad: false,
            cityModelHeight: new Animated.Value(0),
            priceModelHeight: new Animated.Value(0),
            showAreaModel: false,
            showPriceModel: false,
            showTypeModel: false,
            showOtherModel: false,
            area: null,
            price: null,
            pet_type: null,
            pet_size: null,
            other: null,
            lease_type: null,
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

        this.props.petActions.getPetList(filters, {data: []});
    }

    componentWillUnmount(){
        this.props.petActions.getPetList('no', {data: []});

    }

    getPetListByFilter = (data)=>{

        //传值类型 ['keyName', [?where], 'value']

        let info = data[1];
        if(typeof (info)=='object'){
            info = data[2];
        }

        this.setState({
            [data[0]]: info,
            showAreaModel: false,
            showPriceModel: false,
            showTypeModel: false,
            showOtherModel: false,
        });

        let filters = this.props.filter;

        if(typeof(data[1])=='string'){
            filters[data[0]] = info;
        }else{
            if(data[1]==null){
                filters[data[0]]=null;
                if(data[0]=='price'){
                    filters.max_price = null;
                    filters.min_price = null;
                }else if(data[0]=='pet_size'){
                    filters.max_pet_size = null;
                    filters.min_pet_size = null;
                }
            }else{
                for(let key in data[1]){
                    filters[key]=data[1][key]
                }
            }
        }


        for(let filter in filters){
            if(filters[filter] == null || filters[filter]=='不限'){
                delete filters[filter]
            }
        }

        this.setState({showLoad: true});
        setTimeout(()=>this.setState({showLoad: false}),1500);
        this.props.petActions.getPetList(filters, {data: []});


    };

    //获取下拉加载更多数据
    _getMorePet = ()=>{
        if(this.props.petList.data.length>=10&&!this.props.petList.isEnd){
            this.props.petActions.getPetList(this.props.filter, this.props.petList);
        }
    };

    _footer =()=>{
        return (
            <View>
                {this.props.petList.isEnd
                    ?
                    (<Text style={{fontSize: 16, color: '#aaa', textAlign: 'center', padding:12,}}>已经没有更多信息了</Text>)
                    :
                    (<Spinner
                            size={50}
                            type='ThreeBounce'
                            color='#fa0064'
                            style={{marginLeft:width/2-25, marginTop: 20, marginBottom:20,}}
                        />
                    )
                }

            </View>
        )
    };


    render() {

        let { params } = this.props.navigation.state;

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
                                    {this.state[params.filter[0].keyName]?this.state[params.filter[0].keyName]:params.filter[0].name}
                                </Text>
                                <Icon name="arrow-drop-down" size={18} color={this.state.showPriceModel?"#fa0064":"#999"} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    {
                        params.filter[1]!=null?
                            (<TouchableWithoutFeedback
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
                                            {this.state[params.filter[1].keyName]?this.state[params.filter[1].keyName]:params.filter[1].name}
                                        </Text>
                                        <Icon name="arrow-drop-down" size={18} color={this.state.showTypeModel?"#fa0064":"#999"} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>): null
                    }

                    {
                        params.filter[2]!=null?
                            (<TouchableWithoutFeedback
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
                                            {
                                                params.filter[2].length>1
                                                ?
                                                this.state.other?this.state.other:'筛选'
                                                :
                                                    params.filter[2][0].name
                                            }
                                        </Text>
                                        <Icon name="arrow-drop-down" size={18} color={this.state.showOtherModel?"#fa0064":"#999"} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>): null
                    }



                </View>

                {this.state.showLoad?(
                    <View style={styles.coverLoad}>
                        <View style={styles.spinner}>
                            <Spinner
                                size={80}
                                type='ThreeBounce'
                                color='#ccc'
                                style={styles.spinner}
                            />
                        </View>
                    </View>
                ):null}

                {/*区域筛选model*/}
                <AreaModel
                    showAreaModel={this.state.showAreaModel}
                    area={this.state.area}
                    chooseArea={(area)=>this.getPetListByFilter(area)}
                    bgClickHideModel={()=>this.setState({showAreaModel: false})}
                />

                {/*价格筛选model*/}
                <TypeModel
                    showTypeModel={this.state.showPriceModel}
                    type={this.state[params.filter[0].keyName]}
                    data={params.filter[0]}
                    chooseType={(price)=>this.getPetListByFilter(price)}
                    bgClickHideModel={()=>this.setState({showPriceModel: false})}
                />

                {/*类型筛选model*/}
                {params.filter[1]!=null?
                    (
                        <TypeModel
                            showTypeModel={this.state.showTypeModel}
                            type={this.state[params.filter[1].keyName]}
                            data={params.filter[1]}
                            chooseType={(pet_type)=>this.getPetListByFilter(pet_type)}
                            bgClickHideModel={()=>this.setState({showTypeModel: false})}
                        />
                    ): null}

                {/*其他筛选条件model*/}
                {params.filter[2]!=null?(
                        params.filter[2].length>1?(
                            <OtherModel
                                showOtherModel={this.state.showOtherModel}
                                other={this.state.other}
                                data={params.filter[2]}
                                chooseFilter={(data)=>this.getPetListByFilter(data)}
                                bgClickHideModel={()=>this.setState({showOtherModel: false})}
                            />
                        ):(
                            <TypeModel
                                showTypeModel={this.state.showOtherModel}
                                type={this.state[params.filter[2][0].keyName]}
                                data={params.filter[2][0]}
                                chooseType={(other)=>this.getPetListByFilter(other)}
                                bgClickHideModel={()=>this.setState({showTypeModel: false})}
                            />
                        )
                    ): null}
                <Spinner
                    style={{position:'absolute', top: (height-50)/2,left: (width-50)/2}}
                    isVisible={(this.props.petList.data.length<=0)&&(this.props.petList.isEnd==false)}
                    size={50}
                    type='9CubeGrid'
                    color='red'
                />

                {/*无限下拉*/}
                <FlatList
                    ListFooterComponent={this._footer}
                    renderItem={({item})=>(
                        <ListItemPetComponent
                            routerName='PetDetail'
                            info={item}
                            navigation={this.props.navigation}
                            tags={params.tags}
                            unit={params.unit}
                        />
                    )}
                    // ListEmptyComponent={this.createEmptyView()}
                    data={this.props.petList['data']}
                    keyExtractor={(item)=>item.id}
                    initialNumToRender={5}
                    onEndReachedThreshold={0.3}
                    onEndReached={this._getMorePet.bind(this)}
                    getItemLayout={(data, index) => ( {length: 130, offset: 130 * index, index} )}
                />
            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        nav: state.nav,
        petList: state.petList,
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        sortActions: bindActionCreators(sortActions, dispatch),
        petActions: bindActionCreators(petActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PetList);

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
    //提交加载动画效果
    coverLoad: {
        width: width,
        height: Platform.OS=='ios'?height-111:height-131,
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 999,
    },
    spinner: {
        alignItems: 'center',
        paddingBottom: '50%',
    },
    loadText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#fa0064',
        fontSize: 18,
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
