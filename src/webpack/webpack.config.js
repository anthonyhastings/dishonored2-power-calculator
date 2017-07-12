module.exports = function (env) {
  return require(`./env.${env.target}.js`)(env);
};
