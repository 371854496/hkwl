var app = getApp();
var categoryService = {
    list:function(that)
    {
      var urlPath = "api/category/list";
      var params = { appid: app.appId };
      app.request.doPost(urlPath, params, res => {
        var categorys = [{ id: 0, catename: '全部' }];
        console.log('categorylist',res.data)
        for(var index in res.data)
        {
          var item=new Object();
          item.id=res.data[index].id;
          item.catename=res.data[index].catename;
          categorys.push(item);
        }

        that.setData({categorys: categorys})
      }, res => { }, res => {
      });
    },
    sublist:function(that)
    {

    },
    recommend:function(that)
    {
      var urlPath = "api/category/recommend";
      var params = { appid: app.appId };
      app.request.doPost(urlPath, params, res => {
        that.setData({
          categoryRecommends: res.data
        })
      }, res => { }, res => {
        if (that.data.isRefresh) {
          wx.stopPullDownRefresh;
          that.setData({ isRefresh: false });
        }
      });
    }
};
module.exports = categoryService;