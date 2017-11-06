import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HeaderComponent } from '../../../components/header';
import * as userActions from '../../../redux/actions/user';

let { width } = Dimensions.get('window');

class Provnces extends Component{

    static navigationOptions =({navigation})=>({
        header: null,
    });

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.userActions.getCitys();
        console.log(this.props.citys['citys']==null);
    }

    chooseCity = (city)=>{
        storage.save({
            key: 'City',
            data: city
        });
        City = city;
        this.props.navigation.goBack()
    };


    render(){
        return (
            <View style={styles.cityBox}>

                <HeaderComponent
                    headerLeft={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Icon name='navigate-before' size={25} color='#aaa' />
                        </TouchableOpacity>
                    }
                    headerTitle={<Text style={{fontSize: 18}}>城市选择</Text>}
                />

                <ScrollView>
                    <View style={styles.cityClassify}>
                        <Text style={styles.classifyTitle} onPress={()=>console.log(City)} >热门城市</Text>
                        <View style={styles.cityArea}>
                            {this.props.citys['hotCitys']==null
                                ?
                                (<Text>城市正在加载中...</Text>)
                                :
                                this.props.citys['hotCitys'].map(
                                    (city)=>
                                        (<Text
                                            style={styles.cityText}
                                            onPress={this.chooseCity.bind(this, city)}
                                            key={city.name}>{city.name}
                                        </Text>)
                                )}
                        </View>
                    </View>
                    <View style={styles.cityClassify}>
                        <Text style={styles.classifyTitle}>省份选择</Text>
                        <View style={styles.cityArea}>
                            {this.props.citys['citys']==null
                                ?
                                (<Text>城市正在加载中...</Text>)
                                :
                                this.props.citys['citys'].map(
                                (province)=>
                                    (<Text
                                        style={styles.cityText}
                                        onPress={()=>this.props.navigation.navigate('CityList', province)}
                                        key={province.name}>{province.name}
                                    </Text>)
                            )}
                        </View>
                    </View>


                    <View style={{height: 100}}/>

                </ScrollView>

            </View>

        )
    }

}

const mapStateToProps = (state)=>{
    return {
        citys: state.citys,
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Provnces);


const styles = StyleSheet.create({
    cityBox: {

    },
    cityClassify: {

    },
    classifyTitle: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        fontWeight: '500',
        color: '#666',
        borderRadius: 3,
        overflow: 'hidden',
        marginTop: 10,
    },
    cityArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent:'be-around',
        padding: 5,
        backgroundColor: '#fff',

    },
    cityText: {
        width: '25%',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
    },

});