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

import * as userActions from '../../redux/actions/user';


let { width, height } = Dimensions.get("window");
class User extends Component{

    static navigationOptions = {
        tabBarLabel: "我的",
        tabBarIcon: ({tintColor})=>((<Icon name="user-secret" size={25} color={tintColor}/>))
    };

    constructor(...props){
        super(...props);
    }

    toLogin(){
        this.props.navigation.navigate("Login",{'user': 'xushuai'});
    }

    render(){

        console.log(this.props);

        return(
            <View style={styles.container}>

                {/*设置用户中心头部显示头像、用户名、设置及登录跳转....*/}
                <ImageBackground
                    source={require("../../images/bg-user.jpg")}
                    style={styles.bgUser}
                >
                    {/*设置按钮*/}
                    <Text onPress={this.toLogin.bind(this)} style={ styles.settingsText }><Icon name="cog" size={16} style={styles.settingsIcon} /> 设置</Text>

                    {/*用户头像*/}
                    <TouchableOpacity onPress={this.toLogin.bind(this)} style={styles.headerImgBox}>
                        <Image
                            source={require("../../images/header-img-login.png")}
                            style={styles.headerImg}
                        />
                    </TouchableOpacity>
                </ImageBackground>


                {/*中间图标功能区域*/}

                <View style={styles.userNav}>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="file" size={40} color="#00aea1" />
                            <Text style={styles.navItemText}>我的发布</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="pencil-square" size={40} color="#fe4a6c" />
                            <Text style={styles.navItemText} >我的收藏</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="briefcase" size={40} color="#ffb300" />
                            <Text style={styles.navItemText}>我的招聘</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="tachometer" size={40} color="#fa0064" />
                            <Text style={styles.navItemText}>推广服务</Text>
                        </View>
                    </TouchableOpacity>
                </View>


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
)(User);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bgUser: {
        width: width,
        height: 130,
        position: 'relative',
    },
    settingsText: {
        fontSize: 16,
        padding: 20,
        width: 100,
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute',
        right: 0
    },
    settingsIcon: {
        paddingRight: 10,
    },
    headerImgBox: {
        marginTop: 90,
        marginLeft: (width-80)/2,
        marginRight: (width-80)/2,
    },
    headerImg: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 40,
    },
    userNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 100,
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center"
    },
    navItemText: {
        marginTop: 10,
    },
});