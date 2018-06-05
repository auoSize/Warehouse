/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let dev = 1;
let baseUrl = dev ? 'http://napi.5fdl.com' : 'http://www.lvju.com';
let routerMode = 'hash';
let imgBaseUrl;

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}
