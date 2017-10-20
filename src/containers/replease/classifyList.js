import React,{ Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { NavbarTitleComponent } from '../../components/NavbarTitle';

export class ClassifyList extends Component{

    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.title,
        headerLeft: (
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name="navigate-before" size={25} color="#333" />
            </TouchableOpacity>
        ),
        headerTitleStyle: {
            fontSize: 16,
            color: '#333'
        }
    });
    componentDidMount(){
    }

    _goBack(){
        this.props.navigation.goBack()
    }
    //挑战发布表格页面
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