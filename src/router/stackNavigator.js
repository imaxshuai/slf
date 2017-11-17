import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions, } from 'react-navigation';

//安卓push路由跳转效果
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


import { TabRouter, RepleaseTab } from './tabNavgator';
import Login from '../containers/user/login';
import Register from '../containers/user/register';
import { ClassifyList } from '../containers/replease/classifyList';
import { SwiperList } from '../containers/home/swiper';
import { ModalList } from '../containers/home/modal';
import { Search } from '../containers/search/search';
import Provnces from '../containers/home/city/index';
import CityList from '../containers/home/city/cityList';

import UserCollection from '../containers/user/collection';
import UserSetting from '../containers/user/setting';

//房产租售
import { HouseClassify } from '../containers/home/classify/house/index';
import HouseList from '../containers/home/classify/house/list';
import HouseDetail from '../containers/home/classify/house/detail';

import { Replease1to1 } from '../containers/replease/house/xflp';
import { Replease1to2 } from '../containers/replease/house/esf';
import { Replease1to3 } from '../containers/replease/house/fwcz';
import { Replease1to4 } from '../containers/replease/house/dzrz';
import { Replease1to5 } from '../containers/replease/house/spcz';
import { Replease1to6 } from '../containers/replease/house/spcs';
import { Replease1to7 } from '../containers/replease/house/spzr';
import { Replease1to8 } from '../containers/replease/house/xzlcz';
import { Replease1to9 } from '../containers/replease/house/xzlcs';
import { Replease1to10 } from '../containers/replease/house/cfck';
import { Replease1to11 } from '../containers/replease/house/tdnz';
import { Replease1to12 } from '../containers/replease/house/cw';

//同城二手
import { EsClassify } from '../containers/home/classify/es/index';
import EsList from '../containers/home/classify/es/list';
import EsDetail from '../containers/home/classify/es/detail';

import { Replease4to1 } from '../containers/replease/es/sj';
import { Replease4to2 } from '../containers/replease/es/sjpj';
import { Replease4to3 } from '../containers/replease/es/bjbdn';
import { Replease4to4 } from '../containers/replease/es/tsjdn';
import { Replease4to5 } from '../containers/replease/es/pbdn';
import { Replease4to6 } from '../containers/replease/es/smcp';
import { Replease4to7 } from '../containers/replease/es/xj';
import { Replease4to8 } from '../containers/replease/es/jydq';
import { Replease4to9 } from '../containers/replease/es/jyjj';
import { Replease4to10 } from '../containers/replease/es/rybh';
import { Replease4to11 } from '../containers/replease/es/myyp';
import { Replease4to12 } from '../containers/replease/es/mrhf';
import { Replease4to13 } from '../containers/replease/es/ss';
import { Replease4to14 } from '../containers/replease/es/fsxb';
import { Replease4to15 } from '../containers/replease/es/yssc';
import { Replease4to16 } from '../containers/replease/es/zxc';
import { Replease4to17 } from '../containers/replease/es/tsyx';
import { Replease4to18 } from '../containers/replease/es/hwwt';
import { Replease4to19 } from '../containers/replease/es/bgjj';
import { Replease4to20 } from '../containers/replease/es/bgyp';
import { Replease4to21 } from '../containers/replease/es/nlmwy';

//二手车
import { EscClassify } from '../containers/home/classify/esc/index';
import EscList from '../containers/home/classify/esc/list';
import EscDetail from '../containers/home/classify/esc/detail';
import { Replease5to1 } from '../containers/replease/esc/esc';
import { Replease5to2 } from '../containers/replease/esc/esc2';
import { Replease5to3 } from '../containers/replease/esc/esc3';

//商业服务
import { BusinessClassify } from '../containers/home/classify/business/index';
import BusinessList from '../containers/home/classify/business/list';
import BusinessDetail from '../containers/home/classify/business/detail';
import { Replease3to1 } from '../containers/replease/business/business';

//生活服务
import { LifeClassify } from '../containers/home/classify/life/index';
import LifeList from '../containers/home/classify/life/list';
import LifeDetail from '../containers/home/classify/life/detail';
import { Replease6to1 } from '../containers/replease/life/life';

//汽车服务
import { CarServerClassify } from '../containers/home/classify/carServer/index';
import CarServerList from '../containers/home/classify/carServer/list';
import CarServerDetail from '../containers/home/classify/carServer/detail';
import { Replease9to1 } from '../containers/replease/carServer/carServer';

//旧物回收
import { RecoveryClassify } from '../containers/home/classify/recovery/index';
import RecoveryList from '../containers/home/classify/recovery/list';
import RecoveryDetail from '../containers/home/classify/recovery/detail';
import { Replease10to1 } from '../containers/replease/recovery/recovery';

//票卡
import { TicketClassify } from '../containers/home/classify/ticket/index';
import TicketList from '../containers/home/classify/ticket/list';
import TicketDetail from '../containers/home/classify/ticket/detail';
import { Replease11to1 } from '../containers/replease/ticket/ticket';

