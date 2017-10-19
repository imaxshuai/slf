import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    StyleSheet,
    BackHandler,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

let { width } = Dimensions.get('window');

export class Provnces extends Component{

    static navigationOptions =({navigation})=>({
        headerTitle: '地区选择',
        headerTitleStyle: {
            fontSize: 14,
            color: '#999',
            textAlign: 'center',
        },
        headerLeft: (<TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
            <Icon name="navigate-before" size={25} color="#333" style={{marginLeft: 10,}} />
        </TouchableWithoutFeedback>)
    });

    chooseCity = (city)=>{
        storage.save({
            key: 'City',
            data: city
        });
        City = city;
        this.props.navigation.goBack()
    }

    render(){
        return (
            <ScrollView style={styles.cityBox}>
                <View style={styles.cityClassify}>
                    <Text style={styles.classifyTitle}>热门城市</Text>
                    <View style={styles.cityArea}>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '北京')}
                        >北京</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '上海')}
                        >上海</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '广州')}
                        >广州</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '深圳')}
                        >深圳</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '城都')}
                        >成都</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '杭州')}
                        >杭州</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '南京')}
                        >南京</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '天津')}
                        >天津</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '武汉')}
                        >武汉</Text>
                        <Text style={styles.cityText}
                              onPress={this.chooseCity.bind(this, '重庆')}
                        >重庆</Text>
                    </View>
                </View>
                <View style={styles.cityClassify}>
                    <Text style={styles.classifyTitle}>全部地区</Text>
                    <View style={styles.cityArea}>
                        {citys.map((city)=><Text style={styles.cityText} onPress={()=>this.props.navigation.navigate('CityList', city)} key={city.provnce}>{city.provnce}</Text>)}
                    </View>
                </View>
            </ScrollView>

        )
    }

}

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
        justifyContent:'space-around',
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

