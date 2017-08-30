var Promise = require('bluebird');
var model = {};
model.getLoginUser = function() {
  return new Promise(function(resolve, reject) {
    resolve({uid: 1, name: 'xxxxxx'});
    // reject(new Error('error test'));
  });
};
module.exports = model;
