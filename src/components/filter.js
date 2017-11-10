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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as sortActions from '../redux/actions/sort';
import {Radio} from "./radio";

let { width, height } = Dimensions.get("window");

class OtherModel extends Component{

    constructor(...props){
        super(...props);
        this.state = {
            otherModelWidth: new Animated.Value(0),
            house_size: null,
            shops_type: null,
            pay_type: null,
            house_type: null,
            agent: null,
            price: null,
            sort_name: null,
            area: null,
            house_orientation: null,
            room_and_hall: null,
            floors: null,
            city: null,
        };
    }

    componentDidUpdate(){
        if(this.props.showOtherModel){
            this.showOtherModel();
        }else{
            this.hideOtherModel();
        }
    }

    //其他筛选条件
    showOtherModel = ()=>{
        Animated.spring(
            this.state.otherModelWidth,
            {
                toValue: width,
                friction: 20,// 摩擦力，默认为7.
                tension: 100,// 张力，默认40。
            }
        ).start();

    };

    hideOtherModel = ()=>{
        Animated.spring(
            this.state.otherModelWidth,
            {
                toValue: 0,
                friction: 30,// 摩擦力，默认为7.
                tension: 400,// 张力，默认40。
            }
        ).start();
    };

    submitFilter = ()=>{
        let filters = this.props.filter;
        for(item in this.state){
            if(typeof(this.state[item])=='string'){
                filters[item] = this.state[item];
            }
        }
        this.props.sortActions.changeFilter(filters);
        this.props.bgClickHideModel();
    };

    render(){

        return (
            <Animated.View
                style={[styles.otherModel, {width: this.state.otherModelWidth}]}
            >
                <TouchableWithoutFeedback onPress={this.props.bgClickHideModel}>
                    <View style={{width: width*.15}} />
                </TouchableWithoutFeedback>
                <View style={styles.otherModelContent}>
                    <ScrollView>
                        {this.props.data.map((item)=>{
                            return (
                                <View style={styles.itemBox} key={item.name}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <View>
                                        <Radio
                                            data={item.data}
                                            select={(data)=>this.setState({
                                                [item.keyName]: data,
                                            })}
                                            style={{
                                                flexWrap: 'wrap',
                                                flexDirection: 'row',
                                                borderRadius: 0,
                                            }}
                                            optionStyle={{
                                                width: (0.85*width-40)/3,
                                                margin: 5,
                                                fontSize: 13,
                                            }}
                                            activeOptionStyle={{
                                                width: (0.85*width-40)/3,
                                                margin: 5,
                                                fontSize: 13,
                                            }}
                                        />
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.submitFilter} >
                        <Text style={styles.submitBtnText}>确定</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        filter: state.filter,
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
)(OtherModel)


const styles = StyleSheet.create({
    otherModel: {
        width: width,
        flexDirection: 'row',
        backgroundColor: 'rgba(1,1,1,0.5)',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 99,
    },
    otherModelContent: {
        width: width*.85,
        height: height,
        backgroundColor: '#fff',
        paddingTop: 40,
    },

    other: {
        height: 50,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
    },
    otherTextActive: {
        fontSize: 15,
        color: '#fa0064',
    },
    otherText: {
        fontSize: 15,
        color: '#000',
    },
    itemBox: {
        width: '100%',
        padding: 5,
    },
    title: {
        margin: 5,
    },
    submitBtn: {
        height: 40,
        backgroundColor: '#fa0064',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 18,
    }

});