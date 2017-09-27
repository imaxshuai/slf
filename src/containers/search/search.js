import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Platform,
    TextInput
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const {width} = Dimensions.get('window');
export class Search extends Component{

    _goBack(){
        this.props.navigation.goBack();
    }

    render(){

        return (
            <View style={styles.container}>
                <View style={styles.searchArea}>
                    <View style={styles.searchInputBox}>
                        <Icon name="search" color="#ccc" size={22} />
                        <TextInput
                            placeholder='找房子、找工作、找服务'
                            autoFocus={true}
                            autoCapitalize= 'none'
                            style={styles.searchInput}
                        />
                    </View>

                    <Text
                        style={styles.searchAreaText}
                        onPress={this._goBack.bind(this)}
                    >取消</Text>
                </View>

                <View style={styles.hotSearchArea}>
                    <Text style={styles.hostSearchTitle}>热门搜索</Text>
                    <View style={styles.keyWordBox}>
                        <Text style={styles.keyWord}>销售</Text>
                        <Text style={styles.keyWord}>兼职</Text>
                        <Text style={styles.keyWord}>司机</Text>
                        <Text style={styles.keyWord}>会计</Text>
                        <Text style={styles.keyWord}>客服淘宝</Text>
                        <Text style={styles.keyWord}>外汇</Text>
                        <Text style={styles.keyWord}>室内设计</Text>
                        <Text style={styles.keyWord}>平面设计</Text>
                        <Text style={styles.keyWord}>美工</Text>
                        <Text style={styles.keyWord}>文员</Text>
                        <Text style={styles.keyWord}>人事</Text>
                    </View>

                </View>

            </View>
        )

    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    searchArea: {
        flexDirection: 'row',
        marginTop: Platform.OS=='ios'?30: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchInputBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingLeft: 10,
    },
    searchInput: {
        width: width*0.7,
        height: 35,
        borderRadius: 3,
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 10,
    },
    searchAreaText: {
        color: '#888'
    },


    /*热门搜索样式表*/
    hotSearchArea: {
        flex: 1,
        width: width*0.92,
        padding: 20,
        marginTop: 20,
        marginLeft: width*0.04,
        backgroundColor: '#eee',
    },
    hostSearchTitle: {
        color: '#888',
        paddingBottom: 10,
    },
    keyWordBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    keyWord: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        margin: 10,
    },

});
