import * as actionTypes from '../constants/actionTypes';
import Mock from 'mockjs';

export const getSort = ()=>{

    return (dispatch)=>{
        Http.get(Ip+'api/sort')
            .then((res)=>{

                dispatch({
                    type: actionTypes.SORT,
                    data: res
                })
            })
    }

};

export const getHouseList = (params) =>{

    return (dispatch)=>{

        Http.get(Ip+'api/house', params)
            .then((res)=>{
                dispatch({
                    type: actionTypes.GET_HOUSE_LIST,
                    data: res,
                })
            })
    }
}

export const getHouse = (houseData) =>{

    return (dispatch)=> {
        Http.post('http://rapapi.org/mockjs/26250/api/house')
            .then((res)=>{
                if(res.success){

                    console.log(res);
                    let c = Mock.mock(res).data;

                    if(houseData != null){
                        houseData = houseData.concat(c);
                    }

                    dispatch({
                        type: actionTypes.HOUSE_CLASSIFY,
                        data: houseData
                    })

                }else{
                    alert('服务器繁忙！！！')
                }
            })
    }
};

export const getHouseMore = ()=>{
    console.log('--------加载更多数据...---------');
    return (dispatch) => {
        Http.post('http://rapapi.org/mockjs/26250/api/house')
            .then((res)=>{
                console.log(res);
                dispatch({
                    type: actionTypes.GET_HOUSE_MORE,
                    data: Mock.mock(res)
                })
            })
    }
};


