'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

function load(confDirectory = process.cwd(), envOverrideOptions = {}) {
  const customEnv = process.env.NODE_ENV;
  const dependencies = [];
  let confFile = path.join(confDirectory, customEnv
    ? `${customEnv}.json`
    : 'env.json'
  );
  let env = {};

  while (confFile) {
    const extendsEnv = fs.existsSync(confFile) ? require(confFile) : {};
    delete env.$extends;
    env = _.defaultsDeep(env, extendsEnv);
    if (env.$extends) {
      dependencies.push(confFile);
      confFile = path.resolve(path.dirname(confFile), env.$extends);
    } else {
      confFile = null;
    }
  }
  return env;
}

module.exports = {
  load,
};
