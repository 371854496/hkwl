const requestApi = require('../utils/request.js')
var appService = {
  appId:"wx5438ca4497ac8dd7",
  openId:"oK3_30CaRZliN8V2JKt0s_P10Up8",
  request: requestApi,
  userLogin: function (that,appId) {
    var parent=this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var urlPath = "api/weixin/login";
        var params = { appid: appId, jscode: res.code };
        console.log('微信登陆！', res)
         requestApi.doPost(urlPath, params,
          res=> {
            
            var sessionId=res.data?res.data.sessionid:'';
            var openId = res.data?res.data.openid:'';
             console.log('openid',openId)
            wx.setStorageSync('sessionid', sessionId);
            wx.setStorageSync("openid", openId);

            parent.getUserInfo(that,appId,openId);
            
           }, res=> {
             
            }, res=> { });
      },
      fail:function(erro) {
        console.log('denglu 失败',erro)
      },
    })
  },
  getUserInfo: function (that,appId,openId) {
    var parent=this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          parent.wxaGetUserInfo(that,appId,openId);
        }
        else
        {
          parent.wxaGetUserInfo(that, appId, openId);
        }
      }
    })
  },
  wxaGetUserInfo:function(that,appId,openId)
  {
    wx.getUserInfo({
      withCredentials: true,
      lang: "zh_CN",
      success: res => {
        // 可以将 res 发送给后台解码出 unionId(第三方开发者绑定)
        var userInfo = res.userInfo;
        var urlPath = "/api/weixin/userinfo";
        var params = {
          appid: appId,
          openid: openId,
          rawData: res.rawData,
          signature: res.signature,
          encryptedData: res.encryptedData,
          iv: res.iv
        };
        requestApi.doPost(urlPath, params,
          res => {
            that.globalData.userInfo = userInfo;
          }, res => { }, res => { });

        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (that.userInfoReadyCallback) {
          that.userInfoReadyCallback(res)
        }
      }
    })
  },
  loginLog: function (that, appId){

  }

}
module.exports = appService;