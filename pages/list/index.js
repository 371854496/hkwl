var itemService=require("../../service/item-service.js");
Page({
  data: {
    items: [],
    categorys: [],
    currCateId: 0,
    keywords:"",
    pageIndex: 0,
    pageSize: 20,
  },
  onLoad: function (options) {
    //service.onLoadCategoryData(this);
     itemService.list(this);
  },
  onPullDownRefresh: function () {
    this.setData({ pageIndex: 0, items: [] });
    service.onLoadItemListData(this);
  },
  onReachBottom: function () {

    this.setData({ pageIndex: this.data.pageIndex + 1 });
    service.onLoadItemListData(this);
  },
  onShareAppMessage: function () {

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
  },
})