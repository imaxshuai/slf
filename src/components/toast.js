import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Platform,
    Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class Toast extends Component {

    static PropTypes = {
        style: PropTypes.object,
        imageStyle: PropTypes.object,
        messageStyle: PropTypes.object,
        image: PropTypes.node,
        message: PropTypes.string.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            slideHeight: new Animated.Value(0),
            message: props.message,
        }
    };

    componentDidMount(){
        console.log(this.props);
        console.log(this.state);
    }

    show = ()=>{
        Animated.spring(
            this.state.slideHeight,
            {
                toValue: 60,
                friction: 10,// 摩擦力，默认为7.
                tension: 40,// 张力，默认40。
            }
        ).start();

        setTimeout(()=>{
            Animated.timing(
                this.state.slideHeight,
                {
                    toValue: 0,
                    friction: 30,// 摩擦力，默认为7.
                }
            ).start();
        }, 5000)
    };

    render(){

        console.log(this.props);

        if(this.props.show){
            this.show();
        }

        return(
            <Animated.View
                style={[styles.toast, {height: this.state.slideHeight}, this.props.style]}
            >
                <Text style={[styles.toastImg, this.props.imageStyle]}>
                    {this.props.image?this.props.image:<Icon name='info' color='#3176cd' size={20} />}
                </Text>
                <Text style={[styles.toastMessage, this.props.messageStyle]}>{this.props.message}</Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    toast:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#5d8',
        width: '100%',
        overflow: 'hidden',
        paddingRight: 50,
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    toastImg:{
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: Platform.OS=='ios'?20:0,
    },
    toastMessage:{
        paddingTop: Platform.OS=='ios'?20:0,
    },
});