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

    render(){

        const {info, tags, unit, navigation} = this.props;
        return (
            <TouchableOpacity key={info.id} onPress={()=>navigation.navigate('HouseDetail',info.id)}>
                <View style={styles.itemBox}>
                    {info.images&&info.images.length>0
                        ?
                        (<Image
                            source={{uri: ImageIp+info.images[0]}}
                            style={styles.itemImg}
                        />)
                        :null
                    }
                    <View style={styles.textInfo}>
                        <Text
                            style={styles.itemTitle}
                            numberOfLines={1}
                        >{info.title}</Text>

                        <View style={styles.describeText}>
                            {tags?tags.map((tag, i)=>{
                                if(i==0){
                                    return (
                                        <View key={tag} style={styles.describeTextBox}>
                                            <Text style={styles.textLeftInfo}>{info[tag]+unit[i+1]}</Text>
                                        </View>
                                    )
                                }else{
                                    if(info[tag]!=null){
                                        return (
                                            <View key={tag} style={styles.describeTextBox}>
                                                <View style={styles.textCutLine} />
                                                <Text style={styles.textLeftInfo}>{info[tag]+unit[i+1]}</Text>
                                            </View>
                                        )
                                    }else{
                                        return null;
                                    }
                                }

                            }):null}
                        </View>

                        <View style={styles.bottom}>
                            <View style={styles.textRight}>
                                <Text  style={styles.price}>{info.price+(unit?unit[0]:null)}</Text>
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
    describeTextBox: {
        flexDirection: 'row',
    },
    textLeftInfo: {
        color: '#999',
        fontSize: 11,
    },
    textCutLine: {
        width: 1,
        backgroundColor: '#aaa',
        marginLeft: 4,
        marginRight: 4,
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