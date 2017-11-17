import * as actionTypes from '../constants/actionTypes';


export const getHomeList = (params, list) =>{

    params.page = parseInt(list.data.length/10)+1;
    list.isEnd = false;

    if(params == 'no'){
        return {
            type: actionTypes.GET_HOME_LIST,
            data: {data: []},
        }
    }else{
        return (dispatch)=>{
            Http.get(Ip+'api/house', params)
                .then((res)=>{
                    if(res.length<10){
                        list.isEnd = true;
                        list.data = list.data.concat(res);
                    }else{
                        list.data = list.data.concat(res);
                    }

                    dispatch({
                        type: actionTypes.GET_HOME_LIST,
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

export const getHome = (homeId) =>{

    if(homeId=='no'){
        return {
            type: actionTypes.GET_HOME,
            data: []
        }
    }else{
        return (dispatch)=>Http.get(Ip+'api/home/'+homeId)
            .then((res)=> {
                dispatch({
                    type: actionTypes.GET_HOME,
                    data: res
                })
            })
    }

};
