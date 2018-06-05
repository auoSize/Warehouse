import {
    baseUrl
} from './env'
import $ from 'jquery';

export const ajax =  (url = '', data = {}, type = 'GET') => {
    url = baseUrl + url;
    return $.ajax({
        url: url,
        type: type,
        data: data,
        dataType: 'json'
    }).then(function (resp) {
// 成功回调
        if (resp.resp_code == 1) {
            return resp; // 直接返回要处理的数据，作为默认参数传入之后done()方法的回调
        }
    }, function (err) {
// 失败回调
        console.log(err.status); // 打印状态码
    });
}
