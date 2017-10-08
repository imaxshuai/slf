import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as classifyActions from '../../../redux/actions/classify';

const {width, height} = Dimensions.get('window');

class DeleteReplease extends Component{

    static navigationOptions = {
        tabBarLabel: "已删除",
    };

    render(){
        console.log(this.props);
        return(
            <View style={styles.container}>
                <Text>你好，我是全部发布页面</Text>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        nav: state.nav,
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        classifyActions: bindActionCreators(classifyActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteReplease)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});