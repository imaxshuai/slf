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

export const changeFilter = (data)=>{
    return (dispatch)=>{
        dispatch({
            type: actionTypes.FILTER,
            data: data
        })
    }
}

export const getHouseList = (params, list) =>{

    params.page = parseInt(list.data.length/10)+1;
    list.isEnd = false;
    console.log(params);

    if(params == 'no'){
        return {
            type: actionTypes.GET_HOUSE_LIST,
            data: {data: []},
        }
    }else{
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
    }

};

export const getHouse = (houseId) =>{

    if(houseId=='no'){
        return {
            type: actionTypes.GET_HOUSE,
            data: []
        }
    }else{
        return (dispatch)=>Http.get(Ip+'api/house/'+houseId)
            .then((res)=> {
                dispatch({
                    type: actionTypes.GET_HOUSE,
                    data: res
                })
            })
    }

};
