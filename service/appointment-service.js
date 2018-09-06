var app = getApp();
var appointmentService = {
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
  applist: function (that) {
    var urlPath = "api/appointment/list";
    var params = { 
      appid: app.appId,
      openid: wx.getStorageSync('openid'),
     
      pageindex: that.data.pageIndex,
      pagesize: that.data.pageSize, 
      };
    app.request.doPost(urlPath, params, res => {
      that.setData({
        applist: res.data
      })
    }, res => { }, res => {
      if (that.data.isRefresh) {
        wx.stopPullDownRefresh;
        that.setData({ isRefresh: false });
      }
    });
  },
  create(that,params) {
    let urlPath = 'api/order/createserve';
    params = Object.assign({},params,{appid:app.appId,openid:app.openId})
        app.request.doPost(urlPath, params, function (res) {
                console.log('预约创建！',res)
                      return;
        })
    
      app.request.doPost(urlPath, params, function (res) {
        console.log(res)
        let code = res.result
        if (code == 1) {
           wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
                success: function (res) {
                  wx.showToast({
                    title: '预约成功',
                    icon: 'success',
                    duration: 3000
                  })
                },
             })
           } else {
          wx.showToast({
            title: res.msg,
            icon: 'loading',
            duration: 2000
          })
        }
      })
  }
}
module.exports = appointmentService;