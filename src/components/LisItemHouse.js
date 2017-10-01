import React,{Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

let { width } = Dimensions.get('window');

export class ListItemHouseComponent extends Component{

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return (
            <TouchableOpacity key={this.props.info.id}>
                <View style={styles.itemBox}>
                    <Image
                        source={{uri: this.props.info.images[0]}}
                        style={styles.itemImg}
                    />
                    <View style={styles.textInfo}>
                        <Text
                            style={styles.itemTitle}
                            numberOfLines={1}
                        >{this.props.info.title}</Text>

                        <View style={styles.describeText}>
                            <View style={styles.textLeft}>
                                <Text style={styles.textLeftInfo}>{this.props.info.rental_form}</Text>
                                <View style={styles.textCutLine}></View>
                                <Text style={styles.textLeftInfo}>{this.props.info.house_size}㎡</Text>
                                <View style={styles.textCutLine}></View>
                                <Text style={styles.textLeftInfo}>中等装修</Text>
                            </View>
                            <View style={styles.textRight}>
                                <Text  style={styles.textRightInfo}>{this.props.info.price}元</Text>
                            </View>
                        </View>

                        <View style={styles.extensionBox}>
                            <Text style={{padding: 5, color: '#fff',backgroundColor: '#fa0064', borderRadius: 3, marginRight: 10, overflow: 'hidden'}}>顶</Text>
                            <Text style={{padding: 5, color: '#fff',backgroundColor: '#fa0064', borderRadius: 3, marginRight: 10, overflow: 'hidden'}}>火</Text>
                            <Text style={{padding: 5, color: '#fff',backgroundColor: '#fa0064', borderRadius: 3, marginRight: 10, overflow: 'hidden'}}>折</Text>
                            <Text style={{padding: 5, color: '#fff',backgroundColor: '#fa0064', borderRadius: 3, marginRight: 10, overflow: 'hidden'}}>新</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    itemBox: {
        width: width,
        height: 130,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        flexDirection: 'row',
        padding: 15,
    },
    itemImg: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginRight: 20,
    },
    textInfo: {
        width: width-160,
        height: 100,
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontSize: 16,
        color: '#777',
        overflow: 'hidden',
        width: width-160,
        fontWeight: '500',
    },
    describeText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textLeft: {
        flexDirection: 'row',
    },
    textLeftInfo: {
        color: '#999',
    },
    textCutLine: {
        width: 1,
        backgroundColor: '#aaa',
        marginLeft: 8,
        marginRight: 8,
        height: 12,
    },
    textRight: {

    },
    textRightInfo: {
        color: '#fa0064',
        fontWeight: '500',
    },
    extensionBox: {
        flexDirection: 'row',
    }


});