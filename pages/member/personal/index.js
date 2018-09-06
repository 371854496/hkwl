var memberService=require("../../../service/member-service.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:[],
    region: ['广东省', '广州市'],
    hostregion:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    memberService.userinfo(that).then((res) => {
      var result = res.data;
      var region = new Object();
      region[0] = result.province;
      region[1] = result.city;
      var selectRegion = region[0] + " " + region[1];
      result["createtime"] = that.timestampToDate(result.createtime);
      result["birthday"] = that.timestampToDate(result.birthday);
      that.setData({
        userinfo: result,
        region: region,
        hostregion: selectRegion
      });
    });
  },
  timestampToDate:function(timestamp)
  {
    var datetime = new Date();
    datetime.setTime(timestamp);
    var year= datetime.getFullYear();
    var month=datetime.getMonth();
    var day=datetime.getDate();
    return year+"-"+month+"-"+day;
  },
  bindToAddressListTab:function(e)
  {
    wx.navigateTo({
      url: '../../address/list/index'
    })
  }

})