import { combineReducers } from 'redux';

import { user } from './user';
import { navReducer } from './nav';
import { classify } from './classify';
export const appReducer = combineReducers({
    user: user,
    nav: navReducer,
    classify: classify
});

