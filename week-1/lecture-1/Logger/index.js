var moment = require('moment');
var now = moment(new Date());

module.exports.log = function(messages) {
  //var date = new date();
  //console.log(date + ">>> " + messages);
  console.log(now.format("D MMM YYYY") + " >>>> " + messages);
}
