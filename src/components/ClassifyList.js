import React,{ Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { NavbarTitleComponent } from '../components/NavbarTitle';

export class ClassifyListComponent extends Component{

    _goBack(){
        this.props.navigation.goBack()
    }


    renderLeftItem(){
        return (
            <TouchableOpacity onPress={this._goBack.bind(this)}>
                <Icon name="close" size={16} />
            </TouchableOpacity>
        )
    }
    renderTitletem(){
        return (
            <Text style={{fontWeight: 'bold'}}>房屋出租</Text>
        )
    }

    render(){
        return (
            <View style={styles.container}>

                <NavbarTitleComponent
                    leftItem={this.renderLeftItem.bind(this)}
                    titleItem={this.renderTitletem.bind(this)}
                />

                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}

                    renderItem={
                        ({item}) => (
                            <TouchableOpacity >
                                <Text style={styles.item}>{item.key}</Text>
                            </TouchableOpacity>
                        )
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
        height: 30,
        lineHeight: 30,
        marginTop: 10,
    }
})