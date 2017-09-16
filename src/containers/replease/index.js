import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { RepleaseComponent } from '../../components/replease/replease'

class Replease extends Component{

    static navigationOptions = {
        tabBarLabel: "发布",
        tabBarIcon: ({tintColor})=>((<Icon name="pencil-square" size={25} color={tintColor}/>))
    }

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }



    render(){

        return(
            <RepleaseComponent navigation={this.props.navigation} />
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
)(Replease);