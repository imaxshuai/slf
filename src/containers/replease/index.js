import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HeaderComponent} from "../../components/header";
import * as userActions from '../../redux/actions/user';
import * as sortActions from '../../redux/actions/sort';

let { width, height } = Dimensions.get("window");
class User extends Component{

    static navigationOptions =({navigation})=>({
        header: null,
        tabBarLabel: "发布",
        tabBarIcon: ({tintColor})=>((<Icon name="description" size={25} color={tintColor}/>)),
    });

    constructor(...props){
        super(...props);
    }

    componentDidMount(){
        this.props.sortActions.getSort();
    }


    //跳转二级分类页面，并传输数据
    toClassifyList(sort){
        this.props.navigation.navigate('ClassifyList',sort);
    }


    render(){

        
        
        return(
            <View style={styles.containerBox}>

                {/*头部Navbar区域*/}
                <HeaderComponent
                    headerTitle={<Text style={{fontSize: 18}}>信息发布</Text>}
                />

                {/*中心内容选择分类区域*/}
                <ScrollView>
                    <View style={styles.navClass}>
                        <TouchableOpacity onPress={this.toClassifyList.bind(this,this.props.sort.fczs)}>
                            <View style={styles.navItem}>
                                <Icon name="location-city" size={40} color="#39a0f4" />
                                <Text style={styles.navItemText}>房产租售</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toClassifyList.bind(this,this.props.sort.rczp)}>
                            <View style={styles.navItem}>
                                <Icon name="card-travel" size={40} color="#fe4a6c" />
                                <Text style={styles.navItemText} >人才招聘</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.syfw)}>
                            <View style={styles.navItem}>
                                <Icon name="business-center" size={40} color="#42ba7b" />
                                <Text style={styles.navItemText} >商业服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.tces)}>
                            <View style={styles.navItem}>
                                <Icon name="shop" size={40} color="#f6552c" />
                                <Text style={styles.navItemText}>同城二手</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.esc)}>
                            <View style={styles.navItem}>
                                <Icon name="directions-car" size={40} color="#0bbaac" />
                                <Text style={styles.navItemText}>二手车</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.shfw)}>
                            <View style={styles.navItem}>
                                <Icon name="card-giftcard" size={40} color="#ffb300" />
                                <Text style={styles.navItemText}>生活服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.jypx)}>
                            <View style={styles.navItem}>
                                <Icon name="school" size={40} color="#42ba7b" />
                                <Text style={styles.navItemText}>教育培训</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.cw)}>
                            <View style={styles.navItem}>
                                <Icon name="pets" size={40} color="#39a0f4" />
                                <Text style={styles.navItemText}>宠物</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.qcfw)}>
                            <View style={styles.navItem}>
                                <Icon name="local-car-wash" size={40} color="#fa0064" />
                                <Text style={styles.navItemText}>汽车服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.jwhs)}>
                            <View style={styles.navItem}>
                                <Icon name="loop" size={40} color="#ffb300" />
                                <Text style={styles.navItemText}>旧物回收</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.pk)}>
                            <View style={styles.navItem}>
                                <Icon name="picture-in-picture" size={40} color="#39a0f4" />
                                <Text style={styles.navItemText}>票卡</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={this.toClassifyList.bind(this,this.props.sort.lsjm)}>
                            <View style={styles.navItem}>
                                <Icon name="stars" size={40} color="#f6552c" />
                                <Text style={styles.navItemText}>连锁加盟</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav,
        sort: state.sort,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch),
        sortActions: bindActionCreators(sortActions, dispatch),
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
        flexWrap: 'wrap',
        padding: 30,
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center",
        width: (width-60)/3,
        marginTop: 20,

    },
    navItemText: {
        marginTop: 10,
    },
});
