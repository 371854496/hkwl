var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var service=require("../../service/order-service.js")

Page({
  data: {
    orders:null,
    tabs: ["全部","待付款", "待发货", "待收货", "已完成"],
    activeIndex: 0,
    pageIndex: 0,
    pageSize: 20
  },
  onLoad: function () {
    service.onLoadOrderListData(this)
  },
  onPullDownRefresh: function () {
    this.setData({
      pageIndex: this.data.pageIndex+1
    });
    service.onLoadOrderListData(this);
  },
  onReachBottom: function () {
    this.setData({
      pageIndex: 0
    });
    service.onLoadOrderListData(this);
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  bindChange: function (e) {
    this.setData({
      activeIndex: e.detail.current,
      pageIndex:0
    });
    service.onLoadOrderListData(this);
  }
});
