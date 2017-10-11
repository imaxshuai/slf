import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    Platform,
    FlatList,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../../redux/actions/user';
import { RepleaseItemComponent } from '../../../components/releaseItem';

const {width, height} = Dimensions.get('window');

class UserCollection extends Component{

    static navigationOptions = {
        headerTitle: '我的收藏',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#333',
    };

    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
        }
    }


    getMyRelease = ()=>{
        this.props.userActions.getMyRepleaseShow([]);
    };
    getMyReleaseMore = ()=>{
        setTimeout(
            ()=>{
                if(this.props.myReplease.length<1){
                this.props.userActions.getMyRepleaseShow(this.props.myReplease);
            }
        }, 5000)
    };
    emptyComponent = ()=> {
        return <Text>数据获取失败！</Text>
    };

    render(){
        console.log(this.props);
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.myReplease}
                    renderItem={({item})=><RepleaseItemComponent info={item} navigation={this.props.navigation} />}
                    ListEmptyComponent={this.emptyComponent}
                    keyExtractor={(item)=>item.id}
                    initialNumToRender={5}
                    refreshing={this.props.myReplease.length<2}
                    onEndReachedThreshold={0.5}
                    onRefresh={this.getMyRelease}
                    onEndReached={this.getMyReleaseMore}
                    getItemLayout={(data, index) => ( {length: 160, offset: 160 * index, index} )}
                />
            </View>
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
)(UserCollection)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    }
});