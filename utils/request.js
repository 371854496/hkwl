/**
 * @desc    API请求接口类封装
 * @author  andy
 * @date    2017-01-20
 */
<<<<<<< HEAD
<<<<<<< HEAD
const testapi = 'https://testapi.apimei.com/ccoktv/';
const onlineapi = "http://192.168.199.171:8080/";
const zsapi ="https://okapi.meisaas.com/";
const requestApiUrl = zsapi ;
=======
const bdapi = 'http://3hx5qn.natappfree.cc/';
const testapi = 'https://testapi.apimei.com/';
const onlineapi = "https://api.meisaas.com/";
const requestApiUrl =onlineapi;
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
const testapi = 'https://testapi.apimei.com/';
const onlineapi = "https://api.meisaas.com/";
const requestApiUrl = onlineapi;
>>>>>>> parent of d5405ec... jy

/**
 * POST请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function doPost(urlPath, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(urlPath, params, 'POST', sourceObj, successFun, failFun, completeFun)
}

/**
 * GET请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function doGet(urlPath, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(urlPath, params, 'GET', sourceObj, successFun, failFun, completeFun)
}

/**
 * 请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {String}   method      请求类型
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestApi(urlPath, params, method, successFun, failFun, completeFun) {
  if (method == 'POST') {
    var contentType = 'application/x-www-form-urlencoded'
  } else {
    var contentType = 'application/json'
  }
  var url = requestApiUrl + urlPath;
  wx.request({
    url: url,
    method: method,
    data: params,
    header: { 'Content-Type': contentType },
    success: function (res) {
      typeof successFun == 'function' && successFun(res.data)
    },
    fail: function (res) {
      typeof failFun == 'function' && failFun(res.data)
    },
    complete: function (res) {
      typeof completeFun == 'function' && completeFun(res.data)
    }
  })
}

module.exports = {
  doPost,
  doGet
}
