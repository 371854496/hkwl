var birthdayService = {
  years: function (that) {
    var currDate = new Date;
    var year = currDate.getFullYear();
    var beignYear = year - 50;
    var endYear = year - 16;
    var result = [];
    for (var i = beignYear; i < endYear + 1; i++) {
      result.push(String(i));
    }
    console.log(result);

  },
  months: function (that) {
    var result = [];
    for (var i = 0; i < 12; i++) {
      if (i < 9)
        result.push("0" + (i + 1));
      else
        result.push(String(i + 1));
    }
    console.log(result);
  },
  days: function (that, year, month) {
    var date = new Date(year, month, 1);
    var daynum= new Date(date.getTime() - 864e5).getDate();  
    var result = [];
    for (var i = 0; i < daynum; i++) {
      if (i<9)
        result.push("0" + (i + 1));
      else
        result.push(String(i + 1));
    }
    console.log(result);
  }

}
module.exports = birthdayService;