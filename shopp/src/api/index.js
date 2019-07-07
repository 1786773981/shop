// 引入组件
import axios from 'axios'
import qs from 'qs'


//2.全局配置（后期请求接口，实际请求地址 baseURL + url）
axios.defaults.baseURL = 'http://118.31.9.103'


//首页商品列表接口
export const goodsIndexApi = (apiParams) => { 
    return axios({
        method: 'get',
        url: '/api/goods/index',
        params: apiParams//apiParams这个对象里面的键是动态的还是固定的，根据接口文档
    }).then(res => res.data)
}

//加入购物车接口
export const cartCreateApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/cart/create',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//购物车列表接口
export const cartIndexApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/cart/index',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//修改购物车接口
export const cartEditApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/cart/edit',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//收货地址列表接口
export const addressIndexApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/address/index',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//默认收货地址接口
export const defaultAddressApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/address/defaultAddress',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//创建订单接口
export const orderCreateApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/order/create',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//订单详情接口
export const orderDetailApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/order/detail',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}

//登录接口
export const loginLoginApi = (apiParams) => {
    return axios({
        method: 'post',
        url: '/api/login/login',
        data: qs.stringify(apiParams)
    }).then(res => res.data)
}