//连锁加盟
import { ChainClassify } from '../containers/home/classify/chain/index';
import ChainList from '../containers/home/classify/chain/list';
import ChainDetail from '../containers/home/classify/chain/detail';
import { Replease12to1 } from '../containers/replease/chain/chain';

//教育培训
import { TrainClassify } from '../containers/home/classify/train/index';
import TrainList from '../containers/home/classify/train/list';
import TrainDetail from '../containers/home/classify/train/detail';
import { Replease7to1 } from '../containers/replease/train/train';

//宠物
import { PetClassify } from '../containers/home/classify/pet/index';
import PetList from '../containers/home/classify/pet/list';
import PetDetail from '../containers/home/classify/pet/detail';
import { Replease8to1 } from '../containers/replease/pet/pet';
import { Replease8to2 } from '../containers/replease/pet/pet2';

//宠物
import { JobClassify } from '../containers/home/classify/job/index';
import JobList from '../containers/home/classify/job/list';
import JobDetail from '../containers/home/classify/job/detail';
import {JobsDetail} from '../containers/home/classify/jobs/detail';
import { Replease2to1 } from '../containers/replease/job/job';


export const AppNavigator = StackNavigator({
    Main: { screen: TabRouter, },
    Provnces: { screen: Provnces,},
    CityList: { screen: CityList,},
    Login: { screen: Login,},
    Register: { screen: Register,},
    ClassifyList: { screen: ClassifyList,},
    SwiperList: { screen: SwiperList,},
    ModalList: { screen: ModalList,},
    Search: { screen: Search, },
    UserReplease: {
        screen: RepleaseTab,
        navigationOptions: {
            headerTitle: '我的发布',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleStyle: {
                fontSize: 16,
            },
            headerTintColor: '#333',
        }
    },
    UserCollection: {screen: UserCollection,},
    UserSetting: {screen: UserSetting,},

    HouseClassify: { screen: HouseClassify},
    HouseList: {screen: HouseList},
    HouseDetail: {screen: HouseDetail},
    Replease1to1: {screen: Replease1to1},
    Replease1to2: {screen: Replease1to2},
    Replease1to3: {screen: Replease1to3},
    Replease1to4: {screen: Replease1to4},
    Replease1to5: {screen: Replease1to5},
    Replease1to6: {screen: Replease1to6},
    Replease1to7: {screen: Replease1to7},
    Replease1to8: {screen: Replease1to8},
    Replease1to9: {screen: Replease1to9},
    Replease1to10: {screen: Replease1to10},
    Replease1to11: {screen: Replease1to11},
    Replease1to12: {screen: Replease1to12},

    EsClassify: { screen: EsClassify},
    EsList: {screen: EsList},
    EsDetail: {screen: EsDetail},
    Replease4to1: {screen: Replease4to1},
    Replease4to2: {screen: Replease4to2},
    Replease4to3: {screen: Replease4to3},
    Replease4to4: {screen: Replease4to4},
    Replease4to5: {screen: Replease4to5},
    Replease4to6: {screen: Replease4to6},
    Replease4to7: {screen: Replease4to7},
    Replease4to8: {screen: Replease4to8},
    Replease4to9: {screen: Replease4to9},
    Replease4to10: {screen: Replease4to10},
    Replease4to11: {screen: Replease4to11},
    Replease4to12: {screen: Replease4to12},
    Replease4to13: {screen: Replease4to13},
    Replease4to14: {screen: Replease4to14},
    Replease4to15: {screen: Replease4to15},
    Replease4to16: {screen: Replease4to16},
    Replease4to17: {screen: Replease4to17},
    Replease4to18: {screen: Replease4to18},
    Replease4to19: {screen: Replease4to19},
    Replease4to20: {screen: Replease4to20},
    Replease4to21: {screen: Replease4to21},

    EscClassify: { screen: EscClassify},
    EscList: {screen: EscList},
    EscDetail: {screen: EscDetail},
    Replease5to1: {screen: Replease5to1},
    Replease5to2: {screen: Replease5to1},
    Replease5to3: {screen: Replease5to2},
    Replease5to4: {screen: Replease5to2},
    Replease5to5: {screen: Replease5to1},
    Replease5to6: {screen: Replease5to1},
    Replease5to7: {screen: Replease5to3},

    BusinessClassify: { screen: BusinessClassify},
    BusinessList: {screen: BusinessList},
    BusinessDetail: {screen: BusinessDetail},
    Replease3to1: {screen: Replease3to1},
    Replease3to2: {screen: Replease3to1},
    Replease3to3: {screen: Replease3to1},
    Replease3to4: {screen: Replease3to1},
    Replease3to5: {screen: Replease3to1},
    Replease3to6: {screen: Replease3to1},
    Replease3to7: {screen: Replease3to1},
    Replease3to8: {screen: Replease3to1},
    Replease3to9: {screen: Replease3to1},
    Replease3to10: {screen: Replease3to1},
    Replease3to11: {screen: Replease3to1},
    Replease3to12: {screen: Replease3to1},
    Replease3to13: {screen: Replease3to1},
    Replease3to14: {screen: Replease3to1},
    Replease3to15: {screen: Replease3to1},
    Replease3to16: {screen: Replease3to1},
    Replease3to17: {screen: Replease3to1},
    Replease3to18: {screen: Replease3to1},
    Replease3to19: {screen: Replease3to1},
    Replease3to20: {screen: Replease3to1},

    LifeClassify: { screen: LifeClassify},
    LifeList: {screen: LifeList},
    LifeDetail: {screen: LifeDetail},
    Replease6to1: {screen: Replease6to1},
    Replease6to2: {screen: Replease6to1},
    Replease6to3: {screen: Replease6to1},
    Replease6to4: {screen: Replease6to1},
    Replease6to5: {screen: Replease6to1},
    Replease6to6: {screen: Replease6to1},
    Replease6to7: {screen: Replease6to1},
    Replease6to8: {screen: Replease6to1},
    Replease6to9: {screen: Replease6to1},
    Replease6to10: {screen: Replease6to1},
    Replease6to11: {screen: Replease6to1},
    Replease6to12: {screen: Replease6to1},
    Replease6to13: {screen: Replease6to1},
    Replease6to14: {screen: Replease6to1},
    Replease6to15: {screen: Replease6to1},
    Replease6to16: {screen: Replease6to1},
    Replease6to17: {screen: Replease6to1},
    Replease6to18: {screen: Replease6to1},
    Replease6to19: {screen: Replease6to1},
    Replease6to20: {screen: Replease6to1},
    Replease6to21: {screen: Replease6to1},

    CarServerClassify: { screen: CarServerClassify},
    CarServerList: {screen: CarServerList},
    CarServerDetail: {screen: CarServerDetail},
    Replease9to1: {screen: Replease9to1},
    Replease9to2: {screen: Replease9to1},
    Replease9to3: {screen: Replease9to1},
    Replease9to4: {screen: Replease9to1},
    Replease9to5: {screen: Replease9to1},

    RecoveryClassify: { screen: RecoveryClassify},
    RecoveryList: {screen: RecoveryList},
    RecoveryDetail: {screen: RecoveryDetail},
    Replease10to1: {screen: Replease10to1},

    TicketClassify: { screen: TicketClassify},
    TicketList: {screen: TicketList},
    TicketDetail: {screen: TicketDetail},
    Replease11to1: {screen: Replease11to1},

    ChainClassify: { screen: ChainClassify},
    ChainList: {screen: ChainList},
    ChainDetail: {screen: ChainDetail},
    Replease12to1: {screen: Replease12to1},

    TrainClassify: { screen: TrainClassify},
    TrainList: {screen: TrainList},
    TrainDetail: {screen: TrainDetail},
    Replease7to1: {screen: Replease7to1},

    PetClassify: { screen: PetClassify},
    PetList: {screen: PetList},
    PetDetail: {screen: PetDetail},
    Replease8to1: {screen: Replease8to1},
    Replease8to2: {screen: Replease8to1},
    Replease8to3: {screen: Replease8to2},
    Replease8to4: {screen: Replease8to2},

    JobClassify: { screen: JobClassify},
    JobList: {screen: JobList},
    JobDetail: {screen: JobDetail},
    JobsDetail: {screen: JobsDetail},
    Replease2to1: {screen: Replease2to1},
    Replease2to2: {screen: Replease2to1},
    Replease2to3: {screen: Replease2to1},
    Replease2to4: {screen: Replease2to1},
    Replease2to5: {screen: Replease2to1},
    Replease2to6: {screen: Replease2to1},
    Replease2to7: {screen: Replease2to1},
    Replease2to8: {screen: Replease2to1},
    Replease2to9: {screen: Replease2to1},
    Replease2to10: {screen: Replease2to1},
    Replease2to11: {screen: Replease2to1},
    Replease2to12: {screen: Replease2to1},
    Replease2to13: {screen: Replease2to1},
    Replease2to14: {screen: Replease2to1},
    Replease2to15: {screen: Replease2to1},
    Replease2to16: {screen: Replease2to1},
    Replease2to17: {screen: Replease2to1},
    Replease2to18: {screen: Replease2to1},
    Replease2to19: {screen: Replease2to1},
    Replease2to20: {screen: Replease2to1},
    Replease2to21: {screen: Replease2to1},
    Replease2to22: {screen: Replease2to1},
    Replease2to23: {screen: Replease2to1},
    Replease2to24: {screen: Replease2to1},
    Replease2to25: {screen: Replease2to1},
    Replease2to26: {screen: Replease2to1},
    Replease2to27: {screen: Replease2to1},


},{
    headerMode: 'screen',
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    })
});


const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);