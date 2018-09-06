const regions = require("../utils/regions.js");

var regionService = {
  province: function (that) {
    var result = [];
    for (var i in regions) {
      var item = new Object();
      item.index=i;
      item.code = regions[i].code;
      item.name = regions[i].name;
      result[i] = item;
    }
    that.setData({ provinces: result });
    
    // console.log(result);
  },
  city: function (that,provinceIndex) {
    var cityData = regions[provinceIndex].children;
      var result=[];
      for (var i in cityData) {
          var item = new Object();
          item.parent = provinceIndex;
          item.index = i;
          item.code = cityData[i].code;
          item.name = cityData[i].name;
          result[i]=item;
      }
      that.setData({ citys: result });
      //console.log(city);
  },
  county: function (that,provinceIndex,cityIndex) {
    var districtData = regions[provinceIndex].children[cityIndex].children;
    var result = [];
    for (var i in districtData) {
        var item = new Object();
        item.parent=cityIndex;
        item.index = i;
        item.code = districtData[i].code;
        item.name = districtData[i].name;
        result[i] = item;
    }
    that.setData({districts:result});
    console.log(result);
  }
};
module.exports = regionService;