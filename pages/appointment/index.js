var itemService = require("../../service/item-service.js");
var appointmentService = require("../../service/appointment-service.js");
var orderService = require('../../service/order-service.js');
Page({
  data: {
    inputContent: {},
    mobile:'',
    realname:'',
    remark:"",
    item:{},
    itemId: null,
    time:'',
    date:'',
    number: 1,
    num: 1,
    isIpx: getApp().globalData.isIpx,
    disabled1: false,
    disabled2: false,
    radioItems: [
      { name: 'cell standard', value: '0' },
      { name: 'cell standard', value: '1', checked: true }
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],
    countries: ["无", "技师1", "技师2", "技师3"],
    countryIndex: 0,
    accounts: ["12:00", "13:00", "13:30"],
    accountIndex: 0,
    isAgree: false
  },
  bindNameChange: function (e) {
    this.setData({realname:e.detail.value})
  
  },
  bindPayNow(e) {
    let res = {}
    res.mobile = this.data.mobile;
    res.realname = this.data.realname;
    res.remark = this.data.remark;
    res.servicetime = (this.data.date + ' ' + this.data.time).replace(/-/g, '/');
    let time = Date.parse(new Date(res.servicetime)) / 1000; 
    res.servicetime =time;
    console.log("返回时间：" + time);   
    res.amount = this.data.item.price * this.data.num;
    res.ordertype = 2;
    res.itemid = this.data.item.id;
    res.num = this.data.num;
    if (res.realname == "") {
      wx.showModal({
        title: '提示',
        content: '请填写姓名',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
    if (res.mobile == "") {
      wx.showModal({
        title: '提示',
        content: '请填写正确的手机号',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
   
=======
    if (time !== time || this.data.date == "" || this.data.time=="" ) {
      wx.showModal({
        title: '提示',
=======
    if (res.servicetime !== res.servicetime || this.data.date == "" || this.data.time == "") {
      wx.showModal({
        title: '信息不完整',
>>>>>>> parent of d5405ec... jy
        content: '请填写预约时间',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
<<<<<<< HEAD
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
    orderService.create(this,res)
},
  bindPhoneChange: function (e) {
    let val = e.detail.value;
    console.log('mobile',val)
    this.setData({ mobile: val })
   },
  bindremarkChange: function (e) {
    this.setData({ remark: e.detail.value })
  },
  prevNum() {
    this.setData({ number: this.data.number + 1 });
  },
  nextNum() {
    this.setData({ number: this.data.number - 1 });
  },
  prevNum1() {
    this.setData({
      num: this.data.num >= 10 ? 10 : this.data.num + 1,
      disabled1: false,
      disabled2: this.data.num != 10 ? false : true
    });
  },
  nextNum1() {
    this.setData({
      num: this.data.num <= 1 ? 1 : this.data.num - 1,
      disabled1: this.data.num != 1? false : true,
      disabled2: false
    });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
 
  handleConfirm(e) {
    let res = {}
    res.mobile = this.data.mobile;
    res.realname = this.data.realname;
    res.remark=this.data.remark;
    res.servicetime = (this.data.date + ' ' + this.data.time).replace(/-/g, '/');
    let time = Date.parse(new Date(res.servicetime)) / 1000;
    res.servicetime = time;
    console.log("返回时间：" + time); 
    res.amount = this.data.item.price*this.data.num;
    res.ordertype = 2;
    res.itemid = this.data.item.id;
    res.num = this.data.num;
    console.log('确认预约！',res)
    if(res.realname==""){
      wx.showModal({
        title: '提示',
        content: '请填写姓名',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
     }
    if (res.mobile==""){
      wx.showModal({
        title: '提示',
        content: '请填写正确的手机号',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    } 
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
    if (time !== time || this.data.date == "" || this.data.time == "") {
      wx.showModal({
        title: '提示',
=======
    if (res.servicetime !== res.servicetime || this.data.date == "" || this.data.time == "" ) {
      wx.showModal({
        title: '信息不完整',
>>>>>>> parent of d5405ec... jy
        content: '请填写预约时间',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
<<<<<<< HEAD
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
=======
>>>>>>> parent of d5405ec... jy
   appointmentService.create(this,res)
},
 
 
  onLoad: function (options) {

    var that = this;
    var itemId = options.itemid;
    console.log('shangpinid',itemId)
    if (itemId != null) {
      this.setData({ itemId: options.itemid })
      itemService.detail(that).then((res) => {
        console.log('itemdetail',res)

        that.setData({item:res.data.item?res.data.item:{}})
        console.log(that.data.item)
      });
    }
  },

 

  bindBuyNumInput: function (e) {
    var that = this;
    var inputValue = Number(e.detail.value);
    console.log('blur',inputValue)
    if (isNaN(inputValue))
      that.setData({ num: 1 });
    else{
      inputValue = inputValue<1?1:inputValue;
      that.setData({ num: inputValue });
    }
      

  },
 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  },
  bindChange: function (e) {
    this.setData({
      activeIndex: e.detail.current
    });
  }
  ,
  addCartToast: function () {
    this.showModal();
  },
  placeOrderTab: function (e) {
    wx.navigateTo({
      url: '../placeorder/index'
    })
  },
 

  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  banBtn(e) {
    wx.navigateTo({
      url: '../detail/details?itemid=' + this.data.item.id,
    })
  },
  globalData: {
    userInfo: null,
    cateid: '',
    userInfoBol: true,
    windowHeight: wx.getSystemInfoSync().windowHeight,
    bindBol: true,
    isIpx: wx.getSystemInfoSync().model == 'iPhone X' ? true : false
  }
})