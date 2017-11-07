import { combineReducers } from 'redux';

import { citys, user, myReplease, myRepleaseAuditing, myCollection } from './user';
import { navReducer } from './nav';
import { classify, sort, houseList } from './sort';
import { classifyMore } from './sort';


export const appReducer = combineReducers({

    nav: navReducer,
    citys: citys,
    sort: sort,

    houseList: houseList,

    user: user,
    myReplease: myReplease,
    myRepleaseAuditing: myRepleaseAuditing,
    myCollection: myCollection,


    classify: classify,
    classifyMore: classifyMore,
});

