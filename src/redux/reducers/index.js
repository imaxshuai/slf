import { combineReducers } from 'redux';

import { user } from './user';
import { navReducer } from './nav';
import { classify } from './classify';
import { classifyMore } from './classify';


export const appReducer = combineReducers({
    user: user,
    nav: navReducer,
    classify: classify,
    classifyMore: classifyMore,
});

