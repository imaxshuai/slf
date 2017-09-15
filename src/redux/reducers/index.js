import { combineReducers } from 'redux';

import { user } from './user';
import { navReducer } from './nav';
export const appReducer = combineReducers({
    user: user,
    nav: navReducer,
});

