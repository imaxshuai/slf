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

export class JobItemComponent extends Component{

    componentDidMount(){
    }

    toDetail = ()=>{
        this.props.navigation.navigate('JobDetail',this.props.info)
    }

    render(){
        return (
            <TouchableOpacity key={this.props.info.id} onPress={this.toDetail}>
                <View style={styles.itemBox}>
                    <View style={styles.leftArea}>
                        <Text style={styles.title} numberOfLines={1}>{this.props.info.title}</Text>
                        <Text style={styles.companyName}>南京能纷期电子商务有限公司</Text>
                        <View style={styles.condition}>
                            <Text style={styles.conditionItem}>民营公司</Text>
                            <View style={styles.textCutLine} />
                            <Text style={styles.conditionItem}>本科</Text>
                            <View style={styles.textCutLine} />
                            <Text style={styles.conditionItem}>2年</Text>
                        </View>
                    </View>
                    <View style={styles.rightArea}>
                        <Text style={styles.price}>{this.props.info.price}元/月</Text>
                        <Text style={styles.city}>南京</Text>
                        <Text style={styles.time}>今天</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}


const styles = StyleSheet.create({

    itemBox: {
        width: width,
        height: 100,
        borderBottomWidth: 0.3,
        borderColor: '#999',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 10,
        justifyContent: 'space-between',
    },
    leftArea: {
        justifyContent: 'space-between',
    },
    rightArea: {
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        width: width*0.65,
        overflow: 'hidden',
    },
    companyName: {
        fontSize: 14,
        fontWeight: '100',
    },
    condition: {
        flexDirection: 'row',
    },
    conditionItem: {
        fontSize: 12,
        color: "#999"
    },
    textCutLine: {
        width: 1,
        backgroundColor: '#aaa',
        marginLeft: 8,
        marginRight: 8,
        height: 12,
    },
    price: {
        color: '#fa0064'
    },
    city: {
        fontSize: 14,
        fontWeight: '100',
    },
    time: {
        fontSize: 12,
        color: "#999"
    },


});