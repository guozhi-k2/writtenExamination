/**
 * 工具类js
 */
import { getStore, removeStore, setStore } from '../utils/storage'
//base64加密
import base64 from '../utils/base64'
//年月日时分秒格式化
import dateFormat from '../utils/dateFormat'
//ajax加载蒙版效果
import loading from '../plugins/loading/index'
// serviceUrl 等配置
import config from '../config'
//ajax模块
import { http } from '../utils/request'
//生成指定位数和类型的随机字符串
import key from '../utils/key'
//加载模块
import lazyLoading from '../utils/lazyLoadingComponent'
//正则
import reg from '../utils/reg'
//数据格式为数组
import isArray from '../utils/isArray'
//图片压缩
import compress from '../utils/compress'
//获取url参数
import url from '../utils/url'
//商户入职ur截取
import splitUrl from '../utils/splitUrl'
import Vue from 'vue'

export default {
  init(){
    Vue.prototype.getStore = getStore;
    Vue.prototype.removeStore = removeStore;
    Vue.prototype.setStore = setStore;
    Vue.prototype.$base64 = base64;
    Vue.prototype.$dateFormat = dateFormat;
    Vue.prototype.$loading = loading;
    Vue.prototype.$config = config;
    Vue.prototype.$http = http;
    Vue.prototype.$key = key;
    Vue.prototype.$lazyLoading = lazyLoading;
    Vue.prototype.$reg = reg;
    Vue.prototype.$isArray = isArray;
    Vue.prototype.$compress = compress;
    Vue.prototype.$url = url
    Vue.prototype.$splitUrl = splitUrl
  }
}
