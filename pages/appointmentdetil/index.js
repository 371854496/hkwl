var appointmentService = require("../../service/appointment-service.js");
var itemService = require("../../service/item-service.js");
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["预约中", "已完成"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    pageIndex: 0,
    pageSize: 100,
    appointtype:"",
    item: {},
    itemid: null,
  },
  onLoad: function (options) {
    var that = this;
    appointmentService.applist(this);
   var itemId = options.itemid;
    console.log('shangpinid', itemId)
    if (itemId != null) {
      this.setData({ itemId: options.itemid })
      itemService.detail(that).then((res) => {
        console.log('itemdetail', res)

        that.setData({ item: res.data.item ? res.data.item : {} })
        console.log(that.data.item)
      });
    }
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

  },
  banBtn(e) {
    let self = this;
    let id = e.currentTarget.dataset.id;
    console.log("ww",id)
    self.triggerEvent("banBtn", { id: id });
    wx.navigateTo({
      url: '../detail/details?itemid=' +id,
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});