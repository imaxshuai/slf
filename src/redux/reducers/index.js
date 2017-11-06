import { combineReducers } from 'redux';

import { citys, user, myReplease, myRepleaseAuditing, myCollection } from './user';
import { navReducer } from './nav';
import { classify } from './classify';
import { classifyMore } from './classify';


export const appReducer = combineReducers({
    citys: citys,
    user: user,
    myReplease: myReplease,
    myRepleaseAuditing: myRepleaseAuditing,
    myCollection: myCollection,
    nav: navReducer,
    classify: classify,
    classifyMore: classifyMore,
});

