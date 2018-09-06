var app = getApp();
var reservationService = {
  add: function (that, reservation) {
    var urlPath="api/reservation/add";
    var params={};
    app.request.doPost(urlPath,params,res=>{

    },res=>{},res={});
  },
  list: function (that) {
    var urlPath = "api/reservation/list";
    var params = {};
    app.request.doPost(urlPath, params, res => {

    }, res => { }, res = {});
  },
  cancel: function (that) {
    var urlPath = "api/reservation/cancel";
    var params = {};
    app.request.doPost(urlPath, params, res => {

    }, res => { }, res = {});
  }

};
module.exports = reservationService;