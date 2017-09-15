import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component{

    static navigationOptions = {
        tabBarLabel: "主页",
        tabBarIcon: ({tintColor})=>((<Icon name="home" size={25} color={tintColor}/>))
    }

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }



    render(){

        return(
            <View>
                <Text>HOME主页</Text>
            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {

    }
};

const mapDispatchToProps = (dispatch)=>{
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);