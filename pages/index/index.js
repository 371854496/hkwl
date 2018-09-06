const swiperService=require("../../service/swiper-servicre.js");
const itemService=require("../../service/item-service.js");
<<<<<<< HEAD
<<<<<<< HEAD
const articleService=require("../../service/article-service.js");
var categoryService = require("../../service/category-service.js");
var order = ['red', 'yellow', 'blue', 'green', 'red']  
=======
var categoryService = require("../../service/category-service.js");
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
let app = getApp()
=======


>>>>>>> parent of d5405ec... jy
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    inputShowed: false,
    inputVal: "",
<<<<<<< HEAD
    isRefresh:false,
<<<<<<< HEAD
     toView: 'green',
    scrollTop: 0,
    scrollLeft: 100 , 
    articles:[],
    pageIndex:0,
    pageSize:20,
  },
  
showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
=======
    keywords: "",
    pageIndex: 0,
    pageSize: 100,
   isIpx: getApp().globalData.isIpx
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
    isRefresh:false
>>>>>>> parent of d5405ec... jy
  },
  onLoad: function () {
    var that=this;
    swiperService.list(this);
    itemService.recommend(this);
<<<<<<< HEAD
<<<<<<< HEAD
    articleService.list(this);
    categoryService.list(this,13);
    categoryService.recommend(this);
=======
>>>>>>> parent of d5405ec... jy
   },
  onSwitchItemTab:function(){
    wx.switchTab({url:'../category/index'})
=======
    categoryService.recommend(this);
   
  }, 
  
  clickTap(e){ 
    let id = e.currentTarget.dataset.id
    app.globalData.cateid = id;
   
    wx.switchTab({
      url: '../category/index' 
    });
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
  },
  banTap: function (e) {
   let bantype=e.target.dataset.id.linkurl;
       console.log(e);
       if (bantype==""){
        return;
       }
    let pd = JSON.parse(bantype);
    console.log(pd.type);
   
   if(pd.type=="item"){
      wx.navigateTo({
        url: '../detail/details?itemid=' + pd.id
      })
    } else if (pd.type == "category") {
    
     app.globalData.cateid =pd.id ;
      wx.switchTab({
        url: '../category/index' 
      })  
    } else if (pd.type == "article") {
      wx.navigateTo({
        url: '../contact/index'
      })
    } else if (pd.type == "aboutus") {
      wx.navigateTo({
        url: '../article/index'
      })
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> parent of d5405ec... jy
 
  /**
 * 用户点击右上角分享
 */
<<<<<<< HEAD
  //滚动条滚到顶部的时候触发  
  upper: function (e) {
    console.log("顶部");
  },
  //滚动条滚到底部的时候触发  
  lower: function (e) {
    console.log("底");
  },
  //滚动条滚动后触发  
  scroll: function (e) {
    console.log("滚动");
  },
  //通过设置滚动条位置实现画面滚动  
  tapMove: function (e) {
    this.setData({
      scrollleft: this.data.scrollleft + 10
    })
  }  
=======
  
 globalData:{
    userInfo:null,
    cateid:'',
    userInfoBol:true,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    bindBol:true,
    isIpx:wx.getSystemInfoSync().model=='iPhone X'?true:false
 },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {
   var article_id = wx.getStorageSync('current_article_id');
   var path = '/pages/article/article?article_id=' + article_id + '';
   return {
     title: article_title,
     path: path
   }
 },
  // 下拉刷新  
  onPullDownRefresh: function () {
    // 显示顶部刷新图标  
    wx.stopPullDownRefresh()
    var that = this;
    swiperService.list(this);
    itemService.recommend(this);
    categoryService.recommend(this);
  },  
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
 
>>>>>>> parent of d5405ec... jy
})