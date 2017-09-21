import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavbarTitleComponent } from '../../components/NavbarTitle';
import * as userActions from '../../redux/actions/user';

let { width, height } = Dimensions.get("window");
class User extends Component{

    static navigationOptions = {
        tabBarLabel: "发布",
        tabBarIcon: ({tintColor})=>((<Icon name="pencil-square" size={25} color={tintColor}/>))
    };

    constructor(...props){
        super(...props);
    }

    componentDidMount(){
        console.log(currentUser)
    }

    //设置NAVBAR标题格式
    renderTitleItem(){
        return(
            <Text style={{fontWeight: 'bold'}}>选择发布分类</Text>
        );
    }
    renderRightItem(){
        return(
            <TouchableOpacity onPress={this.toLogin.bind(this)}>
                <Text>我的发布</Text>
            </TouchableOpacity>
        );
    }

    // 跳转登录界面
    toLogin(){
        this.props.navigation.navigate('Login');
    }
    //跳转二级分类页面，并传输数据
    toClassifyList(classify){
        this.props.navigation.navigate('ClassifyList',classify);
    }


    render(){

        return(
            <View style={styles.containerBox}>

                {/*头部Navbar区域*/}
                <NavbarTitleComponent
                    router={this.props}
                    titleItem = {() => this.renderTitleItem()}
                    rightItem = {() => this.renderRightItem()}
                />

                {/*中心内容选择分类区域*/}
                <View style={styles.navClass}>
                    <TouchableOpacity onPress={this.toClassifyList.bind(this,{list: classify.fc})}>
                        <View style={styles.navItem}>
                            <Icon name="bank" size={40} color="#39a0f4" />
                            <Text style={styles.navItemText}>房屋出租</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toClassifyList.bind(this,{list: classify.zp})}>
                        <View style={styles.navItem}>
                            <Icon name="briefcase" size={40} color="#fe4a6c" />
                            <Text style={styles.navItemText} >人才招聘</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.sy})}>
                        <View style={styles.navItem}>
                            <Icon name="suitcase" size={40} color="#42ba7b" />
                            <Text style={styles.navItemText} >商业服务</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.es})}>
                        <View style={styles.navItem}>
                            <Icon name="shopping-bag" size={40} color="#f6552c" />
                            <Text style={styles.navItemText}>同城二手</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.esc})}>
                        <View style={styles.navItem}>
                            <Icon name="car" size={40} color="#0bbaac" />
                            <Text style={styles.navItemText}>二手车</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.sh})}>
                        <View style={styles.navItem}>
                            <Icon name="gift" size={40} color="#ffb300" />
                            <Text style={styles.navItemText}>生活服务</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.jy})}>
                        <View style={styles.navItem}>
                            <Icon name="mortar-board" size={40} color="#42ba7b" />
                            <Text style={styles.navItemText}>教育培训</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.pet})}>
                        <View style={styles.navItem}>
                            <Icon name="tachometer" size={40} color="#39a0f4" />
                            <Text style={styles.navItemText}>宠物</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toClassifyList.bind(this,{list: classify.qcfw})}>
                        <View style={styles.navItem}>
                            <Icon name="cab" size={40} color="#fa0064" />
                            <Text style={styles.navItemText}>汽车服务</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user: state.user,
        nav: state.nav
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

const styles = StyleSheet.create({
    containerBox: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navClass: {
        flexDirection: "row",
        marginTop: 20,
        flexWrap: 'wrap',
        padding: 30,
    },
    navItem: {
        justifyContent: "center",
        alignItems: "center",
        width: (width-60)/3,
        marginTop: 50,

    },
    navItemText: {
        marginTop: 10,
    },
});


