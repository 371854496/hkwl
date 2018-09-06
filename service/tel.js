const requestApi = require('../utils/request.js')
var telService = {
tel: function (that) {
  var urlPath = "api/company/contact";
  var params = {
    appid: "wx5438ca4497ac8dd7",

  };
  requestApi.doPost(urlPath, params, res => {
   console.log('asd',res);
   wx.setStorageSync("appotel", res.data.mobile);
  }, res => { }, res => {
   
  });
  }
}
module.exports = telService;