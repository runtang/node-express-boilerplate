const nodeEnv = process.env.NODE_ENV || 'production';
const isEnvDev = nodeEnv === 'development';
const isEnvStaging = nodeEnv === 'staging';
const isEnvProd = nodeEnv === 'production';
const config = {
  env: nodeEnv,
  isEnvDev: isEnvDev,
  isEnvStaging: isEnvStaging,
  isEnvProd: isEnvProd
};
const configMap = {};
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
Object.keys(configMap).forEach(key => {
  let item = configMap[key];
  config[key] = item[nodeEnv]
    ? item[nodeEnv]
    : item;
});
module.exports = config;
