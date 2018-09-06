var itemService = require("../../service/item-service.js");
var favoriteService = require("../../service/favorite-service.js");
var Session=require("../../utils/session.js");
var WxParse = require('../../wxParse/wxParse.js');
var orderService=require('../../service/order-service.js');
Page({
  data: {
<<<<<<< HEAD
<<<<<<< HEAD
    detail:{},
    article:'',
=======
=======
>>>>>>> parent of d5405ec... jy
     tabs: ["项目详情"],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
<<<<<<< HEAD
    isIpx: getApp().globalData.isIpx
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
<<<<<<< HEAD
<<<<<<< HEAD
    var artid = options.itemid;
    if (artid != null) {    
      articleService.get(this, options.itemid, WxParse)
=======
    var itemId = options.itemid;
    console.log("1111",itemId)
=======
    var itemId = options.itemid;
>>>>>>> parent of d5405ec... jy
    if (itemId != null) {
      this.setData({ itemId: options.itemid })
      itemService.detail(that).then((res)=>{
        that.setData({
          itemDetail: res.data.item,
          itempicture: res.data.itempicture,
          skuprice:res.data.item.price
        });
        WxParse.wxParse('article', 'html', res.data.item.description, that, 5)
        wx.setNavigationBarTitle({
          title: res.data.item.title
        })
      });
<<<<<<< HEAD
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
  onShareAppMessage: function () {
    var article_id = wx.getStorageSync('current_article_id');
    var path = '/pages/article/article?article_id=' + article_id + '';
    return {
      title: article_title,
      path: path
    }
=======
  bindCallPhoneTab: function (e) {
    wx.getStorage({
      key: 'appotel',
      success: function (res) {
        if (!res.data){
          wx.showModal({
            title: '信息不完整',
            content: '商家未填号码',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
      }else{
          wx.makePhoneCall({
            phoneNumber: res.data
          })
      }
      }
    })
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
  bindMinusTab:function(e)
  {
    var that = this;
    var buynum = that.data.buynum;
    if (buynum > 1)
      that.setData({ buynum: buynum - 1 });
>>>>>>> parent of d5405ec... jy
  },
  bindPlusTab:function(e)
  {
    var that = this;
    var buynum = that.data.buynum;
    that.setData({ buynum: buynum + 1 });
  },
  bindCallPhoneTab:function(e)
  {
     wx.makePhoneCall({
       phoneNumber: '028-86784972 '
     })
  },
  appointmentTab: function () {
    if (this.data.itemDetail.itemtype==1){
     wx.showToast({
       title: '该产品不能预约',
       icon: 'loading',
       duration: 2000
     })
   }else{
   wx.navigateTo({
     url: '../appointment/index?itemid=' + this.data.itemDetail.id
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of d5405ec... jy
  },
  bindPayNow(e){
    orderService.create(this)
    
  },
<<<<<<< HEAD
  globalData: {
    userInfo: null,
    cateid: '',
    userInfoBol: true,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    bindBol: true,
    isIpx: wx.getSystemInfoSync().model == 'iPhone X' ? true : false
  }
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
})