var app = getApp();
var payService = {
  send: function (that) {
    var urlPath="api/payment/send";
    var params={
      appid:app.appId,
      openid:""
    };
    app.request.doPost(urlPath,params,res=>{
      this.startpay(that,res);
    },res=>{},res={});

  },
  startpay: function (that,res) {
    wx.requestPayment({
      timeStamp: res.data.timeStamp,
      nonceStr: res.data.nonceStr,
      package: res.data.package,
      signType: 'MD5',
      paySign: res.data.paySign,
      success: res=> {
          console.log("支付成功");
      },
      fail: res=> {
        console.log(res);
      }
    })
  }

}
module.exports = payService;