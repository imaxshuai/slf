import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    Platform,
    ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'

import * as userActions from '../../../redux/actions/user';
import { RepleaseItemComponent } from '../../../components/releaseItem';

const {width, height} = Dimensions.get('window');

class UserSetting extends Component{

    static navigationOptions = {
        headerTitle: '设置',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#333',
    };

    constructor(props){
        super(props);
    };

    clearStorage(){
        storage.remove({
            key: 'currentUser'
        });
        currentUser.loginState = false;
        currentUser.userinfo = '';
        currentUser.city = '北京';
        this.props.navigation.goBack();
    }


    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.settingsArea}>
                    <TouchableOpacity>
                        <View style={styles.settingsBox}>
                            <Text style={styles.settingsText}>个人资料</Text>
                            <Icon name="navigate-next" size={20} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingsBox}>
                            <Text style={styles.settingsText}>账户安全</Text>
                            <Icon name="navigate-next" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.settingsArea}>
                    <TouchableOpacity>
                        <View style={styles.settingsBox}>
                            <Text style={styles.settingsText}>意见反馈</Text>
                            <Icon name="navigate-next" size={20} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingsBox}>
                            <Text style={styles.settingsText}>帮助中心</Text>
                            <Icon name="navigate-next" size={20} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.settingsBox}>
                            <Text style={styles.settingsText}>关于我们</Text>
                            <Icon name="navigate-next" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.clearStorage.bind(this)}>
                    <View style={styles.loginOut}>
                        <Text style={styles.loginOutText}>退出登录</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        nav: state.nav,
        myReplease: state.myReplease
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserSetting)


const styles = StyleSheet.create({
    container:{
        marginTop: 5,
    },
    settingsArea: {
        marginBottom: 5,
    },
    settingsBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        marginBottom: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    settingsText: {
        fontSize: 16,
    },
    loginOut: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fa0064',
        height: 45,
        borderRadius: 3,
        overflow: 'hidden',
        width: width*.9,
        marginLeft: width*.05,
        marginTop: 30,
    },
    loginOutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});