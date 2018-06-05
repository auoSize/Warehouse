import {ajax} from '../config/ajax'

/**
 * 五福动态接口
 *
 * /index/news/index?category_id=5&page=1
     category_id:分类ID
     page:页码，默认第1页
     page_limit:每页显示条数，默认10条
 */

export const getNews = (data) => ajax('/index/news/index',data);

/**
 * 首页动态接口
 *
 * /index/news/getRecommend
 */
export const getRecommend = () => ajax('/index/news/getRecommend');


export const getArticleh = (data) => ajax('/index/news/article',data);