const citys = [
    {
        provnce: '安徽',
        city: ["合肥", "芜湖", "蚌埠", "阜阳", "淮南", "安庆", "宿州", "六安", "淮北", "滁州", "马鞍山", "铜陵", "宣城", "亳州", "黄山", "池州", "巢湖", "和县", "霍邱", "桐城", "宁国", "天长"]
    },
    {
        provnce: '福建',
        city: ["福州", "厦门", "泉州", "莆田", "漳州", "宁德", "三明", "南平", "龙岩", "武夷山", "石狮", "晋江", "南安", "龙海"]
    },
    {
        provnce: '广东',
        city: ["深圳", "广州", "东莞", "佛山", "中山", "珠海", "惠州", "江门", "汕头", "湛江", "肇庆", "茂名", "揭阳", "梅州", "清远", "阳江", "韶关", "河源", "云浮", "汕尾", "潮州", "台山", "阳春", "顺德", "惠东", "博罗", "海丰"]
    },
    {
        provnce: '广西',
        city: ["南宁", "柳州", "桂林", "玉林", "梧州", "北海", "贵港", "钦州", "百色", "河池", "来宾", "贺州", "防城港", "崇左"]
    },
    {
        provnce: '贵州',
        city: ["贵阳", "遵义", "黔东南", "黔南", "六盘水", "毕节", "铜仁", "安顺", "黔西南", "仁怀"]
    },
    {
        provnce: '甘肃',
        city: ["兰州", "天水", "白银", "庆阳", "平凉", "酒泉", "张掖", "武威", "定西", "金昌", "陇南", "临夏", "嘉峪关", "甘南"]
    },
    {
        provnce: '海南',
        city: ["海口", "三亚", "五指山", "三沙", "琼海", "文昌", "万宁", "屯昌", "琼中", "陵水", "东方", "定安", "澄迈", "保亭", "白沙", "儋州"]
    },
    {
        provnce: '河南',
        city: ["郑州", "洛阳", "新乡", "南阳", "许昌", "平顶山", "安阳", "焦作", "商丘", "开封", "濮阳", "周口", "信阳", "驻马店", "漯河", "三门峡", "鹤壁", "济源", "明港", "鄢陵", "禹州", "长葛", "灵宝", "杞县", "汝州", "项城", "偃师", "长垣"]
    },

    {
        provnce: '湖北',
        city: ["武汉", "宜昌", "襄阳", "荆州", "十堰", "黄石", "孝感", "黄冈", "恩施", "荆门", "咸宁", "鄂州", "随州", "潜江", "天门", "仙桃", "神农架", "宜都", "汉川", "枣阳"]
    },
    {
        provnce: '湖南',
        city: ["长沙", "株洲", "益阳", "常德", "衡阳", "湘潭", "岳阳", "郴州", "邵阳", "怀化", "永州", "娄底", "湘西", "张家界", "醴陵"]
    },
    {
        provnce: '河北',
        city: ["石家庄", "保定", "唐山", "廊坊", "邯郸", "秦皇岛", "沧州", "邢台", "衡水", "张家口", "承德", "定州", "馆陶", "张北", "赵县", "正定", "迁安市", "任丘", "三河", "武安", "雄安新区", "燕郊涿州"]
    },
    {
        provnce: '江苏',
        city: ["苏州", "南京", "无锡", "常州", "徐州", "南通", "扬州", "盐城", "淮安", "连云港", "泰州", "宿迁", "镇江", "沭阳", "大丰", "如皋", "启东", "溧阳", "海门", "东海", "扬中", "兴化", "新沂", "泰兴", "如东", "邳州", "沛县", "靖江", "建湖", "海安", "东台", "丹阳", "宝应县", "灌南", "灌云", "姜堰", "金坛", "昆山", "泗洪", "泗阳"]
    },
    {
        provnce: '江西',
        city: ["南昌", "赣州", "九江", "宜春", "吉安", "上饶", "萍乡", "抚州", "景德镇", "新余", "鹰潭", "永新", "乐平"]
    },
    {
        provnce: '吉林',
        city: ["长春", "吉林", "四平", "延边", "松原", "白城", "通化", "白山", "辽源", "公主岭"]
    },
    {
        provnce: '辽宁',
        city: ["沈阳", "大连", "鞍山", "锦州", "抚顺", "营口", "盘锦", "朝阳", "丹东", "辽阳", "本溪", "葫芦岛", "铁岭", "阜新", "庄河", "瓦房店"]
    },
    {
        provnce: '宁夏',
        city: ["银川", "吴忠", "石嘴山", "中卫", "固原"]
    },
    {
        provnce: '青海',
        city: ["西宁", "海西", "海北", "果洛", "海东", "黄南", "玉树", "海南"]
    },
    {
        provnce: '山东',
        city: ["青岛", "济南", "烟台", "潍坊", "临沂", "淄博", "济宁", "泰安", "聊城", "威海", "枣庄", "德州", "日照", "东营", "菏泽", "滨州", "莱芜", "章丘", "垦利", "诸城", "寿光", "龙口", "曹县", "单县", "肥城", "高密", "广饶", "桓台", "莒县", "莱州", "蓬莱", "青州", "荣成", "乳山", "滕州", "新泰", "招远", "邹城", "邹平"]
    },
    {
        provnce: '山西',
        city: ["太原", "临汾", "大同", "运城", "晋中", "长治", "晋城", "阳泉", "吕梁", "忻州", "朔州", "临猗", "清徐"]
    },
    {
        provnce: '陕西',
        city: ["西安", "咸阳", "宝鸡", "渭南", "汉中", "榆林", "延安", "安康", "商洛", "铜川", "神木"]
    },
    {
        provnce: '四川',
        city: ["成都", "绵阳", "德阳", "南充", "宜宾", "自贡", "乐山", "泸州", "达州", "内江", "遂宁", "攀枝花", "眉山", "广安", "资阳", "凉山", "广元", "雅安", "巴中", "阿坝", "甘孜", "安岳", "广汉", "简阳", "仁寿"]
    },
    {
        provnce: '新疆',
        city: ["乌鲁木齐", "昌吉", "巴音郭楞", "伊犁", "阿克苏", "喀什", "哈密", "克拉玛依", "博尔塔拉", "吐鲁番", "和田", "石河子", "克孜勒苏", "阿拉尔", "五家渠", "图木舒克", "库尔勒", "阿勒泰", "塔城"]
    },
    {
        provnce: '西藏',
        city: ["拉萨", "日喀则", "山南", "林芝", "昌都", "那曲", "阿里", "日土", "改则"]
    },
    {
        provnce: '云南',
        city: ["昆明", "曲靖", "大理", "红河", "玉溪", "丽江", "文山", "楚雄", "西双版纳", "昭通", "德宏", "普洱", "保山", "临沧", "迪庆", "怒江"]
    },
    {
        provnce: '浙江',
        city: ["杭州", "宁波", "温州", "金华", "嘉兴", "台州", "绍兴", "湖州", "丽水", "衢州", "舟山", "乐清", "瑞安", "义乌", "余姚", "诸暨", "象山", "温岭", "桐乡", "慈溪", "长兴", "嘉善", "海宁", "德清", "东阳", "安吉", "苍南", "临海", "永康", "玉环"]
    },
    {
        provnce: '其他',
        city: ["香港", "澳门", "台湾", "全国", "其他"]
    },
    {
        provnce: '海外',
        city: ["洛杉矶", "旧金山", "纽约", "多伦多", "温哥华", "伦敦", "莫斯科", "首尔", "东京", "新加坡", "曼谷", "清迈", "迪拜", "奥克兰", "悉尼", "墨尔本", "其他海外城市"]
    },
    {
        provnce: '黑龙江',
        city: ["哈尔滨", "大庆", "齐齐哈尔", "牡丹江", "绥化", "佳木斯", "鸡西", "双鸭山", "鹤岗", "黑河", "伊春", "七台河", "大兴安岭"]
    },
    {
        provnce: '内蒙古',
        city: ["呼和浩特", "包头", "赤峰", "鄂尔多斯", "通辽", "呼伦贝尔", "巴彦淖尔市", "乌兰察布", "锡林郭勒", "兴安盟", "乌海", "阿拉善盟", "海拉尔"]
    },
];