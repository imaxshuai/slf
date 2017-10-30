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

export class HouseBaseInfoHouse extends Component{

    static PropTypes = {
        house: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            house: null,
        }
    };

    //厅室、楼层、朝向选择器
    housePicker = ()=>{
        Picker.init({
            pickerData: [
                ['1室','2室','3室','4室','5室','6室','7室','8室','9室'],
                ['0厅','1厅','2厅','3厅','4厅','5厅','6厅','7厅','8厅','9厅'],
                ['0卫','1卫','2卫','3卫','4卫','5卫','6卫','7卫','8卫','9卫']
            ],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择厅室',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.house!=null?this.state.house:['3室','1厅','1卫'],
            onPickerConfirm: data => {
                this.setState({
                    house: data
                })
                this.props.house(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.housePicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>厅室</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="roomAndHall">
                        {this.state.house!=null?<Text style={{color: '#333'}}>{this.state.house.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class HouseBaseInfoDirection extends Component{

    static PropTypes = {
        direction: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
    };


    directionPicker = ()=>{
        Picker.init({
            pickerData: ['东','南','西','北','南北','东西','东南','西南','东北','西北'],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择房屋朝向',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.direction!=null?this.state.direction:['西'],
            onPickerConfirm: data => {
                this.setState({
                    direction: data
                });
                this.props.direction(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.directionPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>朝向</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.direction!=null?<Text style={{color: '#333'}}>{this.state.direction.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class HouseBaseInfoFloors extends Component{

    static PropTypes = {
        floors: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
    };

    floorPicker = ()=>{
        let floors = [];
        for(let i=1;i<=99;i++){
            let data = [];
            let floor = {};
            for (let j=1;j<=99;j++){
                if(j>i){
                    data.push('共'+j+'层');
                }
            }
            floor[i+'层'] = data;
            floors.push(floor);
        }

        Picker.init({
            pickerData: floors,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择楼层',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.floors!=null?this.state.floors:['3层', '共6层'],
            onPickerConfirm: data => {
                this.setState({
                    floors: data
                })
                this.props.floors(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.floorPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>楼层</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="floors">
                        {this.state.floors!=null?<Text style={{color: '#333'}}>{this.state.floors.join('/')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class HouseBaseInfo extends Component{

    static PropTypes = {
        house: PropTypes.func.isRequired,
        direction: PropTypes.func.isRequired,
        floors: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            house_configure: [],
        }
    };

    //厅室、楼层、朝向选择器
    housePicker = ()=>{
        Picker.init({
            pickerData: [
                ['1室','2室','3室','4室','5室','6室','7室','8室','9室'],
                ['0厅','1厅','2厅','3厅','4厅','5厅','6厅','7厅','8厅','9厅'],
                ['0卫','1卫','2卫','3卫','4卫','5卫','6卫','7卫','8卫','9卫']
            ],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择厅室',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.house!=null?this.state.house:['3室','1厅','1卫'],
            onPickerConfirm: data => {
                this.setState({
                    house: data
                })
                this.props.house(data);
            },
        });
        Picker.show();
    };
    directionPicker = ()=>{
        Picker.init({
            pickerData: ['东','南','西','北','南北','东西','东南','西南','东北','西北'],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择房屋朝向',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.direction!=null?this.state.direction:['西'],
            onPickerConfirm: data => {
                this.setState({
                    direction: data
                });
                this.props.direction(data);
            },
        });
        Picker.show();
    };
    floorPicker = ()=>{
        let floors = [];
        for(let i=1;i<=99;i++){
            let data = [];
            let floor = {};
            for (let j=1;j<=99;j++){
                if(j>i){
                    data.push('共'+j+'层');
                }
            }
            floor[i+'层'] = data;
            floors.push(floor);
        }

        Picker.init({
            pickerData: floors,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择楼层',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.floors!=null?this.state.floors:['3层', '共6层'],
            onPickerConfirm: data => {
                this.setState({
                    floors: data
                })
                this.props.floors(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <View style={styles.infoGroup}>
                <TouchableWithoutFeedback onPress={this.housePicker}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>厅室</Text>
                        <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="roomAndHall">
                            {this.state.house!=null?<Text style={{color: '#333'}}>{this.state.house.join('')}</Text>:'请选择'}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.directionPicker}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>朝向</Text>
                        <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                            {this.state.direction!=null?<Text style={{color: '#333'}}>{this.state.direction.join('')}</Text>:'请选择'}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.floorPicker}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>楼层</Text>
                        <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="floors">
                            {this.state.floors!=null?<Text style={{color: '#333'}}>{this.state.floors.join('/')}</Text>:'请选择'}
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
