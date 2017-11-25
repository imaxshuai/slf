import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Platform,StyleSheet, FlatList,ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as userActions from '../../../redux/actions/user';
import {HeaderComponent} from "../../../components/header";

const {width, height} = Dimensions.get('window');

class ResumeDetail extends Component{

    static navigationOptions ={
        header: null,
    };

    constructor(...props){
        super(...props);
        this.state= {

        };
    }


    render(){
        return (
            <View style={styles.container}>

                {/*头部Navbar部分*/}
                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>详情</Text>}
                    headerRight={
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResumeRevise')}>
                            <Icon name="border-color" color="#FF812E" size={20} />
                        </TouchableOpacity>
                    }
                />

                <View style={styles.header}>
                    <Image style={styles.headerImg} source={require('../../../images/header-img.png')}/>
                    <Text style={styles.name}>徐向阳</Text>
                    <Text style={styles.sex}>(男)</Text>
                    <Icon name='phone-iphone' color='#fa0064' size={20} />
                </View>

                <ScrollView>
                    <View>
                        <View style={styles.top}>
                            <Text>基本信息</Text>
                        </View>

                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>姓名</Text>
                            <Text>徐向阳</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>性别</Text>
                            <Text>男</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>出生年月</Text>
                            <Text>1994年12月</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>联系方式</Text>
                            <Text>15366123031</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>意向职位</Text>
                            <Text>App开发工程师</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>期望薪资</Text>
                            <Text>4000-8000元/月</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>工作区域</Text>
                            <Text>南京市浦口区</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.top}>
                            <Text>工作经验</Text>
                        </View>

                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>工作年限</Text>
                            <Text>徐向阳</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>工作经历</Text>
                            <Text>为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容。</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.top}>
                            <Text>教育经历</Text>
                        </View>

                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>最高学历</Text>
                            <Text>本科</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemLeft}>教育经历</Text>
                            <Text style={styles.itemRight}>为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容。这是为了优化不得不作出的妥协，而我们也在设法持续改进。</Text>
                        </View>
                    </View>
                </ScrollView>

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
)(ResumeDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderColor: '#eee'
    },
    headerImg: {
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    name: {
       fontSize: 14,
       color: '#222',
        padding: 10,
    },
    sex: {
       fontSize: 12,
       color: '#777',
       paddingRight: 5,
    },

    top: {
        backgroundColor: '#eee',
        padding: 10,
        borderLeftWidth: 3,
        borderColor: '#fa0064',
    },
    item: {
        padding: 15,
        flexDirection: 'row',
    },
    itemLeft: {
        width: 100,
        color: '#666',
    },
    itemRight: {
        width: width-120,
    }

});