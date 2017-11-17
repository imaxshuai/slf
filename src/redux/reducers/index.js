import { combineReducers } from 'redux';

import { citys, user, myReplease, myRepleaseAuditing, myCollection } from './user';
import { navReducer } from './nav';
import { sort } from './sort';
import { filter } from './filter';
import { home, homeList } from './home';
import { house, houseList } from './house';
import { es, esList } from './es';
import { esc, escList } from './esc';
import { business, businessList } from './business';
import { life, lifeList } from './life';
import { carServer, carServerList } from './carServer';
import { recovery, recoveryList } from './recovery';
import { ticket, ticketList } from './ticket';
import { chain, chainList } from './chain';
import { train, trainList } from './train';
import { pet, petList } from './pet';
import { job, jobList } from './job';


export const appReducer = combineReducers({

    nav: navReducer,
    citys: citys,
    sort: sort,
    filter: filter,

    homeList: homeList,
    home: home,
    houseList: houseList,
    house: house,
    esList: esList,
    es: es,
    escList: escList,
    esc: esc,
    businessList: businessList,
    business: business,
    lifeList: lifeList,
    life: life,
    carServerList: carServerList,
    carServer: carServer,
    recoveryList: recoveryList,
    recovery: recovery,
    ticketList: ticketList,
    ticket: ticket,
    chainList: chainList,
    chain: chain,
    trainList: trainList,
    train: train,
    petList: petList,
    pet: pet,
    jobList: jobList,
    job: job,

    user: user,
    myReplease: myReplease,
    myRepleaseAuditing: myRepleaseAuditing,
    myCollection: myCollection,

});

