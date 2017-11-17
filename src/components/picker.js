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
        this.state = {
            direction: null,
        }
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
        this.state = {
            floors: null,
        }
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

export class EsPhoneBrand extends Component{

    static PropTypes = {
        brand: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            brand: null
        }
    };


    brandPicker = ()=>{
        Picker.init({
            pickerData: this.props.data,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择品牌',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.brand!=null?this.state.brand:['小米'],
            onPickerConfirm: data => {
                this.setState({
                    brand: data
                });
                this.props.brand(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.brandPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>品牌</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.brand!=null?<Text style={{color: '#333'}}>{this.state.brand.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class NewAndOld extends Component{

    static PropTypes = {
        new_and_old: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            new_and_old: null
        }
    };


    new_and_oldPicker = ()=>{
        Picker.init({
            pickerData: ["全新", "9成新", "8成新", "7成新", "6成新", "5成新", "5成以下"],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择手机成色',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.new_and_old!=null?this.state.new_and_old:['8成新'],
            onPickerConfirm: data => {
                this.setState({
                    new_and_old: data
                });
                this.props.new_and_old(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.new_and_oldPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>成色</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.new_and_old!=null?<Text style={{color: '#333'}}>{this.state.new_and_old.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class EsPhoneType extends Component{

    static PropTypes = {
        brand: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            brand: null
        }
    };


    brandPicker = ()=>{
        Picker.init({
            pickerData: this.props.data,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择类型',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.brand!=null?this.state.brand:['充电器'],
            onPickerConfirm: data => {
                this.setState({
                    brand: data
                });
                this.props.brand(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.brandPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>类型</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.brand!=null?<Text style={{color: '#333'}}>{this.state.brand.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class PetType extends Component{

    static PropTypes = {
        brand: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            brand: null
        }
    };


    brandPicker = ()=>{
        Picker.init({
            pickerData: this.props.data,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择品种',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.brand!=null?this.state.brand:['充电器'],
            onPickerConfirm: data => {
                this.setState({
                    brand: data
                });
                this.props.brand(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.brandPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>品种</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.brand!=null?<Text style={{color: '#333'}}>{this.state.brand.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class CarColor extends Component{

    static PropTypes = {
        color: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            color: null
        }
    };


    colorPicker = ()=>{
        Picker.init({
            pickerData: ["黑", "白", "银", "灰", "香槟金", "红", "黄", "蓝", "绿", "紫", "其他"],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择颜色',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.color!=null?this.state.color:['白'],
            onPickerConfirm: data => {
                this.setState({
                    color: data
                });
                this.props.color(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.colorPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>颜色</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.color!=null?<Text style={{color: '#333'}}>{this.state.color.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class CardYear extends Component{

    static PropTypes = {
        card_year: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            card_year: null
        }
    };


    card_yearPicker = ()=>{

        let data = [];
        for(let i=2020;i>=1960;i--){
            data.push(i);
        }

        Picker.init({
            pickerData: data,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择上牌年份',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.card_year!=null?this.state.card_year:['2000'],
            onPickerConfirm: data => {
                this.setState({
                    card_year: data
                });
                this.props.card_year(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.card_yearPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>上牌年份</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.card_year!=null?<Text style={{color: '#333'}}>{this.state.card_year.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class Jiaoqiangxian extends Component{

    static PropTypes = {
        jiaoqiangxian: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            jiaoqiangxian: null,
        }
    };

    //厅室、楼层、朝向选择器
    jiaoqiangxianPicker = ()=>{
        Picker.init({
            pickerData: [
                {'2017年': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']},
                {'2018年': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']},
                {'过期': ['过期']},
            ],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择交强险到期',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.jiaoqiangxian!=null?this.state.jiaoqiangxian:['2017', 1],
            onPickerConfirm: data => {
                this.setState({
                    jiaoqiangxian: data
                })
                this.props.jiaoqiangxian(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.jiaoqiangxianPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>交强险到期</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="roomAndHall">
                        {this.state.jiaoqiangxian!=null?<Text style={{color: '#333'}}>{this.state.jiaoqiangxian.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class Shangyexian extends Component{

    static PropTypes = {
        shangyexian: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            shangyexian: null,
        }
    };

    //厅室、楼层、朝向选择器
    shangyexianPicker = ()=>{
        Picker.init({
            pickerData: [
                {'2017年': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']},
                {'2018年': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']},
                {'过期': ['过期']},
            ],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择商业险到期时间',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.shangyexian!=null?this.state.shangyexian:['2018', 1],
            onPickerConfirm: data => {
                this.setState({
                    shangyexian: data
                })
                this.props.shangyexian(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.shangyexianPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>商业险到期</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="roomAndHall">
                        {this.state.shangyexian!=null?<Text style={{color: '#333'}}>{this.state.shangyexian.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class JobType extends Component{

    static PropTypes = {
        brand: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            brand: null
        }
    };


    brandPicker = ()=>{
        Picker.init({
            pickerData: this.props.data,
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择品种',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.brand!=null?this.state.brand:['充电器'],
            onPickerConfirm: data => {
                this.setState({
                    brand: data
                });
                this.props.brand(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.brandPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>职位</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.brand!=null?<Text style={{color: '#333'}}>{this.state.brand.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}


export class Education extends Component{

    static PropTypes = {
        education: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            education: null
        }
    };


    colorPicker = ()=>{
        Picker.init({
            pickerData: ["不限","初中及以下","高中","中专/技校","大专","本科","博士","硕士"],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择学历',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.education!=null?this.state.education:['白'],
            onPickerConfirm: data => {
                this.setState({
                    education: data
                });
                this.props.education(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.colorPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>学历</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.education!=null?<Text style={{color: '#333'}}>{this.state.education.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class Salary extends Component{

    static PropTypes = {
        salary: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            salary: null
        }
    };


    colorPicker = ()=>{
        Picker.init({
            pickerData: ["面议","2000元以下","2000-4000元","4000-6000元","6000-10000元","10000-15000元","15000元以上"],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择薪资',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.salary!=null?this.state.salary:['白'],
            onPickerConfirm: data => {
                this.setState({
                    salary: data
                });
                this.props.salary(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.colorPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>薪资</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.salary!=null?<Text style={{color: '#333'}}>{this.state.salary.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export class Experience extends Component{

    static PropTypes = {
        experience: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            experience: null
        }
    };


    colorPicker = ()=>{
        Picker.init({
            pickerData: ["不限","无经验","1年以下","1年-2年","2年-3年","3年-5年","5年以上"],
            pickerToolBarBg: [240,240,240,1],
            pickerBg: [200,200,200,1],
            pickerTitleColor: [150,150,150,1],
            pickerConfirmBtnColor: [255,0,100,1],
            pickerCancelBtnColor: [255,0,100,1],
            pickerTitleText: '请选择工作经验',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            selectedValue: this.state.experience!=null?this.state.experience:['白'],
            onPickerConfirm: data => {
                this.setState({
                    experience: data
                });
                this.props.experience(data);
            },
        });
        Picker.show();
    };

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.colorPicker}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>工作经验</Text>
                    <Text style={[styles.infoGroupInput, {color: '#ccc'}]} ref="houseOrientation">
                        {this.state.experience!=null?<Text style={{color: '#333'}}>{this.state.experience.join('')}</Text>:'请选择'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
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
