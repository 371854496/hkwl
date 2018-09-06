var app = getApp();
var Promise = require("../utils/es6-promise.min.js");
var addressService = {
  default:function(that)
  {
    var urlPath = "api/shippingaddress/default";
    var params = { appid: app.appId, openid: app.openId};
    app.request.doPost(urlPath, params, res => {

    },res=>{},res={});

  },
  detail:function(that,addressId)
  {
    var urlPath = "api/shippingaddress/get"
    var params = { appid: app.appId, openid: app.openId ,addressid:addressId};
    app.request.doPost(urlPath, params, res => {
      var region=[];
      region[0]=res.data.province;
      region[1]=res.data.city;
      region[2]=res.data.county;
      var regionSelect = region.toString().replace(",", " ").replace(",", " ");
      that.setData({ address: res.data, region: region, selectRegion: regionSelect});
    }, res => { }, res => { });
  },
  list: function (that) {
    var result=[];
    var urlPath = "api/shippingaddress/list"
    var params = { appid: app.appId, openid: app.openId };
    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath, params, res => {
      resolve(res.data);
    }, res => { }, res => { });
    });   
  },
  add: function (that, address) {
    var urlPath = "api/shippingaddress/add"
    var params = {
      appid: app.appId,
      openid: app.openId,
      nickname: address.nickname,
      postalcode: address.postalcode,
      province: address.province,
      city: address.city,
      county: address.county,
      detailinfo: address.detailinfo,
      telnumber: address.telnumber
    };
    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath, params, res => {
       resolve(res);
    }, res => { }, res => { });});
  },
  del: function (that,addressId) {
    var urlPath = "api/shippingaddress/del"
    var params = {
      appid: app.appId,
      openid: app.openId,
      addressid: addressId
    };
    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath, params, res => {
       resolve(res);
    }, res => { }, res => { });});
  },
  edit: function (that, address) {
    var urlPath = "api/shippingaddress/edit"
    var params = {
      appid: app.appId,
      openid: app.openId,
      id: address.id,
      nickname: address.nickname,
      postalcode: address.postalcode,
      province: address.province,
      city: address.city,
      county: address.county,
      detailinfo: address.detailinfo,
      telnumber: address.telnumber
    };

    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath, params, res => {
        resolve(res);
    }, res => { return false; }, res => { return true;});});
  }
};
module.exports = addressService;