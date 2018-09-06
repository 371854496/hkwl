var app = getApp();
var Promise = require("../utils/es6-promise.min.js");
var favoriteService = {
  list: function (that) {
    var urlPath = "api/favorite/list";
    var params = {
      appid: app.appId,
      openid: app.openId,
      pageindex: that.data.pageIndex,
      pagesize: that.data.pageSize
    }
    app.request.doPost(urlPath, params, res => {
      that.setData({ favorites: null });
    }, res => { }, res => { });
  },
  add:function(that,itemId)
  {
    var urlPath = "api/favorite/add";
    var params = {
      appid: app.appId,
      openid: app.openId,
      itemid: itemId
    }
    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath, params, res => {
      resolve(res);
    }, res => { }, res => { });});
  },
  cancel:function(that,itemId)
  {
    var urlPath = "api/favorite/cancel";
    var params = {
      appid: app.appId,
      openid: app.openId,
      itemid: itemId
    }
    return new Promise(function resolver(resolve, reject) {
      app.request.doPost(urlPath, params, res => {
        resolve(res);
      }, res => { }, res => { });
    });
  },
  focus:function(that,itemId)
  {
    var urlPath = "api/favorite/focus";
    var params = {
      appid: app.appId,
      openid: app.openId,
      itemid: itemId
    }
    app.request.doPost(urlPath, params, res => {
      that.setData({isFocus:res.data==1?true:false});
    }, res => { }, res => { });
  }
};
module.exports = favoriteService;