import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Animated, StyleSheet, Picker, PickerIOS,Dimensions } from 'react-native'
import Modal from 'react-native-modal';

import { Radio } from '../../components/radio';
import { Checkbox } from '../../components/checkbox';
import { HouseBaseInfo } from '../../components/houseBaseInfo';

let { width } = Dimensions.get('window');

export class ModalList extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            visibleModal: null,
            selectValue: null,
            radioSelectValue: null,
            checkboxSelectValue: null,
        };
    }


    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.setState({ visibleModal: 5 })}>
                    <View style={styles.button}>
                        <Text>底部显示</Text>
                    </View>
                </TouchableOpacity>

                <Text onPress={()=>console.log(this.state.radioSelectValue)}>查看性别</Text>
                <Text onPress={()=>console.log(this.state.checkboxSelectValue)}>查看配置</Text>

                <Radio
                    data={['男','女','保密']}
                    value='男'
                    select={(select)=>this.setState({radioSelectValue: select})}
                />

                <Checkbox
                    data={['空调','冰箱','洗衣机','电视','宽带','卫生间','阳台','暖气']}
                    value={['空调','冰箱','洗衣机','电视','宽带','卫生间']}
                    select={(select)=>this.setState({checkboxSelectValue: select})}
                />


                <HouseBaseInfo />


                <Modal
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                    isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    <View style={styles.modalContent}>
                        <Text>Hello!</Text>
                    </View>
                </Modal>
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
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
