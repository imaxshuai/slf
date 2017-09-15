import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
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

    toLogin(){
        console.log(this.props);
    }

    render() {

        return (
            <View style={styles.container}>

                {/*设置用户中心头部显示头像、用户名、设置及登录跳转....*/}
                <View>
                    <Image
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
                        <TouchableOpacity onPress={this.toLogin.bind(this)}>
                            <Image
                                source={require("../../images/header-img.png")}
                                style={styles.headerImg}
                            />
                        </TouchableOpacity>
                    </Image>
                </View>

                {/*中间图标功能区域*/}

                <View style={styles.userNav}>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="file" size={50} color="#00aea1" />
                            <Text style={styles.navItemText}>我的发布</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="pencil-square" size={50} color="#fe4a6c" />
                            <Text style={styles.navItemText} >我的收藏</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="briefcase" size={50} color="#ffb300" />
                            <Text style={styles.navItemText}>我的招聘</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="tachometer" size={50} color="#fa0064" />
                            <Text style={styles.navItemText}>推广服务</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgUser: {
        width: width,
        height: 150
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
        width: 36,
        marginRight: (width-35)/2-90,
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
        paddingTop: 5,
        paddingRight: 10,
    },
    headerImg: {
        alignItems: 'center',
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 50,
        marginTop: 20,
        marginLeft: (width-100)/2,
    },
    userNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 90,
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center"
    },
    navItemText: {
        marginTop: 10,
    },
});