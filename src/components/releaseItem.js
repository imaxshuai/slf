import React,{ Component } from 'react';

import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    Button,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export class RepleaseItemComponent extends Component{

    toEdit = ()=>{
        alert(66);
    };

    toDetail = (info)=>{
        this.props.navigation.navigate('HouseDetail', info);
    };

    render(){

        let info = this.props.info;
        return (
            <TouchableOpacity onPress={this.toDetail.bind(this, info)}>
                <View style={styles.container}>
                    <View style={styles.itemBox}>
                        <Image source={{uri: info.images[0]}} style={styles.itemImage} />
                        <View style={styles.info}>
                            <Text style={styles.title}>{info.title}</Text>
                            <View style={styles.infoText}>
                                <Text style={styles.repleaseTime}>{info.create_time}小时前</Text>
                                <View style={{backgroundColor: '#ccc', height: 16, width: 1, marginLeft: 10,marginRight: 10}}></View>
                                <Text style={styles.seeCount}>浏览：{info.sort_id}人</Text>
                            </View>
                            <Text style={styles.price}>{info.price} 元</Text>
                        </View>
                    </View>
                    <View style={styles.operate}>
                        <Text style={styles.operateButton}  color="#fa0064" onPress={this.toEdit} >刷新</Text>
                        <Text style={styles.operateButton} color="#fa0064" onPress={this.toEdit} >删除</Text>
                        <Text style={styles.operateButton} color="#fa0064" onPress={this.toEdit} >编辑</Text>
                        <Text style={styles.operateButton} color="#fa0064" onPress={this.toEdit} >推广</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 3,
    },
    itemBox: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: width,
        height: 120,
        padding: 10,
    },
    itemImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    info: {
        justifyContent: 'space-between',
    },
    infoText: {
        flexDirection: 'row',
        height: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        width: width-130,
    },
    price: {
        color: '#fa0064',
        fontSize: 16,
        lineHeight: 20,
    },
    repleaseTime: {
        color: '#aaa',
        fontSize:12,
    },
    seeCount: {
        color: '#aaa',
        fontSize:12,
    },
    operate: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopWidth: 1,
        borderColor: '#eee',
        height: 40,
        paddingRight: 30,
    },
    operateButton: {
        fontSize: 14,
        lineHeight: 35,
        textAlign: 'center',
        paddingLeft: 30,
        color: '#fa0064'
    }
});