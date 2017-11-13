import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    StyleSheet,
    ScrollView,
    Animated,
    Dimensions,
} from 'react-native';
import {Radio} from "./radio";

let { width, height } = Dimensions.get("window");

export class AreaModel extends Component{

    constructor(...props){
        super(...props);
        this.state = {
            cityModelHeight: new Animated.Value(0),
        };
    }

    componentDidMount(){
        console.log(this.props.showAreaModel);
    }

    componentDidUpdate(){
        if(this.props.showAreaModel){
            this.showAreaModel();
        }else{
            this.hideAreaModel();
        }
    }

    //区域筛选条件
    showAreaModel = ()=>{
        Animated.spring(
            this.state.cityModelHeight,
            {
                toValue: height-111,
                friction: 20,// 摩擦力，默认为7.
                tension: 100,// 张力，默认40。
            }
        ).start();

    };

    hideAreaModel = ()=>{
        Animated.spring(
            this.state.cityModelHeight,
            {
                toValue: 0,
                friction: 30,// 摩擦力，默认为7.
                tension: 400,// 张力，默认40。
            }
        ).start();
    };

    chooseArea = (data)=>{
        this.props.chooseArea(data);
        this.hideAreaModel();
    };

    render(){

        return (
            <Animated.View
                style={[styles.model, {height: this.state.cityModelHeight}]}
            >
                <View style={styles.modelContent}>
                    <ScrollView>

                        <TouchableOpacity onPress={this.chooseArea.bind(this, ['area', null])}>
                            <View style={styles.area}>
                                <Text
                                    style={this.props.area?styles.areaText:styles.areaTextActive}>
                                    {'全'+City.name}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {City.area.map((area)=>(
                            <TouchableOpacity key={area} onPress={this.chooseArea.bind(this, ['area',area])}>
                                <View style={styles.area}>
                                    <Text
                                        style={area==this.props.area?styles.areaTextActive:styles.areaText}>
                                        {area}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <TouchableWithoutFeedback onPress={this.props.bgClickHideModel}>
                    <View style={{height: '35%'}} />
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }

}

export class PriceModel extends Component{

    constructor(...props){
        super(...props);
        this.state = {
            priceModelHeight: new Animated.Value(0),
        };
    }

    componentDidUpdate(){
        if(this.props.showPriceModel){
            this.showPriceModel();
        }else{
            this.hidePriceModel();
        }
    }

    //区域筛选条件
    showPriceModel = ()=>{
        Animated.spring(
            this.state.priceModelHeight,
            {
                toValue: height-111,
                friction: 20,// 摩擦力，默认为7.
                tension: 100,// 张力，默认40。
            }
        ).start();

    };

    hidePriceModel = ()=>{
        Animated.spring(
            this.state.priceModelHeight,
            {
                toValue: 0,
                friction: 30,// 摩擦力，默认为7.
                tension: 400,// 张力，默认40。
            }
        ).start();
    };

    choosePrice = (data)=>{
        console.log(data);
        this.props.choosePrice(data);
        this.hidePriceModel();
    };

    render(){
        return (
            <Animated.View
                style={[styles.model, {height: this.state.priceModelHeight}]}
            >
                <View style={styles.modelContent}>
                    <ScrollView>

                        <TouchableOpacity onPress={this.choosePrice.bind(this, ['price', null])}>
                            <View style={styles.price}>
                                <Text
                                    style={this.props.price?styles.priceText:styles.priceTextActive}>
                                    不限
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {this.props.data['data'].map((price, key)=>(
                            <TouchableOpacity
                                key={price}
                                onPress={this.choosePrice.bind(this, ['price', this.props.data['where'][key], price])}>
                                <View style={styles.price}>
                                    <Text
                                        style={price==this.props.price?styles.priceTextActive:styles.priceText}>
                                        {price}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <TouchableWithoutFeedback onPress={this.props.bgClickHideModel}>
                    <View style={{height: '35%'}} />
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }

}

export class TypeModel extends Component{

    constructor(...props){
        super(...props);
        this.state = {
            typeModelHeight: new Animated.Value(0),
        };
    }

    componentDidUpdate(){
        if(this.props.showTypeModel){
            this.showTypeModel();
        }else{
            this.hideTypeModel();
        }
    }

    //区域筛选条件
    showTypeModel = ()=>{
        Animated.spring(
            this.state.typeModelHeight,
            {
                toValue: height-111,
                friction: 20,// 摩擦力，默认为7.
                tension: 100,// 张力，默认40。
            }
        ).start();

    };

    hideTypeModel = ()=>{
        Animated.spring(
            this.state.typeModelHeight,
            {
                toValue: 0,
                friction: 30,// 摩擦力，默认为7.
                tension: 400,// 张力，默认40。
            }
        ).start();
    };

    chooseType = (data)=>{
        this.props.chooseType(data);
        this.hideTypeModel();
    };

    render(){
        return (
            <Animated.View
                style={[styles.model, {height: this.state.typeModelHeight}]}
            >
                <View style={styles.modelContent}>

                    {this.props.data['where']!=null?
                        (<ScrollView>

                            <TouchableOpacity onPress={this.chooseType.bind(this, [this.props.data['keyName'], null])}>
                                <View style={styles.type}>
                                    <Text
                                        style={this.props.type?styles.priceText:styles.priceTextActive}>
                                        不限
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {this.props.data['data'].map((type, key)=>(
                                <TouchableOpacity
                                    key={type}
                                    onPress={this.chooseType.bind(this, [this.props.data['keyName'], this.props.data['where'][key], type])}>
                                    <View style={styles.type}>
                                        <Text
                                            style={type==this.props.type?styles.typeTextActive:styles.typeText}>
                                            {type}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>):(
                            <ScrollView>

                                <TouchableOpacity onPress={this.chooseType.bind(this, [this.props.data['keyName'], null])}>
                                    <View style={styles.type}>
                                        <Text
                                            style={this.props.type?styles.typeText:styles.typeTextActive}>
                                            不限
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                {this.props.data['data'].map((type)=>(
                                    <TouchableOpacity key={type} onPress={this.chooseType.bind(this, [this.props.data['keyName'],type])}>
                                        <View style={styles.type}>
                                            <Text
                                                style={type==this.props.type?styles.typeTextActive:styles.typeText}>
                                                {type}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        )
                    }

                </View>
                <TouchableWithoutFeedback onPress={this.props.bgClickHideModel}>
                    <View style={{height: '35%'}} />
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }

}


const styles = StyleSheet.create({
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
        height: height*.65,
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

    type: {
        height: 50,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
    },
    typeTextActive: {
        fontSize: 15,
        color: '#fa0064',
    },
    typeText: {
        fontSize: 15,
        color: '#000',
    },

});