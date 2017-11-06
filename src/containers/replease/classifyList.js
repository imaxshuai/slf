import React,{ Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import {HeaderComponent} from "../../components/header";

export class ClassifyList extends Component{

    static navigationOptions = {
        header: null
    };

    //跳转发布表格页面
    goRepleaseForm = (message)=>{
        message.titleId = this.props.navigation.state.params.id;
        console.log(message);
        let conponentName = 'Replease'+message.titleId+'to'+message.id;
        console.log(conponentName);
       this.props.navigation.navigate(conponentName, message.key)
    };

    render(){
        let classify = this.props.navigation.state.params;
        console.log(classify)

        return (
            <View style={styles.container}>

                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>{classify.title}</Text>}
                />

                <FlatList
                    data={classify.label}

                    renderItem={
                        ({item}) => {
                            return (
                                <TouchableOpacity >
                                    <Text
                                        style={styles.item} key={item.id}
                                        onPress={this.goRepleaseForm.bind(this, item)}
                                    >
                                        {item.key}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    }
                    ItemSeparatorComponent={()=>(<View style={{height: 1,backgroundColor: '#eee'}}></View>)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        paddingLeft: 30,
        paddingBottom: 5,
        height: 30,
        marginTop: 10,

    }
})