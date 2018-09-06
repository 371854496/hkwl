var app = getApp();
var swiperService = {
  list: function (that) {
    var urlPath = "api/swiper/list"
    var params = { appid: app.appId };
    app.request.doPost(urlPath, params, res => {
      that.setData({
        banners: res.data
      });
    }, res => { }, res => { });
  }
}
module.exports = swiperService;