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

export default class ListItemHouseComponent extends Component{

    componentDidMount(){
    }

    toDetail = ()=>{
        this.props.navigation.navigate('HouseDetail',this.props.info)
    }

    render(){
        return (
            <TouchableOpacity key={this.props.info.id} onPress={this.toDetail}>
                <View style={styles.itemBox}>
                    {this.props.info.images.length>0
                        ?
                        (<Image
                            source={{uri: Ip+'upload/images/'+this.props.info.images[0]}}
                            style={styles.itemImg}
                        />)
                        :null
                    }
                    <View style={styles.textInfo}>
                        <Text
                            style={styles.itemTitle}
                            numberOfLines={1}
                        >{this.props.info.title}</Text>

                        <View style={styles.describeText}>
                            <Text style={styles.textLeftInfo}>{this.props.info.room_and_hall}</Text>
                            <View style={styles.textCutLine} />
                            <Text style={styles.textLeftInfo}>{this.props.info.house_size}㎡</Text>
                            <View style={styles.textCutLine} />
                            <Text style={styles.textLeftInfo}>中等装修</Text>
                        </View>

                        <View style={styles.bottom}>
                            <View style={styles.textRight}>
                                <Text  style={styles.price}>{this.props.info.price}元</Text>
                            </View>
                            <View style={styles.extensionBox}>
                                <Text style={{padding: 3, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginRight: 5, }}>顶</Text>
                                <Text style={{padding: 3, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginRight: 5, }}>火</Text>
                                <Text style={{padding: 3, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginRight: 5, }}>折</Text>
                                <Text style={{padding: 3, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginRight: 5, }}>新</Text>
                            </View>
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
        justifyContent: 'flex-start',
    },
    textLeftInfo: {
        color: '#999',
        fontSize: 12,
    },
    textCutLine: {
        width: 1,
        backgroundColor: '#aaa',
        marginLeft: 8,
        marginRight: 8,
        height: 12,
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        color: '#fa0064',
        fontWeight: '500',
        fontSize: 16,
    },
    extensionBox: {
        flexDirection: 'row',
    }


});