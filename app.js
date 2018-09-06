//app.js
const appService = require('./service/app-service.js');
<<<<<<< HEAD
<<<<<<< HEAD
const requestApi = require('./utils/request.js');
const appId = "wx3240e4e7b8592c0b";

const secret = "c596d04c324411e8ac9b246e96522800";
=======
isIpx: wx.getSystemInfoSync().model == 'iPhone X' ? true : false
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
App({
  request: appService.request,
  onLaunch: function () {
    console.log('登录！！')
    appService.userLogin(this, appService.appId);
<<<<<<< HEAD
    telService.tel(this);
<<<<<<< HEAD
  },
  //获取openid,在平台注册。
  userLogin(info) {
    let self = this;
    var urlPath = "api/weixin/login";

    wx.login({
      success(res) {
        var params = { appid: appId, secret: appService.secret, jscode: res.code };
        requestApi.doPost(urlPath, params, data => {
          console.log("openid", data);
          wx.setStorageSync("openid", data.data.openid);
          let userData = {
            appid: appId,
            secret: appService.secret,  
            openid: data.data.openid,
            encryptedData: info.encryptedData,
            iv: info.iv
          };
          console.log(userData);
          var url = "/api/weixin/userinfo";
          requestApi.doPost(url, userData, res => {
            if (res.result == 1) {
              console.log("用户登陆注册成功");
            } else {
              console.log('用户登陆注册失败', res);
            }
          });
        })
      }
    });

  },
  
  onShow() {
    this.globalData.windowHeight = wx.getSystemInfoSync().windowHeight;
    this.globalData.isIpx = wx.getSystemInfoSync().model.indexOf('iPhone X') != -1 ? true : false
    console.log('openid', wx.getSystemInfoSync());
=======
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
  },
  appId: appService.appId,
  openId: wx.getStorageSync('openid'),
  globalData: {
<<<<<<< HEAD
    userInfo: null,
<<<<<<< HEAD
    cateid: '',
    isIpx: false,
    windowHeight: '',
=======
    cateid:'',
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
    userInfo: null
>>>>>>> parent of d5405ec... jy
  }
})  