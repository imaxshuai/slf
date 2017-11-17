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

export default class JobItemHouseComponent extends Component{

    componentDidMount(){
    }

    render(){

        const {info, tags, unit, navigation, routerName} = this.props;
        return (
            <TouchableOpacity key={info.id} onPress={()=>navigation.navigate(routerName,info.id)}>
                <View style={styles.itemBox}>
                    <View style={styles.top}>
                        <Text style={styles.title} numberOfLines={1}>{info.title}</Text>
                        <Text  style={styles.price}>{info.salary}</Text>
                    </View>

                    <View style={styles.middle}>
                        <Text style={styles.company}>南京大科技电子商务有限公司</Text>
                        <Text style={styles.time}>{info.update_time}</Text>
                    </View>

                    <View style={styles.bottom}>
                        <View style={styles.bottom}>
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
                        <View style={styles.extensionBox}>
                            <Text style={{padding: 2, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginLeft: 5, }}>顶</Text>
                            <Text style={{padding: 2, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginLeft: 5, }}>火</Text>
                            <Text style={{padding: 2, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginLeft: 5, }}>折</Text>
                            <Text style={{padding: 2, color: '#fa0064', fontSize: 10, borderWidth: 0.5, borderColor: '#fa0064',borderRadius: 2, marginLeft: 5, }}>新</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}


const styles = StyleSheet.create({

    itemBox: {
        width: '100%',
        height: 100,
        padding: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
    },
    price: {
        color: '#fa0064',
        fontWeight: '500',
        fontSize: 16,
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    company: {
        color: '#777',
        fontSize: 14,
    },
    time: {
        color: '#aaa',
        fontSize: 13,
    },
    bottom: {
        flexDirection: 'row',
        height: 16,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textLeftInfo: {
        fontSize: 12,
        color: '#aaa',
    },
    describeTextBox: {
        flexDirection: 'row',
    },
    textCutLine: {
        width: 1,
        backgroundColor: '#aaa',
        marginLeft: 4,
        marginRight: 4,
        height: 12,
    },
    extensionBox: {
        flexDirection: 'row',
        height: 16,
    }
});