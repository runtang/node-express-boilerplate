var nodeEnv = process.env.NODE_ENV || 'production';
var isEnvDev = nodeEnv === 'development';
var isEnvStaging = nodeEnv === 'staging';
var isEnvProd = nodeEnv === 'production';
var config = {
  env: nodeEnv,
  isEnvDev: isEnvDev,
  isEnvStaging: isEnvStaging,
  isEnvProd: isEnvProd
};
var configMap = {};
configMap.s3 = {
  development: {
    key: 'xxx',
    secret: 'yyy'
  },
  staging: {
    key: 'xxx',
    secret: 'yyy'
  },
  production: {
    key: 'xxx',
    secret: 'yyy'
  }
};
configMap.db = {
  url: 'https://xxx.yyy'
};
Object.keys(configMap).forEach(function(key) {
  var item = configMap[key];
  config[key] = item[nodeEnv]
    ? item[nodeEnv]
    : item;
});
module.exports = config;
