import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('window');

export class Checkbox extends Component{

    static propTypes = {
        data: PropTypes.array.isRequired,
        value: PropTypes.array,
        select: PropTypes.func.isRequired,
        style: PropTypes.object,
        optionStyle: PropTypes.object,
        activeOptionStyle: PropTypes.object,
    };

    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            house_configure: props.value?props.value: null,
        }
    };

    componentDidMount(){
        this.props.select(this.props.value);
    }


    //房屋配置选择
    doCheck = (data)=>{
        let checked = false;
        let house_configure = this.state.house_configure
        let configInfo = this.refs[data].props.children;
        house_configure.map((item, index)=>{
            if(item === configInfo){
                checked = true;
                house_configure.splice(index, 1);
            }
        });
        if(!checked){
            house_configure.push(configInfo)
        }
        this.setState({
            house_configure: house_configure
        });
        this.props.select(house_configure);

    };

    render(){
        return (
            <View style={styles.checkbox}>
                {
                    this.props.data.map((item, index)=>{
                        return (
                            <TouchableWithoutFeedback
                                onPress={this.doCheck.bind(this, index)}
                                key={index}
                            >
                                <View>
                                    <Text
                                        ref={index}
                                        style={
                                            this.state.house_configure.indexOf(item)>=0
                                                ?
                                                (this.props.activeOptionStyle?this.props.activeOptionStyle:styles.activeOption)
                                                :
                                                (this.props.optionStyle?this.props.optionStyle:styles.option)}
                                    >{item}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }

            </View>
        )
    }

}

const styles = StyleSheet.create({

    //复选框
    checkbox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width*0.8,
        marginBottom: 10,
    },
    option: {
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#444',
        backgroundColor: '#cfcfcf',
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        fontSize: 12,
    },
    activeOption: {
        fontSize: 12,
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#fff',
        backgroundColor: '#fa0064',
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
    }
})
