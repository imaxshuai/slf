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

export class AreaChoose extends Component{

    static PropTypes = {
        area: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            area: null,
        }
    };

    //区域选择
    areaPicker = ()=>{
        Picker.init({
            pickerData: City.area,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择区域',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            onPickerConfirm: data => {
                this.setState({
                    area: data
                });
                this.props.area(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <View style={styles.infoGroup}>
                <TouchableWithoutFeedback onPress={this.areaPicker}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>区域</Text>
                        <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="roomAndHall">
                            {this.state.area!=null?<Text style={{color: '#333'}}>{this.state.area}</Text>:'请选择'}
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
