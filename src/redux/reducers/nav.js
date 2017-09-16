import { AppNavigator } from '../../router/stackNavigator';

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

export const navReducer = (state, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};