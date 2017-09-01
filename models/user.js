const Promise = require('bluebird');
const model = {};
model.getLoginUser = () => {
  return new Promise((resolve, reject) => {
    resolve({uid: 1, name: 'xxxxxx'});
    // reject(new Error('error test'));
  });
};
module.exports = model;
