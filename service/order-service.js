var app = getApp();
var orderService = {
  list: function (that) {
    var urlPath = "api/order/list";
    var params = {
      appid: app.appId,
      pageindex: that.data.pageIndex,
      pagesize: that.data.pageSize,
      status: that.data.activeIndex
    }
    app.request.doPost(urlPath, params, function (res) {
      that.setData({
        orders: res.data
      })
    }, function (res) {

    }, function (res) {

    })
  },
  cancel: function (that) {

  },
<<<<<<< HEAD

<<<<<<< HEAD
  create(that, params) {
    let urlPath = 'api/order/createserve';
    params = Object.assign({}, params, { appid: app.appId, openid: wx.getStorageSync('openid'), secret: app.secret })
=======
 create(that, params) {
    let urlPath = 'api/order/createserve';
    params = Object.assign({}, params, { appid: app.appId, openid: wx.getStorageSync('openid'),})
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
    app.request.doPost(urlPath, params, function (res) {
=======
  create(that) {
    let urlPath = 'api/order/create';
    let params = {
      appid: app.appId,
      openid: wx.getStorageSync('openid'),
      amount: that.data.item.price * that.data.item.num,//当前页面的产品单价*1
      remark:'',
      itemid:that.data.itemId,//当前页面的itemid
      ordertype:2,
      
    };
    app.request.doPost(urlPath,params,function(res){
>>>>>>> parent of d5405ec... jy
      console.log(res)
      let code = res.result
      if(code=='1') {
        //发起微信支付的代码
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package:res.data.package,
          signType:res.data.signType,
          paySign:res.data.paySign,
          success: function (res) {
            // success
            wx.navigateBack({
              delta: 2, // 回退前 delta(默认为1) 页面
              success: function (res) {
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 2000
                })
              },
              fail: function () {
                // fail

              },
              complete: function () {
                // complete
              }
            })
          },
          fail: function (res) {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon: 'loading',
<<<<<<< HEAD
          duration: 3000
<<<<<<< HEAD
        })
      }
    })
  }, 

  createvip: function (that) {
    var urlPath = "api/order/createvip";
    var params = {
      appid: app.appId,
      openid: wx.getStorageSync('openid'),
      secret: app.secret,
      amount: that.data.amount,
    
    };
    app.request.doPost(urlPath, params, function (res) {
      console.log(res)
      let code = res.result
      if (code == '1') {
        //发起微信支付的代码
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success: function (res) {
            // success
            wx.navigateBack({
              delta: 2, // 回退前 delta(默认为1) 页面
              success: function (res) {
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 2000
                })
              },
              fail: function () {
                // fail

              },
              complete: function () {
                // complete
              }
            })
          },
          fail: function (res) {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      } else {
        wx.showToast({
          title: '支付失败',
          icon: 'loading',
          duration: 3000
=======
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
          duration: 2000
>>>>>>> parent of d5405ec... jy
        })
      }
    })
  }
}
module.exports = orderService;