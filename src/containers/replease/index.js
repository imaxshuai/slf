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
class User extends Component{

    static navigationOptions = {
        tabBarLabel: "发布",
        tabBarIcon: ({tintColor})=>((<Icon name="pencil-square" size={25} color={tintColor}/>))
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

    toClassifyList(){
        this.props.navigation.navigate('ClassifyList');

    }


    render(){

        console.log(this.props);
        return(
            <View style={styles.containerBox}>

                {/*头部Navbar区域*/}
                <NavbarTitleComponent
                    router={this.props}
                    titleItem = {() => this.renderTitleItem()}
                    rightItem = {() => this.renderRightItem()}
                />

                {/*中心内容选择分类区域*/}
                <View style={styles.navClass}>
                    <TouchableOpacity onPress={this.toClassifyList.bind(this)}>
                        <View style={styles.navItem}>
                            <Icon name="bank" size={40} color="#39a0f4" />
                            <Text style={styles.navItemText}>房屋出租</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="briefcase" size={40} color="#fe4a6c" />
                            <Text style={styles.navItemText} >人才招聘</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="suitcase" size={40} color="#42ba7b" />
                            <Text style={styles.navItemText} >商业服务</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="shopping-bag" size={40} color="#f6552c" />
                            <Text style={styles.navItemText}>同城二手</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="car" size={40} color="#0bbaac" />
                            <Text style={styles.navItemText}>二手车</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="gift" size={40} color="#ffb300" />
                            <Text style={styles.navItemText}>生活服务</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="mortar-board" size={40} color="#42ba7b" />
                            <Text style={styles.navItemText}>教育培训</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="tachometer" size={40} color="#39a0f4" />
                            <Text style={styles.navItemText}>宠物</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.navItem}>
                            <Icon name="cab" size={40} color="#fa0064" />
                            <Text style={styles.navItemText}>汽车服务</Text>
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
    containerBox: {
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