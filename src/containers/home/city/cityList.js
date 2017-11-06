import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from 'react-redux'

import { HeaderComponent } from '../../../components/header';

let { width } = Dimensions.get('window');

class CityList extends Component{

    static navigationOptions =({navigation})=>({
        header: null,
    });

    constructor(props){
        super(props);
        this.state = {
            city: this.props.navigation.state.params
        }
    }

    componentDidMount(){
        console.log(this.state);
    }

    changeCity = (city)=>{
        storage.save({
            key: 'City',
            data: city
        });
        City = city;
        this.props.navigation.goBack(this.props.nav.routes[1].key);
    };

    render(){
        return (

            <View>
                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>{this.state.city.name}</Text>}
                />

                <ScrollView style={styles.container}>
                    <View style={styles.cityArea}>
                        {this.state.city.city.map((city)=>
                            (<Text
                                style={styles.cityText}
                                onPress={this.changeCity.bind(this, city)}
                                key={city.name}>
                                {city.name}
                            </Text>)
                        )}
                    </View>
                </ScrollView>
            </View>
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

    container: {
        height: '100%',
    },
    cityArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
    cityText: {
        width: '25%',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },

});
