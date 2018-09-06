var itemService = require("../../service/item-service.js");
var categoryService = require("../../service/category-service.js");
<<<<<<< HEAD
<<<<<<< HEAD
let app = getApp()
=======
 let app=getApp();
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
Page({
  data: {
    categorys: [{ id: 0, catename: '全部' }],
    currCateId: 0,
    keywords: "",
    pageIndex: 0,
<<<<<<< HEAD
<<<<<<< HEAD
    pageSize: 10,
    itemtype:2,
    createtime:"时间",
    
    array: [2018, 2019, 2020, 2021,2022,2023,2024,2025],
=======
    pageSize: 100,
    isIpx: getApp().globalData.isIpx,
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
    pageSize: 100,
>>>>>>> parent of d5405ec... jy
   shopInfo: {
      titleImg: "",
      shopList: []
    },
   
  },
  onLoad: function (options) {
<<<<<<< HEAD
<<<<<<< HEAD
    categoryService.list(this,13);
    //itemService.list(this)
   },
  onShow() {
    let cateid = app.globalData.cateid
    console.log('cateid11111111111', cateid)
    if (cateid != '') {
=======
    categoryService.list(this);

  },
  onShow() {
    let cateid = app.globalData.cateid
    console.log('cateid11111111111', cateid)
    if (cateid!=''){
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
      let info = this.data.shopInfo;
      info.shopList = [];
      this.setData({
        currCateId: cateid,
        pageIndex: 0,
<<<<<<< HEAD
        shopList: info,
      });
      //categoryService.list(this);

    }
    itemService.list(this);
    
=======
        shopList:info,
      });
      //categoryService.list(this);
      
    }
    itemService.list(this);
    itemService.gettop(this);
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
    app.globalData.cateid = '';
=======
    categoryService.list(this);
    itemService.list(this)
    itemService.gettop(this)
>>>>>>> parent of d5405ec... jy
  },
 navChange(e) {
    let cateid = e.detail.activeNav;
    this.setData({
      currCateId:cateid,
      pageindex: 0
    });
    itemService.list(this)
    itemService.gettop(this)
  },
 shopBtn(e) {
    console.log('e.detail', e.detail.id,)
    wx.navigateTo({
      url: '../detail/details?itemid=' + e.detail.id,
    })
  },
  banBtn(e) {
   wx.navigateTo({
     url: '../detail/details?itemid=' + this.data.gettopitem.id,
    })
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
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index = e.detail.value
    this.setData({
      createtime: this.data.array[index],
    })
    itemService.list(this, this.data.array[index])
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    var that = this;
    itemService.list(this);
  },

  onReachBottom: function () {
    var that = this;
    that.data.pageIndex += 1;
    itemService.list(this);
  },
=======
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