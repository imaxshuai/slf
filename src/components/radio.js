import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export class Radio extends Component{

    static propTypes = {
        data: PropTypes.array.isRequired,
        value: PropTypes.string,
        select: PropTypes.func.isRequired,
        style: PropTypes.object,
        optionStyle: PropTypes.object,
        activeOptionStyle: PropTypes.object,
    };

    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            value: props.value?props.value: props.data[0],
        }
    };

    componentDidMount(){
        this.props.select(this.props.data[0]);
    }

    chooseRadioOption = (option)=>{
        this.setState({
            value: option
        });
        this.props.select(option)
    };

    render(){
        return (
            <View style={styles.radioBox}>
                <View style={this.props.style?[styles.radio,this.props.style]:styles.radio}>

                    {
                        this.state.data.map((item)=> {
                            return (
                                <Text
                                    key= {item}
                                    style={(this.state.data)==item||(this.state.value)==item?
                                        (this.props.activeOptionStyle?[styles.activeOption,this.props.activeOptionStyle]:styles.activeOption)
                                        :
                                        (this.props.optionStyle?[styles.option,this.props.optionStyle]:styles.option)
                                    }
                                    onPress={this.chooseRadioOption.bind(this, item)}
                                >
                                    {item}
                                </Text>
                            )
                        })
                    }

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    //单选框
    radioBox: {
        alignItems: 'center',
    },
    radio: {
        flexDirection: 'row',
        borderRadius: 15,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 20,
    },
    option: {
        width: 80,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#eee',
        color: '#777',
        fontWeight: '900',
        textAlign: 'center',
    },
    activeOption: {
        width: 80,
        paddingTop: 7,
        paddingBottom: 7,
        color: '#fff',
        fontWeight: '900',
        backgroundColor: '#fa0064',
        textAlign: 'center',
    },
})