let houseData11 = [{ citycode: 839233,
    contacts: 'Sarah Lewis',
    house_configure: '独卫、空调、冰箱',
    agent: 1,
    create_time: '1981-39-02 10:39',
    sort_id: 1276,
    telphone: 17312255260,
    delete_time: '2004-30-21 04:30',
    price: 9101,
    user_id: '420000199704167773',
    areacode: 758423,
    house_size: 95,
    shops_type: '餐饮小吃',
    address: '宁夏回族自治区 吴忠市',
    title: '构商红',
    id: '21000019970512790X',
    house_type: '三室两厅',
    images:
        [ 'http://dummyimage.com/\'100x100\'/f279bf&text=Nancy Lopez',
            'http://dummyimage.com/\'100x100\'/79e2f2&text=Edward Rodriguez',
            'http://dummyimage.com/\'100x100\'/f2de79&text=Melissa Garcia',
            'http://dummyimage.com/\'100x100\'/ba79f2&text=Ronald Taylor',
            'http://dummyimage.com/\'100x100\'/79f297&text=George Thompson' ],
    rental_form: '单间',
    money_type: '押一付三',
    house_describe: '级维得所声毛行系门论而么处确水出四知。切断支实特近完往整形法而须起包应学。民低本认儿天团除两满劳记易加。万各身长式通面外造直果完使。路至派调系直飞具表素第称治马。办图称老又华半化清集美气石整再。',
    is_delete: 0,
    update_time: '2000-56-02 03:56',
    qq: 1340203338 },
    { citycode: 980477,
        contacts: 'Anthony Wilson',
        house_configure: '独卫、空调、冰箱',
        agent: 0,
        create_time: '2002-03-25 11:03',
        sort_id: 2890,
        telphone: 16998375588,
        delete_time: '1987-14-18 11:14',
        price: 7496,
        user_id: '220000198211306980',
        areacode: 523007,
        house_size: 229,
        shops_type: '餐饮小吃',
        address: '浙江省 丽水市',
        title: '切完难华快给个采片京此收调集许部白因力',
        id: '420000198304161423',
        house_type: '三室两厅',
        images: [ 'http://dummyimage.com/\'100x100\'/f2797e&text=Christopher White' ],
        rental_form: '单间',
        money_type: '押一付三',
        house_describe: '流象身要最团采准起亲活元级月交离己等。只照易权图他还万布感关论构们军时。步较可听更共得生开本集严用况府。法都资商及许做会果需权习年全。按并命广是历安机天调山权话细。能众目清但要没现候己者资选之指半。研县些出必切华全安立龙法况近斯头细清。',
        is_delete: 0,
        update_time: '1999-43-18 01:43',
        qq: 4042644967 },
    { citycode: 572144,
        contacts: 'Elizabeth Lee',
        house_configure: '独卫、空调、冰箱',
        agent: 0,
        create_time: '1973-19-21 03:19',
        sort_id: 2127,
        telphone: 16239868831,
        delete_time: '1981-49-17 03:49',
        price: 9928,
        user_id: '450000199210084922',
        areacode: 200172,
        house_size: 262,
        shops_type: '餐饮小吃',
        address: '河北省 沧州市',
        title: '月治置况么市社去性例油小因',
        id: '140000199103193135',
        house_type: '三室两厅',
        images:
            [ 'http://dummyimage.com/\'100x100\'/79a1f2&text=Brenda Miller',
                'http://dummyimage.com/\'100x100\'/c4f279&text=Jessica Williams',
                'http://dummyimage.com/\'100x100\'/f279e8&text=Karen Anderson',
                'http://dummyimage.com/\'100x100\'/79f2d9&text=Thomas Allen' ],
        rental_form: '单间',
        money_type: '押一付三',
        house_describe: '斯量转天改种眼他号县是照需取动四他。离这即响路接用知众金义新划义。观力要细查正群式风去识面正很说。天物委原作式王制命进单金素细回。',
        is_delete: 1,
        update_time: '2005-44-28 01:44',
        qq: 4645809399 },
    { citycode: 685989,
        contacts: 'Edward Jackson',
        house_configure: '独卫、空调、冰箱',
        agent: 0,
        create_time: '2004-30-27 08:30',
        sort_id: 1203,
        telphone: 16428459486,
        delete_time: '1987-26-27 07:26',
        price: 36,
        user_id: '140000198106278551',
        areacode: 767496,
        house_size: 30,
        shops_type: '餐饮小吃',
        address: '广西壮族自治区 来宾市',
        title: '车江江时于头低难速知转众各科',
        id: '440000199412241437',
        house_type: '三室两厅',
        images:
            [ 'http://dummyimage.com/\'100x100\'/f2b579&text=Christopher Thomas',
                'http://dummyimage.com/\'100x100\'/9279f2&text=Laura Thompson',
                'http://dummyimage.com/\'100x100\'/83f279&text=Charles Jones',
                'http://dummyimage.com/\'100x100\'/f279a6&text=Brian Anderson',
                'http://dummyimage.com/\'100x100\'/79c9f2&text=Eric Rodriguez' ],
        rental_form: '单间',
        money_type: '押一付三',
        house_describe: '新理即复书务各信整就儿严会放整。再府量二从养油论称称离知严六常部。广最地则拉表用种新三经书节。听拉必现律西织变许多专花积保便别中。家面究务手下研路报然方质。龙验后市压持律想那至对社为和可太。',
        is_delete: 0,
        update_time: '2000-43-01 05:43',
        qq: 1586057979 },
    { citycode: 181204,
        contacts: 'Margaret Thompson',
        house_configure: '独卫、空调、冰箱',
        agent: 1,
        create_time: '1995-09-26 00:09',
        sort_id: 2834,
        telphone: 14109500648,
        delete_time: '2003-07-17 02:07',
        price: 4456,
        user_id: '500000200504131325',
        areacode: 362478,
        house_size: 248,
        shops_type: '餐饮小吃',
        address: '湖北省 咸宁市',
        title: '拉证花张地指团建米',
        id: '620000197501238330',
        house_type: '三室两厅',
        images:
            [ 'http://dummyimage.com/\'100x100\'/edf279&text=Jason Harris',
                'http://dummyimage.com/\'100x100\'/d379f2&text=Jose Garcia',
                'http://dummyimage.com/\'100x100\'/79f2b0&text=Kevin Jones',
                'http://dummyimage.com/\'100x100\'/f28d79&text=Kenneth Clark' ],
        rental_form: '单间',
        money_type: '押一付三',
        house_describe: '月较规平史干专土光温多起展劳立向务。说除小元厂容其第如究争调。共反只不决同由开相战界金节而织组干七。到事名便界代交取值法生习七用海。还济转很方山少织一太再格热。得元直问劳于光调话多做拉美海。且确间统取快以半中青快件此。',
        is_delete: 1,
        update_time: '1980-45-01 00:45',
        qq: 513729804 }]