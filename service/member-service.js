var app = getApp();
var Promise = require("../utils/es6-promise.min.js");
var memberService = {
  userinfo: function (that) {

    var urlPath = "api/member/get";
    var params = new Object();
    params.appid = app.appId;
    params.openid = app.openId;
    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath, params, res => {
       resolve(res);
    }, res => { }, res => { });
    });

  }
}
module.exports = memberService;