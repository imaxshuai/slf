import React,{ Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Platform,StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as userActions from '../../../redux/actions/user';

class MyResume extends Component{

    static navigationOptions ={
        tabBarLabel: '求职',
    };

    constructor(...props){
        super(...props);
        this.state= {

        };
    }


    render(){
        return (
            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.list} onPress={()=>this.props.navigation.navigate('ResumeDetail')}>
                    <View style={styles.left}>
                        <Icon color='#20A8F9' size={25} name='get-app' style={styles.listIcon} />
                        <Text>查看我的简历</Text>
                    </View>
                    <Icon name="navigate-next" color='#aaa' size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.list}>
                    <View style={styles.left}>
                        <Icon color='#20A8F9' size={25} name='credit-card' style={styles.listIcon} />
                        <Text>简历投递历史</Text>
                    </View>
                    <Icon name="navigate-next" color='#aaa' size={25} />
                </TouchableOpacity>

            </ScrollView>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyResume);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listIcon: {
        width: 35,
    }
});