const classify = {
    "fc": {
        "title": "房产租售",
        "label": [
            { "id":"1", "key": "新房楼盘" },    { "id":"", "key": "二手房" },    { "id":"3", "key": "房屋出租" },
            { "id":"4", "key": "求租房屋" },    { "id":"5", "key": "短租日租" },    { "id":"6", "key": "商铺出租" },
            { "id":"7", "key": "商铺出售" },    { "id":"8", "key": "商铺转让" },    { "id":"9", "key": "写字楼出售" },
            { "id":"10", "key": "厂房" },    { "id":"11", "key": "仓库" },    { "id":"12", "key": "土地" },
            { "id":"13", "key": "农庄" }
        ]
    },
    "zp": {
        "title": "人才招聘",
        "label": [
            { "id":"1", "key": "销售/采购/贸易" },    { "id":"2", "key": "家政/保安/物业" },    { "id":"3", "key": "技工/普工/司机" },
            { "id":"4", "key": "市场/公关/公展" },    { "id":"5", "key": "美术/设计/广告" },    { "id":"6", "key": "KTV/酒吧" },
            { "id":"7", "key": "IT/互联网/通信" },    { "id":"8", "key": "人事/行政/后勤/客服" },    { "id":"9", "key": "运输/物流/仓储" },
            { "id":"10", "key": "财务/审计/统计" },    { "id":"11", "key": "金融/保险/银行" },    { "id":"12", "key": "零售/百货/商超" },
            { "id":"13", "key": "美容/保健/健身" },    { "id":"14", "key": "酒店/餐饮/旅游" },    { "id":"15", "key": "影视/娱乐/媒体" },
            { "id":"16", "key": "法律/教育/培训" },    { "id":"17", "key": "翻译/出版/印刷" },    { "id":"18", "key": "服装/纺织" },
            { "id":"19", "key": "农/林/牧/副/渔" },    { "id":"20", "key": "建筑/装潢/市政工程" },    { "id":"21", "key": "生物/制药/医疗器械" },
            { "id":"22", "key": "机械/电子/化工" },    { "id":"23", "key": "医院/医疗/护理" },    { "id":"24", "key": "能源/环保" },
            { "id":"25", "key": "房地产开发/销售" },    { "id":"26", "key": "汽车销售/维修/美容" },    { "id":"27", "key": "兼职工作" },
            { "id":"28", "key": "求职简历"}
        ]
    },
    "sy": {
        "title": "商业服务",
        "label": [
            { "id":"1", "key": "公司注册" },    { "id":"2", "key": "商业金融" },    { "id":"3", "key": "会计财务" },
            { "id":"4", "key": "律师服务" },    { "id":"5", "key": "保险" },    { "id":"6", "key": "翻译/速记" },
            { "id":"7", "key": "签证" },    { "id":"8", "key": "广告设计" },    { "id":"9", "key": "喷绘" },
            { "id":"10", "key": "印刷" },    { "id":"11", "key": "工作服" },    { "id":"12", "key": "礼品" },
            { "id":"13", "key": "办公设备" },    { "id":"14", "key": "维修/租赁" },    { "id":"15", "key": "商演/展会" },
            { "id":"16", "key": "易经" },    { "id":"17", "key": "风水" },    { "id":"18", "key": "安防布线" },
            { "id":"19", "key": "IT/互联网" },    { "id":"20", "key": "物流存储" },    { "id":"21", "key": "工程车维修/租赁" },
            { "id":"22", "key": "工业设备维修/租赁" },    { "id":"23", "key": "农林牧副渔" }
        ]
    },
    "es": {
        "title": "同城二手",
        "label": [
            { "id":"1", "key": "手机" },    { "id":"2", "key": "手机配件" },    { "id":"3", "key": "笔记本电脑" },
            { "id":"4", "key": "台式机电脑" },    { "id":"5", "key": "平板电脑" },    { "id":"6", "key": "数码产品" },
            { "id":"7", "key": "相机" },    { "id":"8", "key": "家用电器" },    { "id":"9", "key": "家用家具" },
            { "id":"10", "key": "日用百货" }, { "id":"11", "key": "母婴用品" },    { "id":"12", "key": "美容护肤" },
            { "id":"13", "key": "首饰" },    { "id":"14", "key": "服饰" },    { "id":"15", "key": "箱包" },
            { "id":"16", "key": "艺术收藏" },    { "id":"17", "key": "自行车" },    { "id":"18", "key": "图书" },
            { "id":"19", "key": "音像" },    { "id":"20", "key": "户外文体" },    { "id":"21", "key": "办公家具" },
            { "id":"22", "key": "办公用品" },    { "id":"23", "key": "农林牧副渔" },    { "id":"24", "key": "二手求购" }
        ]
    },"esc": {
        "title": "二手车",
        "label": [
            { "id":"1", "key": "二手车" },    { "id":"2", "key": "二手皮卡" },    { "id":"3", "key": "二手电动车" },
            { "id":"4", "key": "二手摩托车" },    { "id":"5", "key": "二手客车" },    { "id":"6", "key": "二手货车" },
            { "id":"7", "key": "二手工程车" },    { "id":"8", "key": "二手工业设备" }
        ]
    },"sh": {
        "title": "生活服务",
        "label": [
            { "id":"1", "key": "家政服务" },    { "id":"2", "key": "维修服务" },    { "id":"3", "key": "美食餐饮" },
            { "id":"4", "key": "酒店住宿" },    { "id":"5", "key": "装修建材" },    { "id":"6", "key": "茶叶" },
            { "id":"7", "key": "酒" },    { "id":"8", "key": "母婴亲子" },    { "id":"9", "key": "美容美发" },
            { "id":"10", "key": "摄影写真" },    { "id":"11", "key": "婚庆服务" },    { "id":"12", "key": "演出/庆典" },
            { "id":"13", "key": "旅游" },    { "id":"14", "key": "休闲" },    { "id":"15", "key": "医疗体检" },
            { "id":"16", "key": "娱乐健身" },    { "id":"17", "key": "运动保健" },    { "id":"18", "key": "按摩" },
            { "id":"19", "key": "鲜花/水族" },    { "id":"20", "key": "手工DIY" },    { "id":"21", "key": "成人用品" },
            { "id":"22", "key": "白事服务" }
        ]
    },"jy": {
        "title": "教育培训",
        "label": [
            { "id":"1", "key": "职业技能" },    { "id":"2", "key": "学历教育" },    { "id":"3", "key": "家教" },
            { "id":"4", "key": "IT认证" },    { "id":"5", "key": "移民留学" },    { "id":"6", "key": "文艺" },
            { "id":"7", "key": "体育" },    { "id":"8", "key": "婴幼儿教育" },    { "id":"9", "key": "中小学教育" },
            { "id":"10", "key": "户外拓展" },    { "id":"11", "key": "其他" }
        ]
    },"pet": {
        "title": "宠物",
        "label": [
            { "id":"1", "key": "猫" },    { "id":"2", "key": "狗" },    { "id":"3", "key": "花/鸟/鱼" },
            { "id":"4", "key": "其他宠物" },    { "id":"5", "key": "宠物用品/服务" },    { "id":"6", "key": "宠物赠送" }
        ]
    },"qcfw": {
        "title": "汽车服务",
        "label": [
            { "id":"1", "key": "汽车美容" },    { "id":"2", "key": "汽车维修" },    { "id":"3", "key": "汽车改装" },
            { "id":"4", "key": "汽车租赁" },    { "id":"5", "key": "学车相关" }
        ]
    }

};