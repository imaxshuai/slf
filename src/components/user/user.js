import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let { width, height } = Dimensions.get("window");

export class UserComponent extends Component {

    static navigationOptions = {
        tabBarLabel: "个人中心",
        tabBarIcon: ({tintColor})=>((<Icon name="user-secret" size={25} color={tintColor}/>))
    };

    constructor(...props){
        super(...props);
        console.log(this.sttate);
    }

    toLogin(){
        console.log(this.props);
        // console.log(navigation);
        // console.log(navigation);
    }

    render() {

        return (
            <View style={styles.containerBox}>

                {/*设置用户中心头部显示头像、用户名、设置及登录跳转....*/}
                <View>
                    <ImageBackground
                        source={require("../../images/bg-user.jpg")}
                        style={styles.bgUser}
                    >
                        <View style={styles.userText}>
                            <Text style={styles.username}>许帅</Text>
                            <View style={styles.settingsContainer}>
                                <Icon name="cog" size={16} style={styles.settingsIcon} />
                                <Text style={ styles.settingsText }>设置</Text>
                            </View>
                        </View>
                    </ImageBackground>

                    {/*用户头像*/}

                    <TouchableOpacity onPress={this.toLogin.bind(this)}>
                        <Image
                            source={require("../../images/header-img.png")}
                            style={styles.headerImg}
                        />
                    </TouchableOpacity>

                </View>

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
        );
    }
}

const styles = StyleSheet.create({
    containerBox: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    bgUser: {
        width: width,
        height: 130,
    },
    userText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 50,
        marginRight: 20,
        height: 30,
    },
    username: {
        fontSize: 18,
        marginRight: width/2-90,
    },
    settingsText: {
        fontSize: 18,
        width: 50,
    },
    settingsContainer: {
        width: 70,
        flexDirection: "row",
    },
    settingsIcon: {
        paddingRight: 10,
    },
    headerImg: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 40,
        position: 'relative',
        top: -40,
        left: (width-80)/2
    },
    userNav: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center"
    },
    navItemText: {
        marginTop: 10,
    },
});