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

export const getHouseList = (params, list) =>{

    params.page = parseInt(list.data.length/10)+1;
    list.isEnd = false;

    return (dispatch)=>{
        Http.get(Ip+'api/house', params)
            .then((res)=>{
                console.log(list);
                console.log(res);
                console.log(typeof (res.length));
                if(res.length<10){
                    console.log('到底了哦!');
                    list.isEnd = true;
                    list.data = list.data.concat(res);
                }else{
                    list.data = list.data.concat(res);
                }

                dispatch({
                    type: actionTypes.GET_HOUSE_LIST,
                    data: {
                        params: list.params,
                        data : list.data,
                        isEnd: list.isEnd,
                    },
                })
            })
    }

};

let filter = {
    params: {},
    showAreaModel: false,
    showPriceModel: false,
    ShowSortModel: false,
    showOtherModel: false,
};

export const changeFilter = (data)=>{

    if(typeof(data) == 'string'){
        filter[data] = !filter[data];
    }else{
        filter['params'] = data;
    }

    return {
        type: actionTypes.FILTER,
        data: filter,
    }
};


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