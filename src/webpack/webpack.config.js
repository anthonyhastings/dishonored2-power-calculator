module.exports = function (env) {
  return require('./env.' + env + '.js')();
};
