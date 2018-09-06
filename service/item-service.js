var app = getApp();
var Promise = require("../utils/es6-promise.min.js");
var itemService = {
  list: function (that) {
    var urlPath = "api/item/list";
    var params = {
      appid: app.appId,
      cateid: that.data.currCateId,
      keywords: that.data.keywords,
      pageindex: that.data.pageIndex,
      pagesize: that.data.pageSize
    };
<<<<<<< HEAD
<<<<<<< HEAD
    if (createtime){
      params.createtime = createtime;
   }
=======
    console.log("33333",params.pageindex)
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
    app.request.doPost(urlPath, params, res => {
      if (res.data != null) {
        //console.log(res.data)
        let temp = that.data.shopInfo

        if (that.data.pageindex == 0){
          temp.shopList = res.data;
        }
        
        else{
          temp.shopList = temp.shopList.concat(res.data);
        }
        that.setData({ shopInfo: temp });
         
      }
    }, res => { }, res => {  });
  },
  recommend:function(that)
  {
    var urlPath = "api/item/recommend";
    var params = { appid: app.appId };
    app.request.doPost(urlPath, params, res => {
      that.setData({
        itemRecommends: res.data
      })
    }, res => { }, res => {
      if (that.data.isRefresh) {
        wx.stopPullDownRefresh;
        that.setData({ isRefresh: false });
      }
    });
  },
  gettop: function (that) {
    var urlPath = "api/item/gettop";
    var params = { appid: app.appId,
     cateid: that.data.currCateId, };
    app.request.doPost(urlPath, params, res => {
      that.setData({
        gettopitem: res.data
      })
    }, res => { }, res => {
      if (that.data.isRefresh) {
        wx.stopPullDownRefresh;
        that.setData({ isRefresh: false });
      }
    });
  },
  aboutus: function (that) {
    var urlPath = "api/company/aboutus";
    var params = {
      appid: app.appId,
   
    };
    app.request.doPost(urlPath, params, res => {
      that.setData({
        aboutusitem: res.data
      })
    }, res => { }, res => {
      if (that.data.isRefresh) {
        wx.stopPullDownRefresh;
        that.setData({ isRefresh: false });
      }
    });
  },
  contact: function (that) {
    var urlPath = "api/company/contact";
    var params = {
      appid: app.appId,
     
    };
    app.request.doPost(urlPath, params, res => {
      that.setData({
        contactitem: res.data
      })
    }, res => { }, res => {
      if (that.data.isRefresh) {
        wx.stopPullDownRefresh;
        that.setData({ isRefresh: false });
      }
    });
  },
  detail: function (that) {
    var urlPath = "api/item/get";
    var params = {
      appid: app.appId,
      itemid: that.data.itemId
    };
    return new Promise(function resolver(resolve, reject) {
    app.request.doPost(urlPath,params,res=> {
       resolve(res);
      },res=>{ }, res=> {})});
  }
};
module.exports = itemService;