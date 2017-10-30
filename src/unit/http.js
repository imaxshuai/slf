let Http = {};

/*
* GET 请求
* @param params {} 包装
* @param headers
* @return { Promise }
* */

Http.get = (url, params, headers) => {

    if(params){
        let paramsArray = [];
        //过去params苏偶偶的KEY
        let paramsKeyArray = Object.keys(params);
        // 通过 forEach 方法拿到数组中每个元素,将元素与参数的值进行拼接处理,并且放入 paramsArray 中
        paramsKeyArray.forEach(key => {
            return paramsArray.push((key+ '=' + params[key]));
        });

        //网络拼接
        if(url.search(/\?/) === -1){
            url += '?' + paramsArray.join('&');
        }else{
            url += paramsArray.join('&');
        }
    }

    return new Promise(function(resolve, reject){

        console.log('请求地址：--------------------------');
        console.log(url);
        fetch (url, {
            method: 'GET',
            headers: headers
        })
            .then((response) => response.json())
            .then((response)=>resolve(response))
            .catch((error) => {
                console.log(error);
                alert('数据连接失败');
                reject({status: -1})
            })
            .done();
    })

};

/**
 *
 * POST请求
 *
 * @param url
 * @param params {}包装
 * @param headers
 *
 * @return {Promise}
 *
 * */
Http.post = (url, params, headers) => {
    if (params) {
        // 初始化FormData
        var formData = JSON.stringify(params);
    }

    return new Promise(function (resolve, reject) {

        console.log('请求地址：--------------------------');
        console.log(url);
        console.log(formData);

        fetch(url, {
            method:'POST',
            headers:headers,
            body:formData,
        })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                alert('数据连接失败');
                reject({status:-1})
            })
            .done();
    })
};

//url：params对象包含图片本地路径path
Http.uploadImage =(url, params)=> {
    return new Promise(function (resolve, reject) {
        var ary = params.path.split('/');
        console.log('2222222' + ary);
        //设置formData数据
        let formData = new FormData();
        let file = {uri: params.path, type: 'multipart/form-data', name: ary[ary.length-1]};
        formData.append("file", file);
        //fetch post请求
        fetch('http://www.hotcc.cn:3000' + url, {
            method: 'POST',
            //设置请求头，请求体为json格式，identity为未压缩
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'identity'
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json())
            .then((responseData)=> {
                console.log('uploadImage', responseData);
                resolve(responseData);
            })
            .catch((err)=> {
                console.log('err', err);
                reject(err);
            });
    });
};



global.Http = Http;