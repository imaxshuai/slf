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
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as sortActions from '../redux/actions/sort';

let { width, height } = Dimensions.get("window");

class Filter extends Component{

    constructor(...props){
        super(...props);
        this.state = {
            cityModelHeight: new Animated.Value(0),
        };
    }

    componentDidMount(){
        console.log(this.props)
        this.showAreaModel();
    }

    componentWillReceiveProps(){
        console.log(this.props);
    }

    componentWillUpdate(){
        if(this.props.filter.showAreaModel){
            this.hideAreaModel();
        }else{
            this.showAreaModel();
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
        this.setState({area: data});
        this.showAreaModel();
    };

    render(){
        return (
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
                <TouchableWithoutFeedback onPress={this.hideAreaModel}>
                    <View style={{height: '35%'}} />
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
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
)(Filter);

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