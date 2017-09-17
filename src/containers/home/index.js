import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavbarTitleComponent } from '../../components/NavbarTitle';
import * as userActions from '../../redux/actions/user';


let { width, height } = Dimensions.get("window");
class Home extends Component{

    static navigationOptions = {
        tabBarLabel: "主页",
        tabBarIcon: ({tintColor})=>((<Icon name="home" size={25} color={tintColor}/>))
    }

    constructor(...props){
        super(...props);
    }

    renderTitleItem(){
        return(
            <Text style={{fontWeight: 'bold'}}>选择发布分类</Text>
        );
    }

    toLogin(){
        this.props.navigation.navigate('Login');
    }

    renderRightItem(){
        return(
            <TouchableOpacity onPress={this.toLogin.bind(this)}>
                <Text>我的发布</Text>
            </TouchableOpacity>
        );
    }


    render(){

        console.log(this.props);
        return(
            <View style={styles.container}>

                {/*中心内容选择分类区域*/}


            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navClass: {
        flexDirection: "row",
        marginTop: 20,
        flexWrap: 'wrap',
        padding: 30,
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center",
        width: (width-60)/3,
        marginTop: 50,

    },
    navItemText: {
        marginTop: 10,
    },
});