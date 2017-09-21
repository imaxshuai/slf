import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

const { width } = Dimensions.get('window');
export class NavbarTitleComponent extends Component {

    renderLeftItem() {
        if (this.props.leftItem === undefined) return;
        return this.props.leftItem();
    }

    // 中间
    renderTitleItem() {
        if (this.props.titleItem === undefined) return;
        return this.props.titleItem();
    }

    // 右边
    renderRightItem() {
        if (this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }

    render(){
        return(
            <View style={styles.container}>
                {/* 左边 */}
                <View style={styles.navBarleft}>
                    {this.renderLeftItem()}
                </View>
                {/* 中间 */}
                <View style={styles.navBarTitle}>
                    {this.renderTitleItem()}
                </View>
                {/* 右边 */}
                <View style={styles.navBarRight}>
                    {this.renderRightItem()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        paddingTop: Platform.OS === 'ios' ? 20: 0,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    navBarleft: {
        width: (width-40)/3,
        alignItems: 'flex-start'
    },
    navBarTitle: {
        width: (width-40)/3,
        alignItems: 'center'
    },
    navBarRight: {
        width: (width-40)/3,
        alignItems: 'flex-end'
    },
});