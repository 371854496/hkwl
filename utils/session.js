var placeOrderSessionKey = "placeorderitems";

var Session = {
  get: function (SESSION_KEY) {
    return wx.getStorageSync(SESSION_KEY) || null;
  },

  set: function (SESSION_KEY, session) {
    wx.setStorageSync(SESSION_KEY, session);
  },
  contaion: function (SESSION_KEY) {
    if (this.get(SESSION_KEY) != null)
      return true
    else return false;
  },
  clear: function (SESSION_KEY) {
    wx.removeStorageSync(SESSION_KEY);
  },
};
var placeOrder = {
  get: function () {
    return Session.get(placeOrderSessionKey);
  },
  set:function(session)
  {
    Session.set(placeOrderSessionKey,session);
  },
  has:function()
  {
    return Session.contaion(placeOrderSessionKey);
  },
  clear:function()
  {
    return Session.clear(placeOrderSessionKey);
  }
};

module.exports = {placeOrder};