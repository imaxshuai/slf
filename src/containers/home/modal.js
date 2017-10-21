import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Animated, StyleSheet, Picker, PickerIOS,Dimensions } from 'react-native'
import Modal from 'react-native-modal';

let { width } = Dimensions.get('window');

export class ModalList extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            visibleModal: null,
        };
    }


/*    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );*/

/*    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Hello!</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );*/

    render () {
        return (
        <View style={styles.container}>
{/*            {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}
            {this._renderButton('Sliding from the sides', () => this.setState({ visibleModal: 2 }))}
            {this._renderButton('A slower modal', () => this.setState({ visibleModal: 3 }))}
            {this._renderButton('Fancy modal!', () => this.setState({ visibleModal: 4 }))}*/}
            <TouchableOpacity onPress={() => this.setState({ visibleModal: 5 })}>
                <View style={styles.button}>
                    <Text>底部显示</Text>
                </View>
            </TouchableOpacity>
{/*            <TouchableOpacity onPress={() => this.setState({ visibleModal: 6 })}>
                <View style={styles.button}>
                    <Text>点击背景消失</Text>
                </View>
            </TouchableOpacity>*/}
{/*            <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>
            <Modal
                isVisible={this.state.visibleModal === 2}
                animationIn={'slideInLeft'}
                animationOut={'slideOutRight'}
            >
                {this._renderModalContent()}
            </Modal>
            <Modal
                isVisible={this.state.visibleModal === 3}
                animationInTiming={2000}
                animationOutTiming={2000}
                backdropTransitionInTiming={2000}
                backdropTransitionOutTiming={2000}
            >
                {this._renderModalContent()}
            </Modal>
            <Modal
                isVisible={this.state.visibleModal === 4}
                backdropColor={'red'}
                backdropOpacity={1}
                animationIn={'zoomInDown'}
                animationOut={'zoomOutUp'}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
            >
                {this._renderModalContent()}
            </Modal>*/}
            <Modal
                onBackdropPress={() => this.setState({ visibleModal: null })}
                isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                <View style={styles.modalContent}>
                    <Text>Hello!</Text>
                    {/*{this._renderButton('Close', () => this.setState({ visibleModal: null }))}*/}
                </View>
            </Modal>
{/*            <Modal
                isVisible={this.state.visibleModal === 6}
                onBackdropPress={() => this.setState({ visibleModal: null })}
            >
                {this._renderModalContent()}
            </Modal>*/}
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
/*    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },*/
    modalContent: {
        backgroundColor: 'white',
        // padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 4,
        // borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
