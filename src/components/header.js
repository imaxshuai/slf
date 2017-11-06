import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
export class HeaderComponent extends Component {

    static PropTypes = {
        style: PropTypes.object,
        headerLeft: PropTypes.node,
        headerLeftStyle: PropTypes.object,
        headerTitle: PropTypes.node,
        headerTitleStyle: PropTypes.object,
        headerRight: PropTypes.node,
        headerRightStyle: PropTypes.object,
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={[styles.container, this.props.style]}>
                {/* 左边 */}
                <View style={[styles.headerLeft, this.props.headerLeftStyle]}>
                    {this.props.headerLeft}
                </View>
                {/* 中间 */}
                <View style={[styles.headerTitle, this.props.headerTitleStyle]}>
                    {this.props.headerTitle}
                </View>
                {/* 右边 */}
                <View style={[styles.headerRight, this.props.headerRightStyle]}>
                    {this.props.headerRight}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        height: Platform.OS === 'ios' ? 60: 50,
        paddingTop: Platform.OS === 'ios' ? 30: 0,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },

    headerLeft: {
        width: '25%',
        height: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headerTitle: {
        width: '50%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRight: {
        width: '25%',
        height: 30,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

});