import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import Picker from 'react-native-picker';
import PropTypes from 'prop-types';
const {width} = Dimensions.get('window');

export class UserTimeYear extends Component{

    static PropTypes = {
        userTimeYear: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            userTimeYear: null,
        }
    };

    //区域选择
    userTimeYearPicker = ()=>{
        let year = [];
        for(let i=2020;i>=1960;i--){
            year.push(i);
        }
        Picker.init({
            pickerData: year,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择使用年代',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.userTimeYear!=null?this.state.userTimeYear:['1980'],
            onPickerConfirm: data => {
                this.setState({
                    userTimeYear: data
                });
                this.props.userTimeYear(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <View style={styles.infoGroup}>
                <TouchableWithoutFeedback onPress={this.userTimeYearPicker}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>使用年代</Text>
                        <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="roomAndHall">
                            {this.state.userTimeYear!=null?<Text style={{color: '#333'}}>{this.state.userTimeYear}</Text>:'请选择'}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    infoGroup:{
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
    },
    info:{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    infoTitle: {
        padding: 10,
        color: '#444',
        fontSize: 12,
    },
    infoGroupInput: {
        marginBottom: 10,
        width: width*0.3,
        textAlign: 'center',
        fontSize: 16,
    },

});
