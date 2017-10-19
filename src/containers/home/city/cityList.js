import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from 'react-redux'

let { width } = Dimensions.get('window');

class CityList extends Component{

    static navigationOptions =({navigation})=>({
        headerTitle: navigation.state.params.provnce,
        tintColor: '#999',
        headerTitleStyle: {
            fontSize: 14,
        },
        headerLeft: (<TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
            <Icon name="navigate-before" size={25} color="#333" style={{marginLeft: 10,}} />
        </TouchableWithoutFeedback>)
    });

    changeCity = (city)=>{
        storage.save({
            key: 'City',
            data: city
        });
        City = city;
        this.props.navigation.navigate('Home');
    }

    render(){
        let citys = this.props.navigation.state.params;
        console.log(this.props);
        return (
            <ScrollView style={styles.cityBox}>
                <View style={styles.cityClassify}>
                    <View style={styles.cityArea}>
                        {citys.city.map((city)=><Text
                            style={styles.cityText}
                            onPress={this.changeCity.bind(this, city)}
                            key={city}>{city}</Text>)}
                    </View>
                </View>
            </ScrollView>

        )
    }

}

const mapStateToProps = (state)=> {
    return {
        nav: state.nav,
    }
};

export default connect(mapStateToProps)(CityList)



const styles = StyleSheet.create({

    cityArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    cityText: {
        width: 70,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 6,
        backgroundColor: '#fff',
        textAlign: 'center',
    },

});
