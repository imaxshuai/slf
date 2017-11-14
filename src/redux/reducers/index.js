import { combineReducers } from 'redux';

import { citys, user, myReplease, myRepleaseAuditing, myCollection } from './user';
import { navReducer } from './nav';
import { sort, house, houseList, filter } from './sort';


export const appReducer = combineReducers({

    nav: navReducer,
    citys: citys,
    sort: sort,
    filter: filter,

    houseList: houseList,
    house: house,

    user: user,
    myReplease: myReplease,
    myRepleaseAuditing: myRepleaseAuditing,
    myCollection: myCollection,

});

