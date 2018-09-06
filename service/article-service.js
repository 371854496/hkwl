var app = getApp();
var Promise = require("../utils/es6-promise.min.js");
var articleService = {
  list: function (that) {
    var urlPath = "api/article/list";
    var params = {
      appid: app.appId,
      pageindex: that.data.pageIndex,
      pagesize: that.data.pageSize
    };
    app.request.doPost(urlPath, params, res => {
      that.setData({ articles: res.data });
    }, res => { }, res = {})
  },
  get:function(that,artid)
  {
    var urlPath ="api/company/aboutus";
    var params = {
      appid: app.appId,
      
    };
   
    return new Promise(function resolver(resolve, reject) {
      app.request.doPost(urlPath, params, res => {
        resolve(res);
        console.log(res);
      }, res => { }, res => { })
    });
  }
}
module.exports = articleService;