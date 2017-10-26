/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Picker from 'react-native-picker';
var ImagePicker = require('react-native-image-picker');
let data = [];
for(var i=0;i<100;i++){
    data.push(i);
}

var options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class App extends Component<{}> {

    constructor(){
        super();
    }

    componentDidMount(){

    }

    alertPicker = ()=>{
        Picker.init({
            pickerData: data,
            selectedValue: [59],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }

    uploadImages = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.uploadImages}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions} onPress={this.alertPicker}>
                    To get started, edit App.js<Icon name="close" size={50} color="#f00"/>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
