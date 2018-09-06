var itemService = require("../../service/item-service.js");
Page({
  data: {
    categorys: [{ id: 0, catename: '全部' }],
    currCateId: 0,
    items: [],
    contactitem: [],
    itemRecommends: [],
    item: {},
    itemId: null,
    keywords: "",
    pageIndex: 0,
    pageSize: 100,
    scrollLeft: 0,
    activeIndex: 0,
    shopInfo: {
      titleImg: "",
      shopList: [
      ]
    },
    proThemeImage: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522139476100&di=1d872f3e8fb70de42ecf326d1bbba63b&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0320%2F9e2550d8169f060d2b875f6192448ed2.jpg",
    activeNav: 0,
  },


  onLoad: function (options) {
  
    itemService.contact(this)
  },
  bindChange: function (e) {
    this.setData({
      activeIndex: e.detail.current
    });
  },
  navChange(e) {
    let cateid = e.detail.activeNav;
    this.setData({
      currCateId: cateid,
      pageindex: 0
    });
    itemService.list(this)
    itemService.gettop(this)
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id,
      currCateId: e.currentTarget.dataset.cateid,
      pageindex: 0
    });
    itemService.list(this)
  },
  shopTopBtn(e) {
    wx.navigateTo({
      url: '../item/detail/index?id=' + e.currentTarget.dataset.id,
    })
  },
  shopBtn(e) {
    console.log('e.detail', e.detail.id, )
    wx.navigateTo({
      url: '../detail/details?itemid=' + e.detail.id,
    })
  },
  banBtn(e) {
    wx.navigateTo({
      url: '../detail/details?itemid=' + this.data.gettopitem.id,
    })
  },
  onPullDownRefresh: function () {

  },
<<<<<<< HEAD
  bindCallPhoneTab: function (e) {
<<<<<<< HEAD
    let that = this;
    console.log(e);
    let mobile = e.currentTarget.dataset.mobile;
    wx.makePhoneCall({
      phoneNumber: mobile,
    })
},
=======
    wx.getStorage({
      key: 'appotel',
      success: function (res) {
        if (!res.data) {
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
        } else {
          wx.makePhoneCall({
            phoneNumber: res.data
          })
        }
      }
    })
  },
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======

>>>>>>> parent of d5405ec... jy
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})